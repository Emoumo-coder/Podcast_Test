import Image from "next/image";
import React from "react";
import Advert from "../public/Ads.png";

const Ads = () => {
  return (
    <div className="lg:px-32 py-4 px-4">
      <Image src={Advert} className="w-full" alt="" />
    </div>
  );
};

export default Ads;
