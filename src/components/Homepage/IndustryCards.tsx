import { getAllIndustryCardHomePage } from "@/lib/industryContent";
import Image from "next/image";
import Link from "next/link";

interface IndustryCard {
  title: string;
  slug: string;
  sourceUrl: string;
  altText: string;
  industryDescriptionInMenu: string;
}
// const industries = [
//   { name: "Transportation", src: "/assets/homepage/transport.png" },
//   { name: "Transit", src: "/assets/homepage/transit.png" },
//   { name: "Pipeline", src: "/assets/homepage/pipeline.png" },
//   { name: "Local Government", src: "/assets/homepage/localGovt.png" },
//   { name: "Utilities", src: "/assets/homepage/utilities.png" },
//   { name: "Renewables", src: "/assets/homepage/renewables.png" },
// ];
export default async function IndustryCards({}) {
  const industryCards: IndustryCard[] = await getAllIndustryCardHomePage();
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <div className="w-[70%] min-w-80  flex flex-col items-center gap-5">
        <h1 className=" text-center font-archivo text-2xl md:text-4xl font-[700] text-[#152B3D]">
          Digitally transforming the way Right of Way industries work
        </h1>
        <p className="font-inter w-[60%] min-w-80 font-[400] text-[#152B3D] text-center opacity-80">
          Helping our customers find a competitive advantage while standardizing
          their processes to find cost and process efficiency.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {industryCards.map((industry) => {
          return (
            <Link key={industry.slug} href={`/industry/${industry.slug}`}>
              <div className=" group hover:cursor-pointer col-span-1 aspect-[3/2] relative flex justify-center items-center overflow-clip">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="relative group-hover:scale-[1.2] smooth w-full h-full transition-transform duration-500">
                  <Image
                    src={industry.sourceUrl}
                    alt={industry.altText}
                    fill
                    className="object-cover z-0"
                  />
                </div>
                <div className="absolute inset-0 z-20 flex  justify-center items-center">
                  <div className="z-20 flex flex-col gap-2 justify-center items-center transition-all duration-500 smooth">
                    <h2 className="text-white z-20 font-archivo font-[700] text-3xl ">
                      {industry.title}
                    </h2>
                    <p className="group-hover:block hidden w-[60%] text-white z-20 font-archivo font-[400] text-base text-center transition-all duration-500 smooth">
                      {industry.industryDescriptionInMenu}
                    </p>
                    <p className=" group-hover:block hidden w-[60%] text-blue-400 z-20 font-archivo font-[400] text-sm text-center transition-all duration-500 smooth">
                      <span>Learn More</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
