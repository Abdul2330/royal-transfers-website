import React from "react";
import { CheckCircle } from "lucide-react"; // Make sure lucide-react is installed

export default function WhyChoose() {
  return (
    <section className="bg-[#1a1919] py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 ">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold mt-11">
          <span className="text-[#1F2154]">WHY CHOOSE </span>
          <span className="text-[#D8B76A]">ROYAL TRANSFERS</span>
        </h2>
        <p className="text-gray-600">
          Picking a taxi service involves more than simply moving from one place to another.
          Only Royal Transfers can deliver the comfort you need, combined with complete safety and
          excellent value, while helping you trust them immediately. Royal Transfers follows this
          value system to operate as your preferred taxi provider in your local neighborhood.
        </p>
        <ul className="space-y-4 text-sm text-[#1F2154] font-medium">
          <li className="flex items-start gap-2">
            <CheckCircle className="text-[#D8B76A] w-5 h-5 mt-1" />
            Prompt Pick-Ups & On-Time Drop-Offs
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-[#D8B76A] w-5 h-5 mt-1" />
            Clean & Comfortable Vehicles
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-[#D8B76A] w-5 h-5 mt-1" />
            Licensed and Courteous Drivers
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="text-[#D8B76A] w-5 h-5 mt-1" />
            24/7 Taxi Service – Always Available
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-1/3">
        <img
          src="https://www.airportlondonuktaxi.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchoose-image.0c302530.png&w=828&q=75" // <-- Replace with your actual image path
          alt="Taxi Service"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>
    </section>
  );
}
