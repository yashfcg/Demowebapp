// import ContactForDemo from "@/components/Global/ContactForDemo";
import BenefitsAndFeatures from "@/components/Industry/BenefitsAndFeatures";
import IndustryAim from "@/components/Industry/IndustryAim";
import IndustryBanner from "@/components/Industry/IndustryBanner";
import FeatureShowcase from "@/components/Industry/IndustryFeatureShowcase";
import { getIndustryBySlug } from "@/lib/industryContent";
import { getIndustryMetaData } from "@/lib/metaData";
import { notFound } from "next/navigation";

interface Industry {
  title: string;
  slug: string;
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
  industryFields: {
    bannerText: string;
    benefitsAndFeatures: string;
    industryEnablement: string;
    industryEmpowerment: string;
    feature1: {
      featureHeading: string;
      featurePara: string;
      featureImage: {
        node: {
          altText: string;
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
    };
    feature2: {
      featureHeading: string;
      featurePara: string;
      featureImage: {
        node: {
          altText: string;
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
    };
    feature3: {
      featureHeading: string;
      featurePara: string;
      featureImage: {
        node: {
          altText: string;
          sourceUrl: string;
          mediaDetails: {
            width: number;
            height: number;
          };
        };
      };
    };
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metaData = await getIndustryMetaData(slug);
  let keywords: string[] = [];
  if (metaData.keyWords && metaData.keyWords != "") {
    keywords = metaData.keyWords.split("\n").map((keyword: string) => keyword);
  }
  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    keywords: keywords,
    openGraph: {
      title: metaData.metaTitle,
      description: metaData.metaDescription,
      url: `https://flairdocs.com/industry/${slug}`,
      siteName: "Flairdocs",
      locale: "en_US",
      type: "website",
    },
  };
}

interface Feature {
  heading: string;
  para: string;
  sourceUrl: string;
  width: number;
  height: number;
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry: Industry | null = await getIndustryBySlug(slug);
  if (industry == null) notFound();
  //console.log(industry.industryFields.feature1);
  const featureList: Feature[] = [
    {
      heading: industry.industryFields.feature1.featureHeading,
      para: industry.industryFields.feature1.featurePara,
      sourceUrl: industry.industryFields.feature1.featureImage.node.sourceUrl,
      width:
        industry.industryFields.feature1.featureImage.node.mediaDetails.width,
      height:
        industry.industryFields.feature1.featureImage.node.mediaDetails.height,
    },
    {
      heading: industry.industryFields.feature2.featureHeading,
      para: industry.industryFields.feature2.featurePara,
      sourceUrl: industry.industryFields.feature2.featureImage.node.sourceUrl,
      width:
        industry.industryFields.feature2.featureImage.node.mediaDetails.width,
      height:
        industry.industryFields.feature2.featureImage.node.mediaDetails.height,
    },
    {
      heading: industry.industryFields.feature3.featureHeading,
      para: industry.industryFields.feature3.featurePara,
      sourceUrl: industry.industryFields.feature3.featureImage.node.sourceUrl,
      width:
        industry.industryFields.feature3.featureImage.node.mediaDetails.width,
      height:
        industry.industryFields.feature3.featureImage.node.mediaDetails.height,
    },
  ];
  return (
    <div className="w-full h-auto">
      <IndustryBanner
        title={industry.title}
        bannerText={industry.industryFields.bannerText}
        width={industry.featuredImage.node.mediaDetails.width}
        height={industry.featuredImage.node.mediaDetails.height}
        sourceUrl={industry.featuredImage.node.sourceUrl}
        altText={industry.featuredImage.node.altText}
      />
      <IndustryAim
        industryEnablement={industry.industryFields.industryEnablement}
        industryEmpowerment={industry.industryFields.industryEmpowerment}
        title={industry.title}
      />
      <FeatureShowcase featureList={featureList} />
      <BenefitsAndFeatures
        benefitsAndFeatures={industry.industryFields.benefitsAndFeatures}
        title={industry.title}
      />
      {/* <ContactForDemo /> */}
    </div>
  );
}
