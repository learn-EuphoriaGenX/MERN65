import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";

const Footer = () => {
  return (
    <footer className="bg-[#0098DA] text-white pt-10 mt-20 pb-5">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MegaMart</h2>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp<br />+1 202-918-2132</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl" />
                <span>Call Us<br />+1 202-918-2132</span>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-2">Download App</h3>
              <div className="flex gap-3">
                <img src={appstore} alt="App Store" className="w-10 h-10 cursor-pointer" />
                <img src={playstore} alt="Google Play" className="w-10 h-10 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-white w-fit pb-1">
              Most Popular Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b-2 border-white w-fit pb-1">
              Customer Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>E-waste Policy</li>
              <li>Cancellation & Return Policy</li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom Line */}
        <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm">
          <p>© 2022 All rights reserved. Reliance Retail Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
