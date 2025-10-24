import { GlobalLinkButton } from "../ui/GlobalButton";

export default function TalkToAnExpert({}) {
  return (
    <div className="w-full h-auto  bg-[#EFF3FD] flex items-center justify-center px-6  py-20">
      <div className="w-auto h-auto max-w-[650px] flex flex-col items-center justify-center  gap-10">
        <h1 className="text-[#152B3D] text-xl md:text-2xl lg:text-4xl font-[700] font-archivo">
          Wish to talk to an expert?
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <GlobalLinkButton
            type="Primary"
            text={"REQUEST DEMO"}
            size="wide"
            link={"/request-demo"}
          />
          <GlobalLinkButton
            type="AntiPrimary"
            text={"CONTACT US"}
            size="wide"
            link={""}
          />
        </div>
      </div>
    </div>
  );
}
