import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
type IconItem = {
  imageSrc: string;
  link: string;
  name: string;
};
const icons: { [key: string]: IconItem[] } = {
  Transit: [
    {
      imageSrc: "/assets/industry/dottrack.png",
      link: "/product/dottrack",
      name: "DOTTrack",
    },
  ],
  Transportation: [
    {
      imageSrc: "/assets/industry/dottrack.png",
      link: "/product/dottrack",
      name: "DOTTrack",
    },
    { imageSrc: "/assets/industry/adSmart.png", link: "", name: "AdSmart" },
    {
      imageSrc: "/assets/industry/highwayAccessPermit.png",
      link: "/product/highway-access-permitting",
      name: "Highway Access",
    },
    {
      imageSrc: "/assets/industry/enviroTrack.png",
      link: "/product/envirotrack",
      name: "EnviroTrack",
    },
    { imageSrc: "/assets/industry/geoTrack.png", link: "", name: "GeoTrack" },
    {
      imageSrc: "/assets/industry/mobileTrack.png",
      link: "",
      name: "MobileTrack",
    },
  ],
  Pipeline: [
    {
      imageSrc: "/assets/industry/pipeline.png",
      link: "/product/pipelinetrack",
      name: "PipelineTrack",
    },
    { imageSrc: "/assets/industry/geoTrack.png", link: "", name: "GeoTrack" },
    {
      imageSrc: "/assets/industry/mobileTrack.png",
      link: "",
      name: "MobileTrack",
    },
  ],
  "Local Government": [
    {
      imageSrc: "/assets/industry/alcoholTrack.png",
      link: "/product/alcoholic-beverage-control",
      name: "Alcohol Beverage",
    },
    {
      imageSrc: "/assets/industry/mobileTrack.png",
      link: "",
      name: "Mobile Track",
    },
    {
      imageSrc: "/assets/industry/contract.png",
      link: "/product/contracttrack",
      name: "Contract Track",
    },
  ],
  Utilities: [
    {
      imageSrc: "/assets/industry/electricTrack.png",
      link: "/product/electrictrack",
      name: "Electric Track",
    },
    {
      imageSrc: "/assets/industry/utilityTrack.png",
      link: "/product/utiltrack",
      name: "Utility Track",
    },
    {
      imageSrc: "/assets/industry/outreachTrack.png",
      link: "/product/outdoor-advertising-and-control",
      name: "Outreach Track",
    },
    {
      imageSrc: "/assets/industry/geoTrack.png",
      link: "",
      name: "GeoTrack",
    },
    {
      imageSrc: "/assets/industry/mobileTrack.png",
      link: "",
      name: "Mobile Track",
    },
  ],
  Renewables: [
    {
      imageSrc: "/assets/industry/utilityTrack.png",
      link: "/product/utiltrack",
      name: "Utility Track",
    },
    {
      imageSrc: "/assets/industry/geoTrack.png",
      link: "",
      name: "GeoTrack",
    },
    {
      imageSrc: "/assets/industry/mobileTrack.png",
      link: "",
      name: "Mobile Track",
    },
  ],
};
export default async function BenefitsAndFeatures({
  benefitsAndFeatures,
  title,
}: {
  benefitsAndFeatures: string;
  title: string;
}) {
  console.log(benefitsAndFeatures);

  return (
    <div className="w-full h-auto py-20 flex items-center justify-center bg-[#EFF3FD]">
      <div className="w-[70%] min-w-80 h-auto  flex flex-col items-start justify-between ">
        <div className="w-full  flex flex-col gap-6 text-[#152B3D]">
          <h1 className="font-archivo font-[700] text-4xl">
            Benefits and Features
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4  w-full">
            {benefitsAndFeatures
              .replace(/<\/?[^>]+(>|$)/g, "")
              .split("\n")
              .map((line, index) => (
                <div key={index} className="flex items-start gap-3 w-full">
                  {/* Circle with check icon */}

                  <div className="w-6 h-6 min-w-6 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <FaCheck className="text-green-600 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-inter font-[400] break-words  w-full">
                      {line}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full flex justify-center mt-20 ">
          <div className="flex items-center  w-fit h-fit p-10 rounded-lg bg-white">
            <div className="flex flex-col max-w-[500px] items-center gap-5 ">
              <h1 className="text-center font-inter font-[600]">
                {`Our products that assists ${title}`}
              </h1>
              <div className="w-full grid grid-cols-3 gap-5">
                {icons[title]?.map((icon: IconItem) => {
                  return (
                    <Link
                      href={icon.link}
                      key={icon.imageSrc}
                      className="flex flex-col w-full items-center gap-2 justify-self-center"
                    >
                      <Image
                        width={50}
                        height={50}
                        alt=""
                        src={icon.imageSrc}
                        className=""
                      ></Image>
                      <p className="font-bold font-archivo text-black text-sm md:text-base">
                        {icon.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
