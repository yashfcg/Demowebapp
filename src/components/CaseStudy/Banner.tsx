import Image from "next/image";
export default function Banner({
  title,
  bannerText,
  bannerImageSource,
  width,
  height,
  altText,
}: {
  title: string;
  bannerText: string;
  bannerImageSource: string;
  width: number;
  height: number;
  altText: string;
}) {
  return (
    <div className="w-full h-auto bg-white flex justify-center">
      <div className=" w-[75%] max-w-[1287px]  min-w-80 flex flex-col gap-10 md:flex-row items-start justify-between pt-30 md:pt-50 pb-10 px-5">
        <div className="w-fit h-fit ">
          <Image
            src={bannerImageSource}
            width={width * 0.8}
            height={height * 0.8}
            alt={altText}
            className="max-w-[334px]"
          />
        </div>
        <div className="w-fit h-fit flex flex-col items-start">
          <h1 className="font-archivo text-3xl  md:text-5xl  font-[700] text-[#152B3D]">
            {title}
          </h1>
          <div className="max-w-[700px]">
            <p className="text-[#152B3D] font-inter font-[400] text-base md:text-2xl  mt-10  sm:leading-[150%] ">
              {bannerText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
