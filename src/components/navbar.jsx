import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      {/* Top Navbar */}
      <div className="tracking-wide">
        <p className="bg-[#910F37] text-white text-center font-light p-1">
          Free shipping on orders $35+ 🚀
        </p>
      </div>

      {/* Bottom Navbar */}
      <div className="max-w-[1100px] mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6 ">
        <div className="flex items-center">
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-3xl pr-24">
              ☰
            </button>
          </div>
          <div >
          <img src="https://theme-crave-demo.myshopify.com/cdn/shop/files/CRAVE_95cb960d-0933-4ba8-b51a-3c4853b96029_70x.png?v=1642089232" />
          </div>

          <div className="md:static absolute  top-24 ">
            <ul
              className={`md:flex md:flex-row ml-6 space-x-6 sm:flex-col sm:space-y-2 sm:items-center sm:mb-4   ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <li className="md:text-sm  sm:text-lg">
                Shop
                <span className="relative top-1">
                  <i className="fa-solid fa-angle-down "></i>
                </span>
              </li>
              <li className="text-sm">Meet us</li>
              <li className="text-sm">Recipes</li>
              <li className="text-sm">Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <i className="text-xl cursor-pointer fas fa-search"></i>
          <i className="text-xl cursor-pointer fas fa-shopping-bag"></i>
        </div>
      </div>
    </nav>
  );
};
