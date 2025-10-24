import AboutUsBanner from "@/components/AboutUs/AboutUsBanner";
import CompanyDesc from "@/components/AboutUs/CompanyDesc";
import Management from "@/components/AboutUs/Management";
import TalkToAnExpert from "@/components/AboutUs/TalkToAnExpert";
import TechnologyPartner from "@/components/AboutUs/TechnologyPartner";
import VisionMission from "@/components/AboutUs/VisionMission";
// import ContactForDemo from "@/components/Global/ContactForDemo";
import {
  getAboutUs,
  getManagement,
  getTechnologyPartners,
} from "@/lib/aboutUsContent";
import { getAboutUsMetaData } from "@/lib/metaData";
import { notFound } from "next/navigation";
interface AboutUs {
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
  aboutUsFields: {
    bannerText: string;
    companyDescription: string;
    mission: string;
    mottoOnAboutUsPage: string;
    vision: string;
  };
}

interface ManagementInterface {
  title: string;
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
  managementFields: {
    bio: string | null;
    position: string;
    linkedin: string;
  };
}

interface technologyPartnersInterface {
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
}

export async function generateMetadata() {
  const metaData = await getAboutUsMetaData();
  console.log(metaData);
  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    keywords: metaData.keyWords.split("\n").map((keyword: string) => keyword),
    openGraph: {
      title: metaData.metaTitle,
      description: metaData.metaDescription,
      url: `https://flairdocs.com/about-us`,
      siteName: "Flairdocs",
      locale: "en_US",
      type: "website",
    },
  };
}
export const revalidate = 10;
export default async function AboutUs({}) {
  const aboutUsData: AboutUs | null = await getAboutUs();
  const managementData: ManagementInterface[] = await getManagement();
  const techPartners: technologyPartnersInterface[] =
    await getTechnologyPartners();
  if (aboutUsData == null) notFound();
  //console.log(aboutUsData);
  return (
    <div className="w-full h-auto">
      <AboutUsBanner
  title="About Us"
  bannerText={aboutUsData.aboutUsFields?.bannerText || ""}
  sourceUrl={aboutUsData.featuredImage?.node?.sourceUrl || ""}
  altText={aboutUsData.featuredImage?.node?.altText || "About Us banner"}
  width={aboutUsData.featuredImage?.node?.mediaDetails?.width || 1200}
  height={aboutUsData.featuredImage?.node?.mediaDetails?.height || 600}
/>
      <CompanyDesc
        companyDescription={aboutUsData.aboutUsFields.companyDescription}
        companyMotto={aboutUsData.aboutUsFields.mottoOnAboutUsPage}
      />
      <VisionMission
        vision={aboutUsData.aboutUsFields.vision}
        mission={aboutUsData.aboutUsFields.mission}
      />
      <Management managementData={managementData} />
      <TechnologyPartner techPartners={techPartners} />
      <TalkToAnExpert />
      {/* <ContactForDemo /> */}
    </div>
  );
}
