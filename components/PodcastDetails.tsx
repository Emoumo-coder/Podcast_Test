"use client";

import { FaSpotify, FaGoogle, FaApple } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import Added1 from "../public/Added1.png";
import Wok from "../public/Wok.png";

import Wok1 from "../public/Wok1.png";
import Wok2 from "../public/Wok2.png";
import Wok3 from "../public/Wok3.png";

export default function PodcastDetails() {
  return (
    <div className="flex items-center justify-between  mx-auto p-6 lg:px-12 bg-gradient-to-r from-[#2b3221] to-[#4B5E52]   text-white">
      {/* Left Side */}
      <div className="flex lg:flex-row flex-col items-center space-x-6">
        <div className="w-[390px] h-[350px] relative">
          <Image
            src={Added1} // replace with your actual path
            alt="Hope for the Widow"
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide">Podcast</p>
          <h2 className="text-2xl font-bold mb-2">Hope For the Widow</h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/90">
            The show aims to shed light on the challenges faced by loss
            privileged widows, providing support and a platform to promote a
            better life. Join us in making a difference. #EmpoweringWidows
            #SupportingWidows.
          </p>
          <div className="flex flex-col items-start gap-3 pt-20">
            <span className="text-sm text-[#bfbfbf]">Available on</span>

            <div className="inline-flex gap-4">
              {/* <FaSpotify size={20} className="text-green-500 cursor-pointer" />
              <FaGoogle size={20} className="text-yellow-500 cursor-pointer" />
              <FaApple size={20} className="text-gray-200 cursor-pointer" /> */}
              <Image
                src={Wok1} // replace with actual image of "Wolpa"
                alt="Wolpa"
                className="h-8"
              />{" "}
              <Image
                src={Wok2} // replace with actual image of "Wolpa"
                alt="Wolpa"
                className="h-8"
              />
              <Image
                src={Wok3} // replace with actual image of "Wolpa"
                alt="Wolpa"
                className="h-8"
              />{" "}
              <Image
                src={Wok} // replace with actual image of "Wolpa"
                alt="Wolpa"
                width={7000}
                height={2000}
                className="w-full h-8"
              />{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Share Icon */}
      <div className="self-start">
        <FiShare2
          className="text-white/80 hover:text-white transition"
          size={20}
        />
      </div>
    </div>
  );
}
