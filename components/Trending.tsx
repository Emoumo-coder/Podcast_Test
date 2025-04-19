"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PodcastProps {
  id: number;
  title: string;
  host: string;
  episodeCount: number;
  image: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

const TrendingPodcasts: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState<PodcastProps[]>([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(
          "https://api.wokpa.app/api/listeners/popular-and-trendingpodcasts?page=1&per_page=15"
        );
        const json = await res.json();
        if (Array.isArray(json.data)) {
          setPodcasts(json.data);
        } else {
          setPodcasts([]);
        }
      } catch (error) {
        console.error("Error fetching podcasts:", error);
        setPodcasts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="bg-[#fcfcfc] py-6 px-4 md:px-6">
      <div className="px-12 mx-auto">
        <div className="mb-6">
          {" "}
          <h2 className="text-xl font-bold  pb-2">Trending this week</h2>
          <div className=" border-l-4 space-x-3 gap-2 border-x-2 border-red-700 ">
            <p className="text-sm text-gray-600 px-2">
              {"  "} Featured Podcasts
            </p>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : podcasts && podcasts.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            navigation
            pagination={{ clickable: true }}
            className="!pb-12"
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.5 },
              1280: { slidesPerView: 4.5 },
            }}
          >
            {podcasts.map((podcast) => (
              <SwiperSlide key={podcast.id}>
                <div className=" w-full rounded overflow-hidden shadow-sm ">
                  <div className="relative aspect-square w-full h-[424px]">
                    <Image
                      src={podcast.image}
                      alt={podcast.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-3 absolute bottom-0 bg-black/40 w-full">
                    <div className="text-sm text-white mb-1">
                      {podcast.episodeCount} Episodes
                    </div>
                    <h3 className="font-bold text-[14px] mb-1 text-white">
                      {podcast.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-gray-500">Not Exist</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPodcasts;
