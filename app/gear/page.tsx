import Image from "next/image";
import React from "react";

export default function GearPage() {
  return (
    <main className="min-h-screen text-white pt-32 pb-20 px-5 xl:px-60 -z-50 relative">
      <Image
        src="/about-placeholder.webp"
        alt="About Courage Obayuwana Films"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-4xl z-50 relative">
        <h1 className="text-4xl md:text-5xl font-normal mb-8">Gear</h1>

        <p className="text-lg md:text-xl leading-relaxed mb-12 text-white/90">
          I have extensive experience with a variety of cameras, from Arri Alexa
          and Sony to Canon, Panasonic and Blackmagic models. I am the owner of
          a customised kit, optimised for both documentary, drama and commercial
          projects.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
              Kit List
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">A Cam</h3>
            <p className="text-white/80">Sony FX6 Cinema Line Camera</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">B Cams</h3>
            <p className="text-white/80">Sony FX3 and Lumix S5IIx</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Lenses</h3>
            <ul className="space-y-2 text-white/80">
              <li>• Sigma 24-70mm F2.8 DG DN II | Art - Sony E</li>
              <li>• Sigma 70-200mm F2.8 DG DN OS | S - Sony E</li>
              <li>
                • Set of primes: Carl Zeiss Distagon ZF 35mm f2.0, Contax Zeiss
                28mm f2.8, Contax Zeiss 50mm f1.4 and Contax Zeiss 85mm f1.4
                lens
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Accessories</h3>
            <ul className="space-y-2 text-white/80">
              <li>• PDMovie Motor smart mini focus LIDAR unit</li>
              <li>• DJI Ronin RS2 gimbal</li>
              <li>• Miller 3001 AIR Solo Tripod</li>
              <li>• Shape + Zacuto shoulder rig</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Lighting</h3>
            <p className="text-white/80">
              Aputure 300D, Falconeye lighting + various light boxes, flags and
              stands available
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Post-Production</h3>
            <p className="text-white/80">Macbook Pro M4 Max</p>
          </div>
        </div>
      </div>
    </main>
  );
}
