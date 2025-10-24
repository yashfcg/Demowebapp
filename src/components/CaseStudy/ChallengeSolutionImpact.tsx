import Image from "next/image";

export default function ChallengeSolutionImpact({
  challenge,
  impact,
  solution,
}: {
  challenge: string;
  impact: string;
  solution: string;
}) {
  return (
    <div className="w-full h-auto bg-white py-10 flex justify-center items-center">
      <div className="w-[70%] min-w-80 h-auto flex flex-col gap-10">
        <div className="w-full h-fit flex flex-col md:flex-row items-start justify-between  bg-[#EFF3FD]">
          <div className="h-[250px] relative">
            <Image
              src={"/assets/caseStudy/blueQuadrilateral.png"}
              width={344}
              height={304}
              alt="Blue Quadrilateral"
              className="h-full w-auto"
            />
            <h1 className="z-10 absolute top-[20%] left-[15%] text-white font-archivo font-[700] text-4xl">
              Challenge
            </h1>
          </div>
          <div className="h-fit w-full md:w-[70%] min-w-70  p-10">
            <p className="font-inter font-[400] text-[#152B3D] whitespace-pre-line">
              {challenge}
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row items-start justify-between  bg-[#EFF3FD]">
          <div className="h-[250px] relative">
            <Image
              src={"/assets/caseStudy/blueQuadrilateral.png"}
              width={344}
              height={304}
              alt="Blue Quadrilateral"
              className="h-full w-auto"
            />
            <h1 className="z-10 absolute top-[20%] left-[15%] text-white font-archivo font-[700] text-4xl">
              Solution
            </h1>
          </div>
          <div className="h-fit w-full md:w-[70%] min-w-70  p-10">
            <p className="font-inter font-[400] text-[#152B3D] whitespace-pre-line">
              {solution}
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row items-start justify-between  bg-[#EFF3FD]">
          <div className="h-[250px] relative">
            <Image
              src={"/assets/caseStudy/blueQuadrilateral.png"}
              width={344}
              height={304}
              alt="Blue Quadrilateral"
              className="h-full w-auto"
            />
            <h1 className="z-10 absolute top-[20%] left-[15%] text-white font-archivo font-[700] text-4xl">
              Impact
            </h1>
          </div>
          <div className="h-fit w-full md:w-[70%] min-w-70  p-10">
            <p className="font-inter font-[400] text-[#152B3D] whitespace-pre-line">
              {impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
