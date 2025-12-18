import Image from "next/image";
import React from "react";
import brand1 from "../public/brands/google logo.avif";

const Brands = () => {
  return (
    <section className="flex justify-between">
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
      <Image src={brand1} width={32} height={32} alt="google" />
    </section>
  );
};

export default Brands;
