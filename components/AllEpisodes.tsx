"use client";
import React from "react";

import { FiShare2 } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { PiNotepadBold, PiUsersBold } from "react-icons/pi";
import Image from "next/image";
import Added1 from "../public/Added1.png";

import Ads6 from "../public/Ads6.png";
import Ads7 from "../public/Ads7.png";

import Share1 from "../public/Share1.png";
import Share2 from "../public/Share2.png";
import Share3 from "../public/Share3.png";
import Pagination2 from "./Pagination2";

const AllEpisodes = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-12 py-12">
      <div className="col-span-3">
        <div className="lg:px-12 mx-auto px-4 py-6 border-b border-gray-200 min-h-[100vh]">
          {/* Header */}
          <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide mb-4">
            All Episodes <span className="text-gray-500">(3 Available)</span>
          </p>

          {/* Card */}
          <div className="flex items-start space-x-6 border-t py-4">
            {/* Thumbnail */}
            <div className="w-32 h-32 relative">
              <Image
                src={Added1} // Replace with actual cover image
                alt="Episode Cover"
                layout="fill"
                className="rounded-md object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="text-sm text-gray-500 mb-1">
                <span>Sept 3, 2023</span> <span className="mx-1">•</span>{" "}
                <span>28 mins</span>
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                The Funeral Experience – the Good, the Bad, and the Ugly
              </h3>
              <p className="text-xs text-gray-700 mb-4">
                The struggles of a widow begin immediately when her husband
                dies; she is immediately made to go through various traditional
                rites, disregarding her pain and process of grieving.
              </p>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <div className="bg-[#cc0001] p-2 rounded-full">
                  <FaPlay
                    className="text-white cursor-pointer hover:scale-110 transition"
                    size={12}
                  />
                </div>
                <Image
                  src={Share3} // Replace with actual cover image
                  alt="Episode Cover"
                  className="h-8"
                />
                <Image
                  src={Share1} // Replace with actual cover image
                  alt="Episode Cover"
                  className="h-8"
                />
                <Image
                  src={Share2} // Replace with actual cover image
                  alt="Episode Cover"
                  className="h-8"
                />
              </div>
            </div>
          </div>
        </div>
        <Pagination2 />
      </div>
      <div className=" space-y-8">
        <Image
          src={Ads6} // Replace with actual cover image
          alt="Episode Cover"
          className="h-[480px]"
        />{" "}
        <Image
          src={Ads7} // Replace with actual cover image
          alt="Episode Cover"
          className="h-[330px]"
        />
      </div>
    </div>
  );
};

export default AllEpisodes;
