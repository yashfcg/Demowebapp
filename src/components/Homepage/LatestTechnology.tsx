import { getLatestTech } from "@/lib/homepageContent";
import LatestTechCarousel from "./LatestTechCarousel";

export default async function LatestTechnology() {
  const latestTechArr = await getLatestTech();
  if (latestTechArr.length == 0) return null;
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="w-[70%] min-w-80  flex flex-col items-center gap-10">
        <h1 className=" text-center font-archivo text-2xl md:text-4xl font-[700] text-[#152B3D]">
          Latest technologies and tools to accelerate your projects with instant
          access to critical data, anytime, anywhere!
        </h1>
        <LatestTechCarousel latestTechArr={latestTechArr} />
      </div>
    </div>
  );
}
