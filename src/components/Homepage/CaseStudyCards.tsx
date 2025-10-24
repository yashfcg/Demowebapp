import { getAllCaseStudySlugs } from "@/lib/caseStudyContent";
import Link from "next/link";
interface CaseStudyCardInterface {
  title: string;
  slug: string;
  caseStudyField: {
    quoteCitation: string;
    quoteText: string;
  };
}
function CaseCard({
  caseCards,
  index,
}: {
  caseCards: CaseStudyCardInterface[];
  index: number;
}) {
  return (
    <div
      className={`${
        index % 2 == 0 ? "bg-[#235ABD]" : "bg-[#EFF3FD]"
      }  w-fit min-w-70 max-w-[350px] p-10 justify-self-center col-span-1 flex justify-center items-center h-[320px] rounded-xl`}
    >
      <div
        className={`flex flex-col items-start justify-between gap-5 h-full ${
          index % 2 == 0 ? "text-[#EFF3FD]" : "text-[#152B3D]"
        }`}
      >
        <div className="flex flex-grow flex-col gap-2 font-[500] leading-tight text-left">
          <p className="flex-grow">{`"${caseCards[index].caseStudyField.quoteText}"`}</p>
          <p className=" font-[500] text-sm text-left">
            {` - ${caseCards[index].caseStudyField.quoteCitation}`}
          </p>
          <p className="font-[600] text-sm text-left">{`   ${caseCards[index].title}`}</p>
        </div>
        <Link
          className={` font-inter font-[700] border-b-1 w-fit`}
          href={`/case-study/${caseCards[index].slug}`}
        >
          View Full Case Study
        </Link>
      </div>
    </div>
  );
}
export default async function CaseStudyCards({}) {
  const caseCards: CaseStudyCardInterface[] = await getAllCaseStudySlugs();
  return (
    <div className="w-full h-auto flex flex-col gap-7 items-center py-10">
      <div className="w-[70%] min-w-80  flex flex-col items-center gap-5">
        <h1 className=" text-center font-archivo text-2xl md:text-4xl font-[700] text-[#152B3D]">
          {/* A leader in Right of Way Software Solutions since 2001 */}
          {"They Chose Us and Here's Why"}
        </h1>
        <p className="font-inter w-[80%] min-w-70 font-[400] text-[#152B3D] text-center opacity-80">
          Our extensive experience and subject matter expertise in the
          industries we serve allow us to combine resources and recommend the
          most cutting edge product customized to meet your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[80%] min-w-80 gap-5">
        <CaseCard caseCards={caseCards} index={2} />
        <CaseCard caseCards={caseCards} index={1} />
        <CaseCard caseCards={caseCards} index={0} />
      </div>
    </div>
  );
}
