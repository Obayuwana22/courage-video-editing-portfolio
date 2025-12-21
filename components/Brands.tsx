import Image from "next/image";
import React from "react";

// Using simple text-based brand names since we'll style them to look like logos
const brands = [
  "GOOGLE",
  "BBC",
  "AMAZON",
  "AL JAZEERA",
  "NETFLIX",
  "SKY",
  "VICE",
  "CHANNEL 4",
];

const Brands = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="text-white font-bold text-lg md:text-xl tracking-wider "
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
