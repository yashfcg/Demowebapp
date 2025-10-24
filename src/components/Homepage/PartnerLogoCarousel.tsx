"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface ClientLogo {
  featuredImage: {
    altText: string;
    sourceUrl: string;

    height: number;
    width: number;
  };
}
export default function PartnerLogoCarousel({
  clients,
}: {
  clients: ClientLogo[];
}) {
  const images = [...clients];
  const baseX = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const singleSetRef = useRef<HTMLDivElement>(null);

  // Measure width of one set on mount
  useEffect(() => {
    if (singleSetRef.current) {
      setLoopWidth(singleSetRef.current.offsetWidth);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    const moveBy = delta * 0.01;
    const currentX = baseX.get();

    baseX.set(currentX - moveBy);

    if (loopWidth && Math.abs(currentX) >= loopWidth) {
      baseX.set(currentX + loopWidth); // wrap seamlessly
    }
  });
  const repeatedImages = [...images, ...images, ...images];
  return (
    <motion.div className="flex gap-8 min-w-max" style={{ x: baseX }}>
      <div className="flex gap-8" ref={singleSetRef}>
        {repeatedImages.map((src, index) => (
          <Image
            key={`original-${index}`}
            src={src.featuredImage.sourceUrl}
            alt={`img-${index}`}
            height={src.featuredImage.height}
            width={src.featuredImage.width}
            className=" md:h-[100px] h-[60px]  w-auto "
          />
        ))}
      </div>

      {/* Two more copies for seamless loop */}
      {[...Array(2)].map((_, i) => (
        <div className="flex gap-8" key={`copy-${i}`}>
          {images.map((src, index) => (
            <Image
              key={`original-${index}`}
              src={src.featuredImage.sourceUrl}
              alt={`img-${index}`}
              height={src.featuredImage.height}
              width={src.featuredImage.width}
              className=" md:h-[100px] h-[60px]  w-auto  "
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
