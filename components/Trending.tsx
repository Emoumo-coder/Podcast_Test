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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const podcasts: PodcastProps[] = [
    {
      id: 1,
      title: "Hope For The Widow",
      host: "Chinwe Bode-Akinwande",
      episodeCount: 8,
      image: "/Trend1.png",
      appStoreLink: "https://apps.apple.com/app/hope-for-widow",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.hopeforwidow",
    },
    {
      id: 2,
      title: "Policy Sphere by Agora Policy",
      host: "",
      episodeCount: 22,
      image: "/Trend2.png",
      appStoreLink: "https://apps.apple.com/app/policy-sphere",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.policysphere",
    },
    {
      id: 3,
      title: "The Harmonised Life",
      host: "Nkem Offonabo",
      episodeCount: 18,
      image: "/Trend3.png",
      appStoreLink: "https://apps.apple.com/app/harmonised-life",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.harmonisedlife",
    },
    {
      id: 4,
      title: "Lifestyle Central",
      host: "Agu Henry",
      episodeCount: 12,
      image: "/Trend4.png",
      appStoreLink: "https://apps.apple.com/app/lifestyle-central",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.lifestylecentral",
    },
    {
      id: 5,
      title: "Wellness Central",
      host: "",
      episodeCount: 35,
      image: "/Trend1.png",
      appStoreLink: "https://apps.apple.com/app/wellness-central",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.wellnesscentral",
    },
    {
      id: 6,
      title: "Wellness Central",
      host: "",
      episodeCount: 35,
      image: "/images/wellness-central.jpg",
      appStoreLink: "https://apps.apple.com/app/wellness-central",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.wellnesscentral",
    },
  ];

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

        {mounted && (
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
        )}
      </div>
    </div>
  );
};

export default TrendingPodcasts;
