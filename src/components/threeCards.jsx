import React from "react";
import picstn from "../assets/pic16.webp";
import picsvntn from "../assets/pic15.webp";
import picegtn from "../assets/pic17.webp";

export const ThreeCards = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-20 flex gap-2">
        {/* Three cards have separate divs */}
        <div className="text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg w-fit px-12 ">
          <img src={picstn} className="h-20 pl-2 pt-5" />
          <p className="text-xl pt-3">"It's completely transformed</p>
          <p className="text-xl pt-1 pb-5">home cooking."</p>
        </div>
        <div className="text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg w-fit px-12 ">
          <img src={picsvntn} className="h-20 pl-2 pt-5" />
          <p className="text-xl pt-3">"I was nothing short of amazed</p>
          <p className="text-xl pt-1">to taste flavors I'd had only in</p>
          <p className="text-xl pt-1 pb-5">restaurants!"</p>
        </div>
        <div className="text-[#513121] border-2 border-[#513121] border-b-8 rounded-lg w-fit px-12">
          <img src={picegtn} className="h-20 pl-4 pt-5" />
          <p className="text-xl pt-3">""I made my best quarantine</p>
          <p className="text-xl pt-1 ">meal with Asian Meal Starter</p>
          <p className="text-xl pt-1 pb-5">Kit."</p>
        </div>
      </div>
    </>
  );
};
