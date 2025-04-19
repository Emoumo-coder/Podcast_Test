import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPlay, FaVolumeUp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineForward10, MdOutlineReplay10 } from "react-icons/md";
import Share1 from "../public/Share1.png";
import Share2 from "../public/Share2.png";

interface Podcast {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  published_at: string;
}

export default function PodcastPage() {
  const [podcast, setPodcast] = useState<Podcast | null>(null);

  useEffect(() => {
    async function fetchPodcast() {
      try {
        const res = await fetch(
          "https://api.wokpa.app/api/listeners/toppodcasts?page=1&per_page=15"
        );
        const data = await res.json();
        if (data?.data?.length > 0) {
          setPodcast(data.data[0]); // Take the first podcast
        }
      } catch (err) {
        console.error("Failed to fetch podcast:", err);
      }
    }

    fetchPodcast();
  }, []);

  if (!podcast) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  return (
    <div>
      <div className="relative bg-cover bg-center bg-no-repeat overflow-hidden p-6 text-white">
        {/* Blur Overlay */}
        <Image
          src={podcast.image}
          alt=""
          fill
          className="object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 backdrop-blur-lg z-0"></div>

        <div className="relative z-10 mx-auto flex flex-col space-y-6">
          <button className="text-xs inline-flex items-center gap-2 text-white hover:text-white mb-2 text-left">
            <IoIosArrowBack /> Back to podcast
          </button>

          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src={podcast.image}
              alt="Podcast Cover"
              width={160}
              height={160}
              className="rounded-md object-cover"
            />

            <div className="w-full">
              <div className="text-xs text-[#bfbfbf] mb-1">
                {new Date(podcast.published_at).toDateString()} &nbsp;•&nbsp;{" "}
                {podcast.duration}
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {podcast.title}
              </h2>
              <p className="text-white text-sm leading-relaxed">
                {podcast.description}{" "}
                <span className="text-green-400 font-semibold cursor-pointer">
                  READ MORE
                </span>
              </p>

              <div className="flex flex-col space-y-4 pt-8">
                <div className="flex items-center space-x-4 text-xs text-gray-300">
                  <span>00:15</span>
                  <div className="flex-1 bg-gray-500 h-1 rounded-full relative">
                    <div
                      className="bg-green-400 h-1 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                  <span>{podcast.duration}</span>
                  <FaVolumeUp />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-x-8 flex items-center">
                    <button className="text-white hover:text-green-400 text-4xl">
                      <MdOutlineReplay10 />
                    </button>
                    <button className="bg-[#cc0001] hover:bg-red-600 p-4 rounded-full">
                      <FaPlay size={24} />
                    </button>
                    <button className="text-white hover:text-green-400 text-4xl">
                      <MdOutlineForward10 />
                    </button>
                  </div>

                  <div className="flex space-x-6 ml-8">
                    <Image src={Share1} alt="Share Icon 1" />
                    <Image src={Share2} alt="Share Icon 2" />
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
