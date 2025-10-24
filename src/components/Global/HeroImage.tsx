"use client";
import Image from "next/image";
import { useState } from "react";
interface HeroImage {
  altText: string;
  sourceUrl: string;
}

interface HeroImageProp {
  heroImages: HeroImage[];
}
export default function HeroImage({ heroImages }: HeroImageProp) {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex((i) => (i + 1) % heroImages.length);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className=" overflow-hidden w-full h-full relative group-hover:scale-[1.2] transition-transform duration-[10000ms] smooth"
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src={heroImages[index].sourceUrl}
        fill
        alt={heroImages[index].altText}
        className="object-cover "
      />
    </div>
  );
}
