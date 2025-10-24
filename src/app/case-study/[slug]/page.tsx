import { getAllCaseStudyBySlug } from "@/lib/caseStudyContent";
import Banner from "@/components/CaseStudy/Banner";
import Testimonial from "@/components/CaseStudy/Testimonial";
import LearnMore from "@/components/Global/LearnMore";
import ChallengeSolutionImpact from "@/components/CaseStudy/ChallengeSolutionImpact";
// import ContactForDemo from "@/components/Global/ContactForDemo";

interface CaseStudyInterface {
  title: string;
  slug: string;
  caseStudyField: {
    bannerText: string;
    challenge: string;
    impact: string;
    quoteCitation: string;
    quoteText: string;
    solution: string;
  };
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        height: number;
        width: number;
      };
    };
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const CaseStudy: CaseStudyInterface | null = await getAllCaseStudyBySlug(
    slug
  );
  //   console.log(CaseStudy);
  if (CaseStudy == null) return <div></div>;
  else
    return (
      <div className="w-full h-auto">
        <Banner
          title={CaseStudy.title}
          bannerText={CaseStudy.caseStudyField.bannerText}
          bannerImageSource={CaseStudy.featuredImage.node.sourceUrl}
          width={CaseStudy.featuredImage.node.mediaDetails.width}
          height={CaseStudy.featuredImage.node.mediaDetails.height}
          altText={CaseStudy.featuredImage.node.altText}
        />
        <Testimonial
          quoteText={CaseStudy.caseStudyField.quoteText}
          quoteCitation={CaseStudy.caseStudyField.quoteCitation}
        />
        <ChallengeSolutionImpact
          challenge={CaseStudy.caseStudyField.challenge}
          impact={CaseStudy.caseStudyField.impact}
          solution={CaseStudy.caseStudyField.solution}
        />
        <LearnMore />
        {/* <ContactForDemo /> */}
      </div>
    );
}
