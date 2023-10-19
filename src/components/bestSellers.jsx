import React from "react";
import picto from "../assets/pic2.webp";
import pictr from "../assets/pic3.webp";
import picfr from "../assets/pic4.webp";
import picfv from "../assets/pic5.webp";
import picsi from "../assets/pic6.webp";
import picsn from "../assets/pic7.webp";
import picegt from "../assets/pic8.webp";
import picni from "../assets/pic9.webp";

export const BestSellers = () => {
  return (
    <>
      <div className="relative bottom-56 max-w-[1100px] mx-auto">
        <h3 className="text-3xl">Get your hands on our bestsellers 🔥</h3>
        {/* cards */}
        <div className="mt-8 flex gap-3 ">
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picto}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              Larb Starter 3-Pack
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={pictr}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              Lemongrass BBQ Starter 3-Pack
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picfr}
              className="h-72 border-2 border-[#512131] border-b-4  rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              The East Asian Sampler
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $22.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picfv}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              Mala Salad Starter 3-Pack
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picsi}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              The Southeast Asian Sample
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $29.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picsn}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              The Heat lover's Set
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $50.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picegt}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              The Best Sellers Set
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $45.00 CAD
            </p>
          </div>
          <div className="hover:scale-105 duration-700 transition-transform">
            <img
              src={picni}
              className="h-72 border-2 border-[#512131] border-b-4   rounded-xl "
            />
            <p className=" text-md  font-normal text-[#512131] pt-2">
              Spicy Bulgogi Starter 3-Pack
            </p>
            <p className=" text-md  font-normal text-[#512131] pt-3">
              $12.00 CAD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
