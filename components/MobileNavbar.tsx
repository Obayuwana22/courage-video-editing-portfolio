"use client";

import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  {
    label: "about",
    href: "/",
  },
  {
    label: "gear",
    href: "/",
  },
  {
    label: "get in touch",
    href: "/",
  },
];

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="relative z-50 flex justify-between items-center px-5 pt-7 text-white">
        <h1
          className={`text-lg
          ${openMenu ? " text-black" : "top-2 text-white"}
        `}
        >
          Courage Obayuwana Films
        </h1>

        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Toggle menu"
          className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <span
            className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out
          ${openMenu ? "rotate-45 top-1/2 bg-black" : "top-2 bg-white"}
        `}
          />
          <span
            className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out
          ${openMenu ? "-rotate-45 top-1/2 bg-black" : "top-5 bg-white"}
        `}
          />
        </button>
      </nav>
      {openMenu && (
        <div className="bg-white absolute top-0 h-screen w-full z-10">
          <ul className="flex flex-col h-screen justify-center items-center gap-2 text-2xl">
            {navLinks.map((navLink, index) => (
              <Link href={navLink.href} key={index}>
                <li className="capitalize">{navLink.label}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
