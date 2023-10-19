import React from "react";

export const Inbox = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto border-2 border-[#513121] border-b-8 text-[#513121] flex flex-col items-center justify-center rounded-xl">
        <h2 className="text-5xl pt-8">Spice up your inbox</h2>
        <p className="pt-6 tracking-wide">
           Sign up for our newsletter to get exclusive recipes, cooking tips, and
          more.
        </p>
        <div className="flex text-[#512131] mt-6 items-center  pr-3 pb-10">
          <input
            type="email"
            placeholder="Email "
            className="border-2 rounded-xl w-[22rem] pl-2 text-md  py-3 border-[#513121]"
          />
          {/* Apply Right arrow */}
          <i className="fa-solid fa-arrow-right absolute left-[56rem] "></i>
        </div>
      </div>
    </>
  );
};
