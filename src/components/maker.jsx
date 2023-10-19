import React from "react";
import picftn from "../assets/pic14.webp";

export const Maker = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mt-24 border-2 border-[#512131] border-b-8 rounded-lg flex">
        {/* Content Box */}
        <div className="text-[#513121] pl-24 pt-12 pr-36 border-r-2 border-[#512131]">
          <h2 className="text-4xl">Trusted</h2>
          <h2 className="text-4xl pt-4">tastemakers</h2>
          <p className="pt-4 text-md">
            Maiko Kyogoku's signature cooking style is a bal
          </p>
          <p className="pt-1 text-md">
            ance of refinement + whimsy. And she's lent her
          </p>
          <p className="pt-1 text-md">
            tangy expertise to our favorite starters.
          </p>
        </div>
        {/* Image Box */}
        <div>
          <img src={picftn} className="h-96" />
        </div>
      </div>
    </>
  );
};
