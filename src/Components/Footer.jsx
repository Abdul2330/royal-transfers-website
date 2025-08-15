// Footer.jsx
import React from "react";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="footer"
    className="bg-[#1c1536] text-white py-12 px-4 md:px-16 relative">
          {/* Logo */}
<div className=" h-[100px] flex items-center justify-start mb-[70px] pl-[500px]">
  <a href="#home">
    <img
      src="https://www.airportlondonuktaxi.co.uk/_next/static/media/logo.8517b473.svg"
      alt="Royals"
      className="h-[100px] "
    />
  </a>
  
</div>
  <p className="text-3xl font-bold -mt-11 ml-[330px]">
    Your Journey Begins with Royal Transfers
  </p>

  
    <h5 className="mt-11 text-xl font-bold text-[#d9b66c]">Contact Details</h5>
 {/*Contact Info */}
<div className="space-y-2 text-sm text-gray-300 mt-5">
  <p className="flex items-center gap-2">
    <FiPhone className="text-lg" />
    +44 20 8004 9990
  </p>
  <p className="flex items-center gap-2">
    <FiMail className="text-lg" />
    info@royaltransfers.co.uk
  </p>
  <p className="flex items-center gap-2">
    <FiMapPin className="text-lg" />
    450 Bath Road Heathrow Longford UB7 0EB
  </p>
</div>
{/* Subscription scetion */}
<div className="-mt-[90px] md:absolute right-16 top[130px] ">
<div className="relative w-[280px] md:w-[300px]">
    <input
    type="email"
    placeholder="enter your email"
    className="w-full px-4 py-2 pr-24 pt-3  rounded-md focus:outline-none text-black bg-white"
    />
    <button className="absolute top-1 right-1 bottom-1 bg-[#1c1536] rounded-md text-sm font-semibold">
    Subscribe
    </button>
</div>
{/* Social Icons */}
<div className="flex space-x-4 mt-4 justify-end text-white text-lg">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-tiktok"></i>

</div>
</div>

<p className="text-center text-sm text-white mt-16">
  Copyright © 2025 Go Royal Transfers - All Rights Reserved
</p>

  
</footer>

    
  );
};

export default Footer;
