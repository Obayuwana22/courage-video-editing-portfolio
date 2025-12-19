"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <nav className="relative z-50 flex justify-between items-center px-5 pt-7 text-white xl:pl-60 xl:pt-20">
        <h1
          className={`text-xl md:text-2xl
          ${openMenu ? " text-black" : "top-2 text-white"}
        `}
        >
          Courage Obayuwana Films
        </h1>

        <div className="hidden xl:flex justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-10">
            {navLinks.map((navLink, index) => (
              <Link href={navLink.href} key={index}>
                <li className="capitalize">{navLink.label}</li>
              </Link>
            ))}
          </ul>
        </div>

        <button
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Toggle menu"
          className="relative w-8 h-8 flex items-center justify-center cursor-pointer xl:hidden"
        >
          <span
            className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out
          ${openMenu ? "rotate-45 top-1/2 bg-black" : "top-2 bg-white/50"}
        `}
          />
          <span
            className={`absolute h-0.5 w-8 transition-all duration-300 ease-in-out
          ${openMenu ? "-rotate-45 top-1/2 bg-black" : "top-5 bg-white/50"}
        `}
          />
        </button>
      </nav>
      <div
        className={`bg-white absolute top-0 w-full z-10 transform transition-all duration-500 ease-in-out ${
          openMenu
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col h-screen justify-center items-center gap-2 text-2xl">
          {navLinks.map((navLink, index) => (
            <Link
              href={navLink.href}
              key={index}
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <li className="capitalize">{navLink.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
