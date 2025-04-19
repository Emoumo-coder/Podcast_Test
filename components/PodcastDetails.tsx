"use client";

import { FaSpotify, FaGoogle, FaApple } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import Added1 from "../public/Added1.png";
import Wok from "../public/Wok.png";

import Wok1 from "../public/Wok1.png";
import Wok2 from "../public/Wok2.png";
import Wok3 from "../public/Wok3.png";
import { useEffect, useState } from "react";

export default function PodcastDetails() {
  const [podcast, setPodcast] = useState<any>(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const res = await fetch("https://api.wokpa.app/api/listeners/podcasts/1");
        const data = await res.json();
        setPodcast(data.data);
      } catch (error) {
        console.error("Failed to fetch podcast:", error);
      }
    };

    fetchPodcast();
  }, []);

  if (!podcast) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="flex items-center justify-between mx-auto p-6 lg:px-12 bg-gradient-to-r from-[#2b3221] to-[#4B5E52] text-white">
      {/* Left Side */}
      <div className="flex lg:flex-row flex-col items-center space-x-6">
        <div className="w-[390px] h-[350px] relative">
          <Image
            src={podcast.picture_url}
            alt={podcast.title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide">Podcast</p>
          <h2 className="text-2xl font-bold mb-2">{podcast.title}</h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/90">
            {podcast.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>

          <div className="flex flex-col items-start gap-3 pt-20">
            <span className="text-sm text-[#bfbfbf]">Available on</span>
            <div className="inline-flex gap-4">
              <Image src={Wok1} alt="Platform" className="h-8" />
              <Image src={Wok2} alt="Platform" className="h-8" />
              <Image src={Wok3} alt="Platform" className="h-8" />
              <Image src={Wok} alt="Platform" width={7000} height={2000} className="w-full h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Share Icon */}
      <div className="self-start">
        <FiShare2 className="text-white/80 hover:text-white transition" size={20} />
      </div>
    </div>
  );
}
