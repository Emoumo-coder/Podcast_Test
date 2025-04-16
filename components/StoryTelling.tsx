import Image from "next/image";
import React from "react";
import { FiShare2, FiBookmark, FiChevronRight } from "react-icons/fi";
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

const StoryTelling: React.FC = () => {
  const podcasts: PodcastCard[] = [
    {
      id: 1,
      title: "NEWS SPLASH",
      category: "Fitness Focus",
      image: Story1,
    },
    {
      id: 2,
      title: "HubCast",
      category: "Fitness Focus",
      image: Story2,
    },
    {
      id: 3,
      title: "Business Talks",
      category: "Fitness Focus",
      image: Story3,
    },
    {
      id: 4,
      title: "Inspiring Conversations",
      category: "Fitness Focus",
      image: Story4,
    },
    {
      id: 5,
      title: "Policy Space Podcast",
      category: "Fitness Focus",
      image: Story5,
    },
  ];

  return (
    <div className="bg-[#fcfcfc] p-4">
      {/* Header */}
      <div className="bg-[#F0E4FF] p-4 mb-6">
        <h2 className="text-lg font-bold text-[#282828]">
          LISTEN BY ABR CATEGORIES
        </h2>
      </div>

      {/* Category Title and View All */}
      <div className="flex justify-between items-center my-8">
        <h3 className="font-medium text-gray-800">
          <span className="text-red-500 mr-1">|</span>
          News & Storytelling
        </h3>
        <button className="text-purple-600 text-sm border border-purple-600 rounded-full px-3 py-1 flex items-center">
          View all <FiChevronRight className="ml-1" />
        </button>
      </div>

      {/* Podcast Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-sm p-4"
          >
            <Image
              src={podcast.image}
              alt={podcast.title}
              className="w-full aspect-square object-cover"
              height={1000}
              width={1000}
            />
            <div className="py-3">
              <h4 className="font-medium text-[#282828]">{podcast.category}</h4>
              <div className="flex gap-4 mt-2">
                <button className="bg-[#E1E1E1] p-2 rounded-full ">
                  <FiShare2 size={18} />
                </button>
                <button className="bg-[#E1E1E1] p-2 rounded-full ">
                  <FiBookmark size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryTelling;
