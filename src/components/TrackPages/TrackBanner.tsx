import Image from "next/image";
import { GlobalLinkButton } from "../ui/GlobalButton";

export default function TrackBanner({
  title,
  description,
  src,
  width,
  height,
  altText,
  heroBannerSource,
}: {
  heroBannerSource: string;
  title: string;
  description: string;
  src: string;
  width: number;
  height: number;
  altText: string;
}) {
  return (
    <div className="w-full h-auto flex items-center justify-center pt-40 pb-20 relative">
      <div className="inset-0 absolute bg-black/50 -z-10"></div>
      <Image
        src={heroBannerSource}
        alt=""
        fill
        className="h-full w-auto object-cover -z-20"
      />
      <div className="w-[70%] min-w-80 flex flex-row-reverse flex-wrap justify-evenly gap-10 gap-y-10">
        <div className="w-[45%] min-w-80 h-full ">
          <Image
            src={src}
            alt={altText}
            width={width}
            height={height}
            className="w-full h-auto"
          />
        </div>
        <div className="w-[50%] min-w-80 flex flex-col gap-10">
          <h1 className="font-archivo text-3xl  md:text-5xl  font-[700] text-white">
            {title}
          </h1>
          <p className="text-white font-inter font-[400] text-base md:text-xl    ">
            {description}
          </p>
          <GlobalLinkButton
            size="large"
            type="Primary"
            text="REQUEST DEMO"
            link="/request-demo"
          />
        </div>
      </div>
    </div>
  );
}
