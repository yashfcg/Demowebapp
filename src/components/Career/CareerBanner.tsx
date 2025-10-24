
import Image from "next/image";

interface CareerBannerProps {
  image: string;
  careerTitle: string;
  joinTitle: string;
  joinDescription: string;
}

export default function CareerBanner({
  image,
  careerTitle,
  joinTitle,
  joinDescription,
}: CareerBannerProps) {
  return (
    <div className="w-full h-[550px] relative">
      {/* Background Image */}
      <Image
        src={image}
        alt="Career Banner"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-10 md:px-16 lg:px-28 xl:px-54 py-10 sm:py-14 md:py-24 bg-black/40 z-10 text-left">
        <div className="text-white space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {careerTitle}
          </h2>
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-snug">
            {joinTitle}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-xl md:max-w-2xl">
            {joinDescription}
          </p>
        </div>
      </div>
    </div>
  );
}