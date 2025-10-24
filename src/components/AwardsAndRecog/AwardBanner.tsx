import Image from "next/image";

interface AwardsBannerProps {
  image: string;
  title: string;
}

export default function AwardsBanner({ image, title }: AwardsBannerProps) {
  return (
    <div className="w-full h-[400px] relative">
      {/* Background Image */}
      <Image
        src={image}
        alt="Awards Banner"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          {title}
        </h1>
      </div>
    </div>
  );
}