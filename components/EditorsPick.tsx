import React from "react";
import Image from "next/image";
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

const EditorsPicks: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className=" mx-auto">
        <div className="mb-2">
          <h2 className="text-xl font-bold uppercase pb-2">EDITOR'S PICKS</h2>
          <div className=" border-l-4 space-x-3 gap-2 border-x-2 border-red-700 ">
            <p className="text-sm text-gray-600 px-2">
              {"  "} Featured Episodes{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6 h-full">
          {/* License to Live - Large Card */}
          <div className="md:col-span-2  rounded shadow-sm overflow-hidden h-full">
            <div className="relative h-full">
              <div className="h-full w-full">
                <Image
                  src={Pick1}
                  alt="License to Live"
                  fill
                  className="object-cover h-full w-full"
                />
                <div className=" absolute bottom-0 w-full p-4 inline-flex gap-3 items-center bg-black/20">
                  <div className="h-10 w-10 bg-red-600 rounded-full p-1">
                    <svg
                      className="h-8 w-8 text-white mx-auto"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    Bridging the Financing Gap in Nigeria's off-grid sector
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {/* The Future of Work Card */}

              <div className="">
                <Image src={Pick2} alt="Future of Work" className=" w-full" />
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
                    <h3 className="font-bold text-md">
                      The Future of Work: Embracing Remote and Hybrid Workforces
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mt-2 space-x-2">
                      <span>Sept 7, 2023</span>
                      <span>•</span>
                      <span>35 mins</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ladies Lounge Card */}
              <div className="">
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
                    <h3 className="font-bold text-md">
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

            <p className="text-[10px] text-right py-2">ADVERTISEMENT</p>
            <Image src={Ads2} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPicks;
