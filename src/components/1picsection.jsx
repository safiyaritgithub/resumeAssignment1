import React from "react";
import pic from "../assets/1pic.webp";

export const Picsection = () => {
  return (
    <>
      <div>
        {/* FirstImage Section */}
        <img src={pic} className=" h-[560px] w-full" />
        {/* On Image Content Box */}
        <div className="border-2 border-[#512131] border-b-8 rounded-xl w-fit text-[#512131] py-12 px-8 relative bg-[#F2EFDD] bottom-[28rem] left-56">
          <p className="text-5xl text-[#3D081B]">Meet your new</p>
          <p className="text-5xl  text-[#3D081B] pt-2">
            favorite pantry staple!
          </p>
          <p className="text-md font-light pt-3">
            Cook restaurant-quality Asian dishes in under 30 minutes
          </p>
          <p className="text-md font-light pt-2"> with our meal starters.</p>
          <button className="border-2 rounded-3xl border-[#512131] px-5 py-2 border-b-4 mt-5 text-lg">
            Shop now
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs font-light relative bottom-80 border-b-2 border-[#ebe6d5] pb-3 ">
          <i class="fa-solid fa-angle-left"></i>
          <p>1/2</p>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </>
  );
};
