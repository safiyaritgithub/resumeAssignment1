import React from "react";
import crave from "../assets/cravepic.webp";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#910f37] mt-20">
        {/* TopFooter  */}
        <div className=" max-w-[1100px] mx-auto flex justify-between  pt-12">
          <div>
            <img src={crave} />
          </div>
          <div className="  text-sm text-[#d7b3a4] leading-7 ">
            <h2 className="text-2xl text-white">Quick links</h2>
            <p className="pt-3">Shop all</p>
            <p>Meet us</p>
            <p>Recipes</p>
            <p>Contact</p>
          </div>
          <div className="  text-md text-[#d7b3a4] leading-7">
            <h2 className="text-2xl text-white">Our mission</h2>
            <p className="pt-3">To bring proud, loud Asian flavors to your</p>
            <p>fingertips any day of the week.</p>
          </div>
        </div>
        <div className="text-white flex justify-center items-center gap-6 text-lg border-b border-[#ebe6d519] mt-8 pb-9  ">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-pinterest"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-tiktok"></i>
        </div>
        {/* BottomFooter */}

        <div className="max-w-[1100px] mx-auto mt-12 ">
          <div className="flex justify-between items-center pb-20">
            <div>
              <p className="text-[#d7b3a4] text-sm"> Country/region</p>
              <input
                type="text"
                placeholder="Canada"
                className="border-2 rounded-lg bg-[#910f37] py-2 pl-2 mt-2"
              />
            </div>
            <div className="text-white text-2xl  ">
              <div className="flex gap-4  ">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-amex"></i>
                <i class="fa-brands fa-paypal"></i>
                <i class="fa-brands fa-cc-diners-club"></i>
                <i class="fa-brands fa-cc-discover"></i>
              </div>
              <p className="text-xs text-[#d7b3a4] mt-3">
                © 2023, theme-crave-demo Powered by Shopify
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
