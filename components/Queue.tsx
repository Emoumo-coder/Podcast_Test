import Image from "next/image";
import React from "react";
import Link from "next/link";

import Logo from "../public/Logo.png";
import Pick1 from "../public/Pick1.png";

import Pick2 from "../public/Pick2.png";
import Pick3 from "../public/Pick3.png";
import Ads2 from "../public/Ads2.png";

interface EpisodeCardProps {
  title: string;
  image: string;
  date?: string;
  duration?: string;
  category?: string;
  isLarge?: boolean;
  host?: string;
}

interface AdvertisementProps {
  imageUrl: string;
  link: string;
}

const Queue = () => {
  return (
    <div className="p-12 ">
      <h1 className="text-[#5a5a5a] py-4 font-bold border-b ">
        NEXT EPISODES IN QUEUE
      </h1>
      {/* Ladies Lounge Card */}
      <div className="grid grid-cols-5 gap-4 py-8">
        <div className="shadow-md">
          <Image src={Pick3} alt="Future of Work" className=" w-full" />
          <div className="inline-flex items-center bg-white">
            <div className="h-10 w-10 bg-red-600 rounded-full p-1">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </div>
            <div className="p-3">
              <h3 className="font-bold e">
                Compactibility in Relationships in families
              </h3>

              <div className="flex items-center text-sm text-gray-600 mt-2 space-x-2">
                <span>Sept 7, 2023</span>
                <span>•</span>
                <span>35 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
