"use client";

import Link from "next/link";
import React from "react";

const links = [
  {
    label: "documentary & tactual TV",
    href: "/",
  },
  {
    label: "narrative & fiction",
    href: "/",
  },
  {
    label: "digital content & corporate",
    href: "/",
  },
];

const Hero = () => {
  return (
    <section className="text-white mx-5">
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-xl">
          As a filmmaker and editor, I am passionate about bringing stories to
          life, crafting impactful films that resonate and inspire.
        </p>
        <div className="flex flex-col items-center gap-5 mt-10">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              // className="border-2 border-white rounded-full p-5 w-52"
              className="w-52 rounded-full p-5 bg-white/10 
  backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300
  hover:bg-white/20 hover:scale-105 active:scale-95 relative overflow-hidden
before:absolute before:inset-0
before:bg-linear-to-br before:from-white/20 before:to-transparent
before:opacity-0 hover:before:opacity-100
before:transition-opacity"
            >
              <p className="capitalize text-xl text-center font">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
