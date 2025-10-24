import { getHeroContent } from "@/lib/homepageContent";
// import { ScrollingButton } from "../ui/GlobalButton";
import HeroImage from "./HeroImage";
import { notFound } from "next/navigation";
import Link from "next/link";
// const content = {
//   "sub-title":
//     "Automate and efficiently manage right of way, land acquisition and asset management with our integrated software solution, saving you time and money.",
// };
interface HeroImage {
  altText: string;
  sourceUrl: string;
}

export default async function Hero({}) {
  const heroContent = await getHeroContent(Date.now());
  if (heroContent == null) notFound();
  const heroImages: HeroImage[] = [
    {
      sourceUrl: heroContent?.homePageFields.homePageBanner.node.sourceUrl,
      altText: "Pipeline",
    },
  ];
  return (
    <div className="group  w-full h-[120vh] sm:h-screen overflow-hidden relative flex ">
      {/* <div className="overflow-hidden w-full h-full relative group-hover:scale-[1.2] transition-transform duration-[10000ms] smooth">
        <Image
          src="/assets/homepage/pipelineWind.png"
          fill
          alt="Pipeline"
          className="object-cover "
        />
      </div> */}
      <HeroImage heroImages={heroImages} />
      <div className="w-[80%] absolute top-[15%] sm:top-[20%] left-[10%] md:left-[15%]  min-w-70 z-20 flex sm:flex-row flex-col items-center gap-10">
        <div className="  font-archivo w-[100%] sm:w-[60%]  md:w-[40%] xl:w-[43%]">
          <h1 className=" text-white text-xl sm:text-xl md:text-2xl xl:text-4xl font-[700] leading-[140%] ">
            {/* Optimize Right-Of-Way
          <br /> and Permitting operations
          <br /> with Flairdocs */}
            {/* Optimize Right-Of-Way and Permitting operations with Flairdocs */}
            {heroContent?.homePageFields.heroHeading}
          </h1>
          <p className="text-white font-inter font-[500]  text-base sm:text-lg mt-10  xl:leading-[200%]">
            {heroContent?.homePageFields.heroPara}
          </p>
          <div className="w-full h-auto mt-10 flex flex-col md:flex-row gap-5">
            <Link
              href="/request-demo"
              className="bg-[#2A72FF] uppercase  font-inter text-[#EFF3FD] inline-block self-start  h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer px-6 py-3 tracking-[0.1em]"
            >
              Request Demo
            </Link>
            {/* <button className="bg-[#2A72FF]  font-inter text-[#EFF3FD] inline-block self-start  h-auto w-auto min-w-fit rounded text-sm font-[600] hover:cursor-pointer px-6 py-3 tracking-[0.1em]">
            WATCH VIDEO
          </button> */}
          </div>
        </div>
        <div className="xl:w-[50%] md:w-[40%] w-full sm:-mt-10 md:block sm:hidden block h-auto aspect-video">
          <video
            poster={heroContent.homePageFields.heroVideoposter.node.sourceUrl}
            src={heroContent.homePageFields.herovideo.node.mediaItemUrl}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
}
