import { QuoteIcon } from "@/components/ui/Icons";

export default function Testimonial({
  quoteText,
  quoteCitation,
}: {
  quoteText: string;
  quoteCitation: string;
}) {
  return (
    <div className="w-full h-auto bg-[#213546] flex justify-center items-center py-10">
      <div className="w-[80%]  min-w-80 max-w-[860px] h-fit text-white font-inter relative flex flex-col items-end">
        <div className="top-0 left-0 absolute">
          <QuoteIcon />
        </div>
        <div className="py-10 px-10 md:px-20">
          <p className="text-lg font-[300]">{quoteText}</p>
        </div>
        <div className="pr-10 md:pr-20">
          <p>{quoteCitation}</p>
        </div>
      </div>
    </div>
  );
}
