import { GlobalLinkButton } from "../ui/GlobalButton";

export default function IndustryAim({
  industryEnablement,
  industryEmpowerment,
  title,
}: {
  industryEnablement: string;
  industryEmpowerment: string;
  title: string;
}) {
  return (
    <div className="w-full h-auto py-20 flex items-center justify-center bg-white">
      <div className="w-[70%] min-w-80 flex flex-wrap gap-10 items-start justify-between">
        <div className="flex-1 h-auto min-w-80 max-w-[600px] flex flex-col items-start gap-10 text-[#152B3D] font-inter font-[400]">
          <h1 className="text-3xl ">{industryEnablement}</h1>
          <p className="text-lg ">{industryEmpowerment}</p>
        </div>
        <div className="flex items-center justify-center w-fit h-fit p-10 rounded-lg  bg-[#EFF3FD]">
          <div className="flex flex-col max-w-[300px] items-center gap-3 ">
            <h1 className="text-center font-inter font-[600]">
              {`Unlock the full potential of your ${title} Project with Flairdocs`}
            </h1>
            <div className="">
              <GlobalLinkButton
                size="large"
                type="Primary"
                text="REQUEST DEMO"
                link="/request-demo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
