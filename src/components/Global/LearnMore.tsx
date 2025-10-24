import { GlobalLinkButton } from "../ui/GlobalButton";
const content = {
  "sub-heading":
    "Initiate the process by booking a brief call with one of our knowledgeable team members. We'll discuss your distinct goals and objectives and provide expert guidance on the most effective strategies to attain them.",
};
export default function LearnMore({}) {
  return (
    <div className="w-full h-auto  bg-[#EFF3FD] flex items-center justify-center px-6  py-10">
      <div className="w-auto h-auto max-w-[650px] flex flex-col items-center justify-center  gap-5">
        <p className="text-[#235ABD] font-inter font-[600]">Take Action</p>
        <h1 className="text-[#152B3D] text-xl md:text-2xl lg:text-4xl font-[700] font-archivo">
          Want to know how we can help?
        </h1>
        <p className="font-inter text-sm md:text-base font-normal leading-[28px] md:leading-[32px] tracking-[0%] text-[#152B3D] text-center opacity-80">
          {content["sub-heading"]}
        </p>
        <div className="flex justify-center items-center">
          <GlobalLinkButton
            type="Primary"
            text={"LEARN MORE"}
            size="normal"
            link={"/request-demo"}
          />
        </div>
      </div>
    </div>
  );
}
