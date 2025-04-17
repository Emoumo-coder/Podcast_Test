import React from "react";
import Link from "next/link";
import Image from "next/image";
import Explore1 from "../public/Explore1.png";

import Explore2 from "../public/Explore2.png";
import Explore3 from "../public/Explore3.png";
import Explore4 from "../public/Explore4.png";

interface CategoryCard {
  id: string;
  title: string;
  imageUrl: string;
  slug: string;
}

const ExploreCategories: React.FC = () => {
  const categories: CategoryCard[] = [
    {
      id: "news",
      title: "News & Storytelling",
      imageUrl: Explore1,
      slug: "news-storytelling",
    },
    {
      id: "entertainment",
      title: "Entertainment & Lifestyle",
      imageUrl: Explore2,
      slug: "entertainment-lifestyle",
    },
    {
      id: "tech",
      title: "Tech, Sport & Business",
      imageUrl: Explore3,
      slug: "tech-sport-business",
    },
    {
      id: "other",
      title: "Other podcasts",
      imageUrl: Explore4,
      slug: "other-podcasts",
    },
  ];

  return (
    <div className="py-8 px-4 border-t">
      <h2 className="text-xl font-bold text-[#5a5a5a] mb-6">
        Explore other categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.id}>
            <div className="cursor-pointer relative rounded-lg overflow-hidden group">
              {/* Category Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0  bottom-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Category Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-medium text-base">
                  {category.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategories;
