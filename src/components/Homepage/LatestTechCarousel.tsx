"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { LefttIcon, RightIcon } from "../ui/Icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface LatestTechInterface {
  title: string;
  latestTechFields: {
    description: string;
    heading: string;
    techShowcasingImage: {
      node: {
        sourceUrl: string;
        mediaDetails: {
          width: number;
          height: number;
        };
      };
    };
  };
}
export default function LatestTechCarousel({
  latestTechArr,
}: {
  latestTechArr: LatestTechInterface[];
}) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  function handleToggle(change: number) {
    if (change == 1) {
      setSelectedIndex((prev) => {
        return (prev + 1) % latestTechArr.length;
      });
    } else {
      setSelectedIndex((prev) => {
        return (prev - 1 + latestTechArr.length) % latestTechArr.length;
      });
    }
  }
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: "smooth" });
  };
  return (
    <div className="w-full h-fit min-w-80 flex flex-col items-center gap-10">
      <div className="w-full h-fit min-w-80 flex flex-col items-center gap-10">
        <div className="w-full h-fit  lg:block hidden relative">
          <button
            onClick={scrollLeft}
            className=" w-4 h-full hover:bg-gray-200 hover:cursor-pointer flex items-center justify-center absolute right-[101%]"
          >
            <ChevronLeftIcon className="text-gray-600 " strokeWidth={3.5} />
          </button>
          <button
            onClick={scrollRight}
            className=" w-4 h-full hover:bg-gray-200 hover:cursor-pointer flex items-center justify-center absolute left-[101%]"
          >
            <ChevronRightIcon className="text-gray-600 " strokeWidth={3.5} />
          </button>
          <div
            ref={scrollRef}
            className="w-full overflow-x-scroll hide-scrollbar  lg:flex items-center justify-between  gap-5 hidden"
          >
            {latestTechArr.map((element, index) => {
              return (
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  key={element.title}
                  className={`transition-colors duration-150 min-w-fit font-inter font-[500] hover:cursor-pointer hover:border-b-2 hover:bg-gray-200 p-2 ${
                    selectedIndex == index
                      ? "text-[#235ABD] border-b-2 "
                      : "text-[#152B3D]  opacity-80"
                  }`}
                >
                  {element.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full min-w-80 h-fit lg:h-[60vh] flex flex-col lg:flex-row items-center justify-between gap-10 relative  lg:pl-10">
          <div className="absolute z-0 top-0 left-0 h-[70%] lg:h-full w-full min-w-75 lg:w-[70%] bg-[linear-gradient(176.77deg,_rgba(35,90,189,0.79)_-2.11%,_#235ABD_104.98%)] rounded-2xl"></div>
          <div className="text-[#EFF3FD] z-10 w-[40%] min-w-75 flex flex-col justify-center  gap-5">
            <h1 className="font-archivo text-2xl md:text-4xl font-[600] mt-10 lg:mt-0">
              {latestTechArr[selectedIndex].latestTechFields.heading}
            </h1>
            <ul className="pl-4 space-y-3">
              {latestTechArr[selectedIndex].latestTechFields.description
                .split("\n")
                .map((bullet) => {
                  return (
                    <li
                      key={bullet}
                      className="font-inter font-[400] list-disc list-outside pl-0"
                    >
                      {bullet}
                    </li>
                  );
                })}
            </ul>
          </div>
          <Image
            src={
              latestTechArr[selectedIndex].latestTechFields.techShowcasingImage
                .node.sourceUrl
            }
            width={
              latestTechArr[selectedIndex].latestTechFields.techShowcasingImage
                .node.mediaDetails.width
            }
            height={
              latestTechArr[selectedIndex].latestTechFields.techShowcasingImage
                .node.mediaDetails.height
            }
            alt={latestTechArr[selectedIndex].title}
            className="w-[80%] min-w-75 lg:w-[50%] h-[80%] object-cover z-10 rounded-xl"
          />
        </div>
      </div>
      <div className="lg:hidden w-full h-auto flex justify-center gap-2">
        <button
          onClick={() => {
            handleToggle(-1);
          }}
          className="rounded-full hover:cursor-pointer p-4 border text-[#152B3D]"
        >
          <LefttIcon />
        </button>
        <button
          onClick={() => {
            handleToggle(-1);
          }}
          className="rounded-full hover:cursor-pointer p-4 border text-[#152B3D]"
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
}
