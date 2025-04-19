"use client";
import React, { useEffect, useState } from "react";
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

const generateSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const ExploreCategories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryCard[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://api.wokpa.app/api/listeners/top-categories");
        const json = await res.json();

        if (json?.data) {
          const mapped = json.data.map((item: any, index: number) => ({
            id: `cat-${index}`,
            title: item.name,
            imageUrl: item.image_url,
            slug: generateSlug(item.name),
          }));
          setCategories(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="py-8 px-4 border-t">
      <h2 className="text-xl font-bold text-[#5a5a5a] mb-6">
        Explore other categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.id}>
            <div className="cursor-pointer relative rounded-lg overflow-hidden group">
              <div className="relative h-40 w-full">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
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
