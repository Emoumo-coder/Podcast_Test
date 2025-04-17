import React from "react";
import { TbMinusVertical } from "react-icons/tb";
import { FaPlay, FaRedo, FaUser } from "react-icons/fa";
import Image from "next/image";

import Story1 from "../public/Story1.png";
import Share1 from "../public/Share1.png";
import Share2 from "../public/Share2.png";
import Pagination from "./Pagination";

const AllPodcasts = () => {
  return (
    <div className="lg:p-12 p-4 ">
      <h1 className="text-[#5a5a5a] py-4 font-bold border-b ">ALL PODCASTS</h1>
      <div className="inline-flex items-center gap-6 py-6">
        <div>
          <p>
            Sort by: <span className="font-bold">Popular ...</span>
          </p>
        </div>
        <TbMinusVertical />
        <div>
          <p>
            Sort by: <span className="font-bold">Category: All ...</span>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 gap-4 ">
        {/* Card */}
        <div className="bg-white rounded-lg overflow-hidden cursor-pointer  hover:shadow-lg transition flex flex-col">
          <Image
            src={Story1}
            alt="Podcast Cover"
            className="w-full h-48 object-cover"
            width={1000}
          />
          <div className="py-4 flex flex-col flex-grow">
            <span className="text-xs text-gray-500 font-semibold mb-1">
              Fitness Focus
            </span>
            <p className="text-sm text-gray-600 mb-0">
              EP12: Cardio Vascular Exercise Part 3
            </p>
            <div className="flex items-center text-gray-400 text-xs space-x-3 mt-1">
              <span>AUG 29, 2023</span>
              <span>•</span>
              <span>45 MINS</span>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <button className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white">
                <FaPlay size={16} />
              </button>
              <Image
                src={Share1}
                alt="Podcast Cover"
                className="w-8  object-cover"
                width={1000}
              />
              <Image
                src={Share2}
                alt="Podcast Cover"
                className="w-8  object-cover"
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default AllPodcasts;
