export default function VisionMission({
  vision,
  mission,
}: {
  vision: string;
  mission: string;
}) {
  return (
    <div className="w-full h-auto flex items-center justify-center  ">
      <div className="w-[80%] min-w-80 h-full py-10 bg-[#233849] flex items-center justify-center">
        <div className="w-[70vw] md:pr-40 flex flex-col items-start gap-10  text-[#EFF3FD]">
          <div className="flex flex-col gap-2 border-l-4 border-[#2A72FF] pl-4">
            <h1 className="font-archivo font-[700] text-xl sm:text-2xl md:text-4xl ">
              Vision
            </h1>
            <p className="font-inter font-[300] whitespace-pre-line">
              {vision}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-l-4 border-[#2A72FF] pl-4">
            <h1 className="font-archivo font-[700] text-xl sm:text-2xl md:text-4xl ">
              Mission
            </h1>
            <p className="font-inter font-[300] whitespace-pre-line">
              {mission}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
