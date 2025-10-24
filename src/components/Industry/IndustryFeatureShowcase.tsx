import Image from "next/image";

interface Feature {
  heading: string;
  para: string;
  sourceUrl: string;
  width: number;
  height: number;
}

export default function FeatureShowcase({
  featureList,
}: {
  featureList: Feature[];
}) {
  return (
    <div className="h-auto w-full bg-[#152B3D] py-20 flex flex-col items-center justify-center gap-20">
      {featureList.map((feature: Feature, index: number) => {
        return (
          <div
            key={feature.heading}
            className={`w-[70%] min-w-80 items-start flex flex-wrap  gap-10  ${
              index % 2 == 0
                ? "flex-row justify-evenly"
                : "flex-row-reverse justify-center"
            }`}
          >
            <div className="flex flex-col  w-[40%] min-w-80 font-inter text-[#EFF3FD] ">
              <h1 className="text-2xl ">{feature.heading}</h1>
              <ul className="list-disc list-outside  pl-4">
                {feature.para.split("\n").map((point) => {
                  return (
                    <li key={point} className="opacity-90 mt-5">
                      {point}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* For your reference gpt */}
            <div className="w-[45%] min-w-80 h-full auto  ">
              <Image
                src={feature.sourceUrl}
                alt={""}
                width={feature.width * 0.7}
                height={feature.height * 0.7}
                className="h-auto"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
