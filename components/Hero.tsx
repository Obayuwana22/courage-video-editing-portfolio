"use client";

import Link from "next/link";

const links = [
  {
    label: "DOCUMENTARY & FACTUAL TV",
    href: "/factual",
  },
  {
    label: "NARRATIVE FICTION",
    href: "/fiction",
  },
  {
    label: "DIGITAL CONTENT & CORPORATE",
    href: "/corporate",
  },
];

const Hero = () => {
  return (
    <section className="h-screen w-full overflow-hidden relative">
      {/* Video Background */}
      <div className="absolute inset-0 h-full w-full">
        <video
          poster="/betone18.webp"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/betkingvideo.mp4" type="video/mp4" />
        </video>
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/50" />
      </div>
      {/* <div className="absolute inset-0 bg-black/60" /> */}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-5 py-32 md:py-32 xl:px-60">
        {/* Hero Text - Left Aligned */}
        <h2 className="text-2xl md:text-3xl xl:text-[34px] font-normal leading-relaxed text-white max-w-2xl mb-12 xl:mb-16">
          As a filmmaker and editor, I am passionate about bringing stories to
          life, crafting impactful films that resonate and inspire.
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-6">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              // className="group relative px-8 py-4 rounded-full border border-white/80 
              //   bg-transparent text-white text-center text-sm md:text-base
              //   transition-all duration-300 ease-out
              //   hover:bg-white/10 hover:border-white
              //   active:scale-95
              //   min-w-60 md:min-w-65"

                className="text-center w-52 rounded-full p-5 bg-white/10 
  backdrop-blur-xl border border-white/30 shadow-lg transition-all duration-300
  hover:bg-white/20 hover:scale-105 active:scale-95 relative overflow-hidden
before:absolute before:inset-0
before:bg-linear-to-br before:from-white/20 before:to-transparent
before:opacity-0 hover:before:opacity-100
before:transition-opacity"
            >
              <span className="font-normal tracking-wide">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
