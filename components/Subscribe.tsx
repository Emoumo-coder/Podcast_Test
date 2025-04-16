"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Sub1 from "../public/Sub1.png";

import Sub2 from "../public/Sub2.png";

import Wave1 from "../public/Wave1.png";

import Wave2 from "../public/Wave2.png";

const Subscribe: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full bg-red-50 py-20 px-6 md:px-12">
      <div className="lg:px-32 px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content - Text and form */}
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Never stop listening!
            </h2>
            <p className="text-gray-700 mb-4">
              Every episodes is a journey you don't wanna miss out on.
            </p>
            <p className="text-xs pt-8 text-gray-600 mb-6">
              Get the latest headlines and unique ABR stories sent every
              weekday.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow text-xs bg-gray-200 text-gray-800 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="bg-[#cc0001] text-xs text-white px-6 py-3 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                Get me in
              </button>
            </form>
          </div>

          {/* Right content - Overlapping images */}
          <div className="w-full md:w-1/2 relative h-64 md:h-80">
            {/* Background round image */}
            <div className="absolute right-0 -top-12 w-56 h-56 md:w-[404px] md:h-[404px] rounded-full overflow-hidden">
              <Image
                src={Sub1}
                alt="Woman listening to podcast"
                layout="fill"
                objectFit="cover"
                className="rounded-full h-full w-full"
              />
            </div>

            {/* Small laptop/screen image */}
            <div className="absolute bottom-0 left-12 md:left-12 w-32 h-32 md:w-40 md:h-32 p-1 rounded-lg ">
              <Image
                src={Sub2}
                alt="Podcast interface"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Audio wave decoration */}
            <div className="absolute w-16 h-16 left-5 top-14 md:top-44">
              <Image
                src={Wave2}
                alt="Podcast interface"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Decorative pink dot */}
            <div className="absolute right-0 top-2 w-12 h-12  rounded-full flex items-center justify-center">
              <Image
                src={Wave1}
                alt="Podcast interface"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
