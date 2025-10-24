// import ContactForDemo from "@/components/Global/ContactForDemo";
import Hero from "@/components/Global/Hero";
// import CaseStudyCards from "@/components/Homepage/CaseStudyCards";
import Difference from "@/components/Homepage/Difference";
// import Flairdocs7 from "@/components/Homepage/Flairdocs7";

import LearnMore from "@/components/Global/LearnMore";
import IndustryCards from "@/components/Homepage/IndustryCards";
import LatestTechnology from "@/components/Homepage/LatestTechnology";
import PartnerLogos from "@/components/Homepage/PartnerLogos";
import { getHomePageMetaData } from "@/lib/metaData";
// export const metadata = {
//   title: "Flairdocs – Right of Way & Property Management Software",
//   description:
//     "Flairdocs is a web-enabled workflow and document management application designed to simplify your right of way and property management processes.",
//   keywords: [
//     "Right of Way Software",
//     "Property Management",
//     "Land Acquisition",
//     "Real Estate Lead Management",
//     "Document Management",
//     "Workflow Automation",
//   ],
//   openGraph: {
//     title: "Flairdocs – Right of Way & Property Management Software",
//     description:
//       "Simplify your right of way and property management with Flairdocs.",
//     url: "https://flairdocs.com",
//     siteName: "Flairdocs",
//     images: [
//       {
//         url: "https://flairdocs.com/og-image.jpg", // replace with actual
//         width: 1200,
//         height: 630,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export async function generateMetadata() {
  const metaData = await getHomePageMetaData();
  return {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    keywords: metaData.keyWords.split("\n").map((keyword: string) => keyword),
    openGraph: {
      title: metaData.metaTitle,
      description: metaData.metaDescription,
      url: `https://flairdocs.com`,
      siteName: "Flairdocs",
      locale: "en_US",
      type: "website",
    },
  };
}
export const revalidate = 10;
export default async function Home() {
  return (
    <div className="w-full h-auto  ">
      <Hero />
      <LatestTechnology />
      <IndustryCards />
      <Difference />
      {/* <CaseStudyCards /> */}
      {/* <Flairdocs7 /> */}
      {/* <ContactForDemo /> */}
      <PartnerLogos />
      <LearnMore />
    </div>
  );
}
