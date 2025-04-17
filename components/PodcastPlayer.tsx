// pages/podcast.tsx
import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaRedo, FaVolumeUp, FaShareAlt, FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineForward10 } from "react-icons/md";
import { MdOutlineReplay10 } from "react-icons/md";
// Import your images - adjust paths as needed
import Cover from "../public/Added1.png";
import Share1 from "../public/Share1.png";
import Share2 from "../public/Share2.png";
// This would be your podcast cover image
import Podcast from "../public/Added1.png"; // Adjust path as needed

export default function PodcastPage() {
  // These values would typically come from your data source
  const coverImage = Podcast;
  const title = "The Funeral Experience – the Good, the Bad, and the Ugly";
  const description =
    "The struggles of a widow begin immediately when her husband dies; she is immediately made to go through...";
  const date = "Sept 3, 2023";
  const duration = "28:04";

  return (
    <div>
      {/* Main content area */}
      <div className="relative bg-cover bg-center bg-no-repeat overflow-hidden p-6 text-white">
        {/* Blur Overlay */}
        <Image
          src={Podcast}
          alt=""
          className="w-full h-full absolute inset-0 backdrop-blur-sm z-0"
        />
        <div className="absolute inset-0 backdrop-blur-lg z-0"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex flex-col space-y-6">
          {/* Back Button */}
          <button className="text-xs inline-flex items-center gap-2 text-white hover:text-white mb-2 text-left">
            <IoIosArrowBack /> Back to podcast
          </button>

          {/* Podcast Details */}
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src={Cover}
              alt="Podcast Cover"
              className="w-40 h-40 rounded-md object-cover"
            />

            <div className="w-full">
              <div className="text-xs text-[#bfbfbf] mb-1">
                {date} &nbsp;•&nbsp; {duration}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
              <p className="text-white text-sm leading-relaxed">
                {description}{" "}
                <span className="text-green-400 font-semibold cursor-pointer">
                  READ MORE
                </span>
              </p>

              {/* Audio Controls */}
              <div className="flex flex-col space-y-4 pt-8">
                {/* Progress Bar */}
                <div className="flex items-center space-x-4 text-xs text-gray-300">
                  <span>00:15</span>
                  <div className="flex-1 bg-gray-500 h-1 rounded-full relative">
                    <div
                      className="bg-green-400 h-1 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                    {/* This inline style simulates current progress */}
                  </div>
                  <span>{duration}</span>
                  <FaVolumeUp />
                </div>

                {/* Playback Buttons */}
                <div className="flex items-center justify-between">
                  <div className="space-x-8 flex items-center">
                    <button className="text-white hover:text-green-400 text-4xl">
                      <MdOutlineReplay10 />
                    </button>
                    <button className="bg-[#cc0001] hover:bg-red-600 p-4 rounded-full">
                      <FaPlay size={24} />
                    </button>
                    <button className="text-white hover:text-green-400 text-4xl">
                      <MdOutlineForward10 className="" />
                    </button>
                  </div>

                  <div className="flex space-x-6 ml-8">
                    <Image src={Share1} alt="Podcast Cover" className="" />
                    <Image src={Share2} alt="Podcast Cover" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
