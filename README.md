# 🍔 Vingo – Real-Time Food Delivery Application

Vingo is a **full-stack real-time food delivery platform** built to simulate a production-level delivery ecosystem. The platform connects **customers, restaurant/shop owners, and delivery partners** through a seamless ordering workflow powered by REST APIs and real-time communication.

The system supports:

- Multi-role authentication
- Live order updates
- Delivery assignment
- OTP-based delivery verification
- Real-time tracking
- Secure payments
- Geo-location based services

---

# 🚀 Features

## 👤 Customer Features

- User Registration & Login
- JWT-based Authentication
- Browse Restaurants & Food Items
- Search & Filter Food
- Add to Cart
- Checkout Process
- Delivery Address Selection
- Online Payment Integration
- Cash on Delivery Option
- Live Order Tracking
- Real-Time Status Updates
- OTP Verified Delivery Completion
- Order History

---

## 🏪 Restaurant / Shop Owner Features

- Shop Dashboard
- Add / Edit / Delete Food Items
- Upload Food Images
- Receive Orders in Real-Time
- Accept / Reject Orders
- Update Order Status
- Manage Inventory & Listings

---

## 🚚 Delivery Partner Features

- Receive Nearby Delivery Assignments
- Accept Orders Dynamically
- Live Location Sharing
- Delivery Navigation
- OTP-Based Delivery Confirmation
- Real-Time Assignment Updates

---

# 🧰 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router DOM
- React Leaflet

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication & Security

- JWT Authentication
- Cookie-Based Session Handling
- bcrypt Password Encryption

## Real-Time Communication

- Socket.IO

## Payment Gateway

- Razorpay Integration

## File Storage

- Cloudinary

## Maps & Tracking

- Leaflet Maps
- Geolocation API

## Email Services

- Nodemailer (OTP Verification)

---

# 🏗️ System Architecture

The application follows a **Full-Stack MERN Architecture**.

```text
Frontend (React + Redux)
        ↓
REST APIs + Socket.IO
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Database
```

Real-time features are powered using **Socket.IO**, allowing instant communication between:

- Customer
- Restaurant Owner
- Delivery Partner

---

# 📂 Project Structure

```bash
Vingo-Food-Delivery-Application/
│
├── frontend/                 # React Frontend
├── backend/                  # Node.js + Express Backend
├── public/                   # Static Assets
├── uploads/                  # Uploaded Files
├── controllers/              # API Controllers
├── models/                   # MongoDB Models
├── routes/                   # API Routes
├── middleware/               # Auth & Validation Middleware
├── sockets/                  # Socket.IO Handlers
├── utils/                    # Helper Functions
├── package.json
└── README.md
```

---

# 📡 Real-Time Workflow

## 1. Authentication & Initialization

- User logs in
- JWT token created
- User location detected
- Shops loaded based on city/location

## 2. Order Placement

- Customer adds items to cart
- Checkout completed
- Address selected
- Backend groups orders by shop

## 3. Payment Handling

- Razorpay order generated
- Payment verification
- Order confirmation

## 4. Real-Time Order Processing

- Shop owner receives live order notification
- Accepts order
- Updates status

## 5. Delivery Assignment

- Nearby delivery partners detected
- Assignment broadcasted
- Delivery partner accepts request

## 6. Live Tracking

- Delivery partner shares location continuously
- Customer sees real-time movement on map

## 7. Delivery Completion

- OTP sent to customer
- Delivery partner verifies OTP
- Order marked as delivered

---

# 🎯 Key Highlights

- Real-Time Order Tracking
- Event-Driven Architecture
- Multi-Role Platform
- Scalable MERN Stack Design
- Secure Authentication
- Socket-Based Live Communication
- OTP Delivery Verification
- Geo-Based Delivery Assignment

---

# 🌍 Future Enhancements

- AI Food Recommendation System
- Push Notifications
- In-App Chat Between User & Delivery Partner
- Coupon & Discount System
- Rating & Reviews
- Analytics Dashboard

---
