"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Episode {
  title: string;
  picture_url: string;
  created_at: string;
  duration: number;
}

const Queue = () => {
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const res = await fetch("https://api.wokpa.app/api/listeners/episodes/1");
        const json = await res.json();
        const data = json.data;

        setEpisode({
          title: data.title,
          picture_url: data.picture_url,
          created_at: data.created_at,
          duration: data.duration,
        });
      } catch (error) {
        console.error("Error fetching episode:", error);
      }
    };

    fetchEpisode();
  }, []);

  if (!episode) {
    return <div className="p-12">Loading...</div>;
  }

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} mins`;
  };

  return (
    <div className="p-12">
      <h1 className="text-[#5a5a5a] py-4 font-bold border-b">
        NEXT EPISODES IN QUEUE
      </h1>

      <div className="grid grid-cols-5 gap-4 py-8">
        <div className="shadow-md">
          <Image
            src={episode.picture_url}
            alt={episode.title}
            width={500}
            height={500}
            className="w-full h-auto"
          />
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
              <h3 className="font-bold">
                {episode.title}
              </h3>

              <div className="flex items-center text-sm text-gray-600 mt-2 space-x-2">
                <span>{formatDate(episode.created_at)}</span>
                <span>•</span>
                <span>{formatDuration(episode.duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
