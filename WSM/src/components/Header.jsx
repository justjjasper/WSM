import { useState } from "react";
import { xSVG, downVectorSVG } from "../assets/dashboardSVG";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="relative flex items-center justify-center lg:justify-between px-14 lg:px-44 bg-black h-[70px]">
      <div
        className="lg:hidden flex flex-col mr-auto hover:scale-110 hover:cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="h-[5px] w-[30px] bg-white"></span>
        <span className="h-[5px] w-[30px] bg-white my-[5px]"></span>
        <span className="h-[5px] w-[30px] bg-white"></span>
      </div>
      <div className="text-white font-bold text-3xl mr-auto">WSM</div>
      <div className="hidden lg:block">
        <ul className="flex text-white">
          <li className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-500">
            Products
            {downVectorSVG}
          </li>
          <li className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-500 px-2">
            Services
            {downVectorSVG}
          </li>
          <li className="hover:cursor-pointer hover:text-gray-500 px-2">Contact Us</li>
          <li className="hover:cursor-pointer hover:text-gray-500 px-2">Media</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Gallery</li>
        </ul>
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="absolute right-4 top-5 hover:-scale-y-110 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          {xSVG}
        </div>
        <ul className="mt-16 space-y-4 px-8">
          <li className="hover:cursor-pointer hover:text-gray-500">Products</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Services</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Media</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Gallery</li>
          <li className="hover:cursor-pointer hover:text-gray-500">Contact Us</li>
        </ul>
      </div>
    </section>
  );
}
