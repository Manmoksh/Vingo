
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from "../components/Nav";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function AppLayout() {
  return (
    // Added 'flex flex-col' to ensure footer stays at bottom
    <div className="flex flex-col min-h-screen bg-[radial-gradient(1000px_600px_at_20%_-10%,var(--brand-soft),transparent_55%),radial-gradient(900px_500px_at_90%_0%,var(--brand-haze),transparent_45%),var(--bg-canvas)] text-(--text-primary)">
      
      <Nav />
      
      {/* Added 'flex-1' so the main content pushes the footer down */}
      <main className="flex-1 pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 flex flex-col">
        <div className="max-w-7xl mx-auto w-full animate-app-fade flex-1">
          <Outlet />
        </div>
      </main>

      {/* Premium Multi-Column Footer */}
      <footer className="border-t border-slate-200/60 bg-white/60 backdrop-blur-xl mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Top Section: Links and Brand */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-4">
                Vingo<span className="text-pink-500">.</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                Redefining the premium delivery experience. Real-time order tracking, frictionless checkout, and city-first discovery straight to your doorstep.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={20} /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><FaLinkedin size={20} /></a>
                <a href="#" className="hover:text-pink-500 transition-colors"><FaGithub size={20} /></a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-wider">Discover</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link to="/" className="hover:text-pink-500 transition-colors">Restaurants Near Me</Link></li>
                <li><Link to="/orders" className="hover:text-pink-500 transition-colors">Track Order</Link></li>
                <li><Link to="/cart" className="hover:text-pink-500 transition-colors">Your Cart</Link></li>
                <li><Link to="/profile" className="hover:text-pink-500 transition-colors">My Account</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-wider">Legal</h3>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Partner with Us</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
            <p>© {new Date().getFullYear()} Vingo Technologies. All rights reserved.</p>
            <p>Made with ❤️ </p>
          </div>
          
        </div>
      </footer>

    </div>
  );
}

export default AppLayout;