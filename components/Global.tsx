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

const Global = () => {
  return (
    <div className="py-32">
      <h1 className="text-center text-[#282828] font-bold text-2xl">
        OUR GLOBAL PARTNERS
      </h1>
      <div className="flex flex-wrap gap-6">
        <Image src={Comp2} className="w-full h-12" alt="" />

        <Image src={Comp1} className="w-full h-full " alt="" />

        <Image src={Comp3} className="w-full h-full" alt="" />
        <Image src={Comp4} className="w-full h-full" alt="" />
        <Image src={Comp5} className="w-full h-full" alt="" />
        <Image src={Comp6} className="w-full h-full" alt="" />
        <Image src={Comp7} className="w-full h-full" alt="" />
        <Image src={Comp8} className="w-full h-full" alt="" />
        <Image src={Comp9} className="w-full h-full" alt="" />
        <Image src={Comp10} className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Global;
