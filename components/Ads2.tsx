import React from "react";
import Ads3 from "../public/Ads3.png";

import Ads4 from "../public/Ads4.png";
import Ads5 from "../public/Ads5.png";
import Image from "next/image";

interface AdBanner {
  id: number;
  imageUrl: string;
  altText: string;
  link: string;
}

const AdBannerRow: React.FC = () => {
  const advertisements: AdBanner[] = [
    {
      id: 1,
      imageUrl: Ads3,
      altText: "Domino's Pizza - Buy 1 Get 1 Free",
    },
    {
      id: 2,
      imageUrl: Ads4,
      altText: "MTN Advertisement",
    },
    {
      id: 3,
      imageUrl: Ads5,
      altText: "Airtel Family Plan",
    },
  ];

  return (
    <div className="w-full py-6 bg-[#fcfcfc]">
      <div className="items-center justify-center mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center py-12 ">
          {advertisements.map((ad) => (
            <div
              key={ad.id}
              className="block w-full md:w-[280px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={ad.imageUrl}
                alt={ad.altText}
                className="w-full h-[225px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdBannerRow;
