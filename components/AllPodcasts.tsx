"use client"
import React, { useEffect, useState } from "react";
import { TbMinusVertical } from "react-icons/tb";
import { FaPlay, FaRedo, FaUser } from "react-icons/fa";
import Image from "next/image";

import Story1 from "../public/Story1.png";
import Share1 from "../public/Share1.png";
import Share2 from "../public/Share2.png";
import Pagination from "./Pagination";

interface Podcast {
  id: number;
  title: string;
  picture_url: string;
  episode_title: string;
  date: string;
  duration: string;
  category: string;
}

const AllPodcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await fetch("https://api.wokpa.app/api/listeners/toppodcasts?page=1&per_page=15");
        const data = await res.json();
        setPodcasts(data.data);
      } catch (err) {
        console.error("Failed to fetch podcasts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);


  return (
    <div className="lg:p-12 p-4">
      <h1 className="text-[#5a5a5a] py-4 font-bold border-b">ALL PODCASTS</h1>

      <div className="inline-flex items-center gap-6 py-6">
        <p>
          Sort by: <span className="font-bold">Popular ...</span>
        </p>
        <TbMinusVertical />
        <p>
          Category: <span className="font-bold">All ...</span>
        </p>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-4">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={podcast.picture_url}
                  alt={podcast.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-4 px-3 flex flex-col flex-grow">
                <span className="text-xs text-gray-500 font-semibold mb-1">
                  {podcast.category ?? "Podcast"}
                </span>
                <p className="text-sm text-gray-600 mb-0 line-clamp-2">
                  {podcast.episode_title || podcast.title}
                </p>
                <div className="flex items-center text-gray-400 text-xs space-x-3 mt-1">
                  <span>{podcast.date || "Unknown Date"}</span>
                  <span>•</span>
                  <span>{podcast.duration || "N/A"}</span>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <button className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white">
                    <FaPlay size={16} />
                  </button>
                  <Image src={Share1} alt="Share" width={24} height={24} />
                  <Image src={Share2} alt="Share" width={24} height={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default AllPodcasts;
