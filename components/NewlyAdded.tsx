"use client";
import React, { useEffect, useState } from "react";
import {
  FiShare2,
  FiBookmark,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
// Note: In a real implementation, you would need to import Swiper styles:
// import 'swiper/css';
// import 'swiper/css/navigation';

interface Episode {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  part: number;
  thumbnailUrl: string;
}

const EpisodeCard: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full">
      <div className="relative">
        <Image
          src={episode.thumbnailUrl}
          alt={episode.title}
          className="w-full h-[207px] object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div className="text-xs text-gray-500 mb-1">
          {episode.date} • {episode.duration}
        </div>
        <h3 className="font-bold text-sm mb-1 line-clamp-2">{episode.title}</h3>

        <div className="mt-auto inline-flex items-center gap-12">
          <div className="text-sm font-medium text-[#282828]">
            More Episodes
          </div>
          <div className="flex justify-end ">
            <div className="p-2 text-gray-500 bg-[#e1e1e1] rounded-full hover:text-gray-700">
              <FiShare2 size={16} />
            </div>
            <div className="p-2 text-gray-500 bg-[#e1e1e1] rounded-full hover:text-gray-700 ml-2">
              <FiBookmark size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewlyAddded: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await fetch(
          "https://api.wokpa.app/api/listeners/episodes/latest?page=1&per_page=15"
        );
        const json = await res.json();

        if (Array.isArray(json.data)) {
          const transformed = json.data.map((ep: any) => ({
            id: ep.id,
            title: ep.title,
            subtitle: ep.subtitle ?? "",
            date: new Date(ep.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
            duration: ep.duration ?? "Unknown Duration",
            part: ep.part,
            thumbnailUrl: ep.picture_url,
          }));
          setEpisodes(transformed);
        } else {
          setEpisodes([]);
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <div className="p-4 px-12 bg-[#fcfcfc]">
      <div className="  flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Newly added episodes
        </h2>
        <div className="flex space-x-2">
          <button
            ref={navigationPrevRef}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            ref={navigationNextRef}
            className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : episodes && episodes.length > 0 ? (
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="w-full"
        >
          {episodes.map((episode) => (
            <SwiperSlide key={episode.id}>
              <EpisodeCard episode={episode} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-gray-500">Not Exist</p>
      )}
    </div>
  );
};

export default NewlyAddded;
