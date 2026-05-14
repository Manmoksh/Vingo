import User from "./models/user.model.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    socket.on("identity", async ({ userId }) => {
      try {
        if (!userId) return;
        await User.findByIdAndUpdate(
          userId,
          {
            socketId: socket.id,
            isOnline: true,
          },
          { new: true }
        );
      } catch (error) {
        console.log("Error in setting socket ID:", error);
      }
    });

    socket.on("updateLocation", async ({ latitude, longitude, userId }) => {
      try {
        const user = await User.findByIdAndUpdate(userId, {
          location: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          isOnline: true,
          socketId: socket.id,
        });

        if (user) {
          io.emit("updateDeliveryLocation", {
            deliveryBoyId: userId,
            latitude,
            longitude,
          });
        }
      } catch (error) {
        console.log("Error in updating delivery location:", error);
      }
    });
    socket.on("disconnect", async () => {
      try {
        // CRITICAL: Only attempt DB update if Mongoose is actually connected
        if (mongoose.connection.readyState === 1) {
          await User.findOneAndUpdate(
            { socketId: socket.id },
            {
              $set: {
                socketId: null,
                isOnline: false,
              },
            }
          );
          console.log(`🔌 Socket ${socket.id} cleared from DB.`);
        } else {
          console.warn("🏃 Disconnect fired, but DB connection was not ready.");
        }
      } catch (error) {
        // This catches the ECONNRESET without crashing your whole Node server
        console.error(
          "🩹 Gracefully handled disconnect DB error:",
          error.message
        );
      }
    });
    socket.on("disconnect", async () => {
      try {
        await User.findOneAndUpdate(
          { socketId: socket.id },
          {
            socketId: null,
            isOnline: false,
          }
        );
      } catch (error) {
        console.log("Error in clearing socket ID on disconnect:", error);
      }
    });
  });
};
