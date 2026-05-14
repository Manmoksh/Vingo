import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStore, FaUtensils, FaArrowLeft, FaClock, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { serverUrl } from "../config/env"; // Corrected import path
import FoodCard from "../components/FoodCard";
import { logger } from "../utils/logger";
import { ClipLoader } from "react-spinners";

function Shop() {
  const { shopId } = useParams();
  const navigate = useNavigate();
  
  const [items, setItems] = useState([]);
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleShop = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${serverUrl}/api/item/get-by-shop/${shopId}`,
        { withCredentials: true }
      );
      setShop(result.data.shop);
      setItems(result.data.items);
    } catch (error) {
      logger.error("Fetch shop failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (shopId) handleShop();
  }, [shopId]);

  // Premium Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
        <ClipLoader size={50} color="#ec4899" />
        <p className="mt-4 text-(--text-muted) font-medium tracking-wide animate-pulse">
          Loading amazing food...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Floating Back Button */}
      <button
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md hover:bg-white text-(--text-primary) px-5 py-2.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer border border-white/20 font-medium"
        onClick={() => navigate(-1)} // Smarter navigation
      >
        <FaArrowLeft className="text-sm" />
        <span>Back</span>
      </button>

      {/* Hero Header Section */}
      {shop && (
        <div className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
          <img
            src={shop.image || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"}
            alt={shop.name}
            className="w-full h-full object-cover scale-105"
          />
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent flex flex-col justify-end pb-12 px-6">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col items-start gap-4">
                <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Top Rated
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
                  {shop.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-200 mt-2">
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-pink-400" />
                    <span className="text-sm md:text-base font-medium">{shop.address}</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                    <FaClock className="text-amber-400" />
                    <span className="text-sm md:text-base font-medium">25-35 mins</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm md:text-base font-medium">4.8 (100+ ratings)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 mb-20 border border-slate-100">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-1 bg-pink-500 rounded-full mb-4"></div>
            <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-extrabold text-(--text-primary)">
              <FaUtensils className="text-pink-500 text-2xl" />
              Signature Menu
            </h2>
            <p className="text-(--text-muted) mt-2 text-center max-w-md">
              Freshly prepared meals delivered straight from our kitchen to your doorstep.
            </p>
          </div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {items.map((item) => (
                <div key={item._id || item.id} className="transform transition-transform duration-300 hover:-translate-y-2">
                   <FoodCard data={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center opacity-40">
              <FaUtensils size={60} className="mb-4" />
              <p className="text-xl font-medium">No delicacies available today.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;