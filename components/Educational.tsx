"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiShare2, FiBookmark, FiChevronRight } from "react-icons/fi";

import Play from "../public/Play.png";
import Share2 from "../public/Share2.png";
import Story1 from "../public/Story1.png";

import Story2 from "../public/Story2.png";
import Story3 from "../public/Story3.png";
import Story4 from "../public/Story4.png";
import Story5 from "../public/Story5.png";

interface PodcastCard {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Educational: React.FC = () => {
  const [podcasts, setPodcasts] = useState<PodcastCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.wokpa.app/api/listeners/popular-and-trendingpodcasts?page=1&per_page=15")
      .then((res) => res.json())
      .then((data) => {
        setPodcasts(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#fcfcfc] p-4">
      {/* Category Title and View All */}
      <div className="flex justify-between items-center my-8">
        <h3 className="font-medium text-gray-800">
          <span className="text-red-500 mr-1">|</span>
          Educational
        </h3>
        <button className="text-purple-600 text-sm border border-purple-600 rounded-full px-3 py-1 flex items-center">
          View all <FiChevronRight className="ml-1" />
        </button>
      </div>

      {/* Podcast Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : podcasts.length === 0 ? (
        <p>No podcasts available for education.</p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#F4F4F4] hover:bg-red-100 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl border-b-2 hover:border-b-red-300 hover:shadow-red-100 p-4 group"
          >
            <Image
              src={podcast.image}
              alt={podcast.title}
              className="w-full aspect-square object-cover"
              height={1000}
              width={1000}
            />
            <div className="pt-3">
              <h4 className="font-medium text-[#282828]">{podcast.category}</h4>
              <div className="inline-flex items-center justify-between w-full">
                <div className="flex gap-4 mt-2">
                  <button className="bg-[#E1E1E1] p-2 rounded-full ">
                    <FiShare2 size={18} />
                  </button>
                  <Image src={Share2} className="h-9" alt="" />
                </div>

                <Image
                  src={Play}
                  className="h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Educational;
