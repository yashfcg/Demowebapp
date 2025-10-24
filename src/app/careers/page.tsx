// No need for "use client" since this is a Server Component
import { CareerPage as CareerPageType, getCareerPage } from "@/lib/careerPageContent";
import { JobPost, getJobPosts } from "@/lib/jobPostContent";

import CareerBanner from "@/components/Career/CareerBanner";
import CareerIntro from "@/components/Career/CareerIntro";
import EmployeeBenefits from "@/components/Career/EmployeeBenefits";
import Applyform from "@/components/Career/ApplyForm";
import JobPosting from "@/components/Career/JobPosting";

// Server Component
export default async function CareerPage() {
  try {
    const data = await getCareerPage();
    const jobPosts = await getJobPosts();

    if (!data) {
      return <div>Career page data not available.</div>;
    }

    return <CareerPageContent data={data} jobPosts={jobPosts || []} />;
  } catch (error) {
    console.error("CareerPage error:", error);
    return <div>Failed to load career page.</div>;
  }
}

// Extracted component for rendering (can be a Server Component)
function CareerPageContent({
  data,
  jobPosts,
}: {
  data: CareerPageType;
  jobPosts: JobPost[];
}) {
  return (
    <div className="pt-12">
      <CareerBanner
        image={data?.careerImage?.node?.sourceUrl ?? ""}
        careerTitle="Careers"
        joinTitle={data?.joinTitle ?? ""}
        joinDescription={data?.joinDescription ?? ""}
      />
      <CareerIntro intro={data?.careerIntroduction ?? ""} />
      <EmployeeBenefits
        sectionTitle={data?.benefitsHeading ?? ""}
        benefits={data?.benefitTittleAndDecription ?? []}
      />
      <JobPosting jobs={jobPosts ?? []} />
      <Applyform title={data?.formTittle ?? ""} />
    </div>
  );
}