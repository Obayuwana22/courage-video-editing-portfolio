import Image from "next/image";
import React from "react";
import brand1 from "../public/brands/google logo.avif";

const Brands = () => {
  return (
    <section className="flex justify-between flex-wrap">
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
      <Image src={brand1} width={64} height={64} alt="google" />
    </section>
  );
};

export default Brands;
