import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 py-20 md:flex-row md:justify-between xl:px-60  bg-black">
      <div className="text-white">www.antonio-ribeiro-films.com</div>
      <div className="border-2 border-white p-3 rounded-md cursor-pointer">
        <FaLinkedinIn className="text-white text-2xl" />
      </div>
      <div className="text-white">+44 (0)7919 032192</div>
    </div>
  );
};

export default Footer;
