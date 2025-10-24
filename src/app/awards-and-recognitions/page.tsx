import AwardBanner from "@/components/AwardsAndRecog/AwardBanner";
import { getAwardsAndRecognitions } from "@/lib/awardsAndRecogContent";
import { getAwardCards} from "@/lib/awardCardsContent";
import AwardCarousel from "@/components/AwardsAndRecog/AwardCarousel";
export default async function AwardsPage() {
  const awardsData = await getAwardsAndRecognitions();
  const awardCardData=await getAwardCards();

  const bannerImage = awardsData?.[0]?.bannerImage || "";
  const description = awardsData?.[0]?.description || "";
  const title = awardsData?.[0]?.title || "Awards & Recognition";

  return (
    <div className="pt-10 bg-[#F6F8F8] ">
      <AwardBanner
        image={bannerImage}
        title={title}
      />

      <div className="max-w-4xl text-center mx-auto px-4 py-8 text-lg leading-relaxed text-gray-700">
        {description}
      </div>
      <AwardCarousel awards={awardCardData?.map(({ title, description }) => ({ title, description })) || []} />
    </div>
  );
}