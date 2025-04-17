import Image from "next/image";
import React from "react";
import Comp1 from "../public/Comp1.png";

import Comp2 from "../public/Comp2.png";
import Comp3 from "../public/Comp3.png";
import Comp4 from "../public/Comp4.png";
import Comp5 from "../public/Comp5.png";
import Comp6 from "../public/Comp6.png";
import Comp7 from "../public/Comp7.png";
import Comp8 from "../public/Comp8.png";
import Comp9 from "../public/Comp9.png";
import Comp10 from "../public/Comp10.png";
import Comp11 from "../public/Comp11.png";
import Comp12 from "../public/Comp12.png";

import Comp13 from "../public/Comp13.png";
import Comp14 from "../public/Comp14.png";

import Comp15 from "../public/Comp15.png";

const Global = () => {
  return (
    <div className="py-32">
      <h1 className="text-center text-[#282828] font-bold text-2xl">
        OUR GLOBAL PARTNERS
      </h1>
      <div className="flex flex-wrap gap-6 lg:px-32 px-4 items-center justify-center">
        <Image src={Comp2} className="w-[176px] h-12 filter grayscale" alt="" />

        <Image
          src={Comp1}
          className="w-[318px] h-full filter grayscale"
          alt=""
        />

        <Image
          src={Comp3}
          className="w-[178px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp4}
          className="w-[222px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp5}
          className="w-[176px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp6}
          className="w-[214px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp7}
          className="w-[178px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp8}
          className="w-[179px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp9}
          className="w-[158px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp10}
          className="w-[109px] h-full filter grayscale"
          alt=""
        />

        <Image
          src={Comp11}
          className="w-[246px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp12}
          className="w-[91px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp13}
          className="w-[226px] h-full filter grayscale"
          alt=""
        />
        <Image
          src={Comp14}
          className="w-[109px] h-full filter grayscale"
          alt=""
        />

        <Image
          src={Comp15}
          className="w-[105px] h-full filter grayscale"
          alt=""
        />
      </div>
    </div>
  );
};

export default Global;
