import Image from "next/image";

interface Banner {
  title: string;
  bannerText: string;
  sourceUrl: string;
  altText: string;
  width: number;
  height: number;
}
export default function IndustryBanner({
  title,
  bannerText,
  sourceUrl,
  altText,
  width,
  height,
}: Banner) {
  return (
    <div className="group  w-full h-[80vh] overflow-hidden relative flex ">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src={sourceUrl}
        width={width}
        height={height}
        alt={altText}
        priority
        className="object-cover "
      />
      <div className="absolute top-[40%] font-archivo w-[80%] sm:w-[50%]  md:w-[50%] xl:w-[35%]  left-[10%] md:left-[15%]  min-w-70 z-20">
        <h1 className=" text-white text-xl sm:text-2xl md:text-4xl font-[700] leading-[140%] ">
          {title}
        </h1>
        <p className="text-white font-inter font-[500] opacity-90 text-base sm:text-xl mt-10  sm:leading-[200%]">
          {bannerText}
        </p>
      </div>
    </div>
  );
}
