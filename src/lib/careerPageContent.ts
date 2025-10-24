import { QUERY_CAREER_PAGE } from "@/graphql/careerPageQueries";
import { getApolloClient } from "./apolloClient";

export interface CareerPage {
  benefitTittleAndDecription: string;
  benefitsHeading: string;
  careerImage: {
    node: {
      sourceUrl: string;
    };
  };
  careerIntroduction: string;
  fieldGroupName: string;
  formTittle: string;
  joinDescription: string;
  joinTitle: string;
}

export async function getCareerPage(): Promise<CareerPage | null> {
  try {
    const apolloClient = getApolloClient();

    const response = await apolloClient.query({
      query: QUERY_CAREER_PAGE,
      // Uncomment and use if needed
      // variables: {
      //   id: "career", // make sure this matches your actual slug
      //   idType: "SLUG",
      // },
      fetchPolicy: "no-cache",
    });

    // ✅ Correct log

    if (
      !response ||
      !response.data ||
      !response.data.career ||
      !response.data.career.careerpage
    ) {
      throw new Error("Career page data is missing or incomplete");
    }

    return response.data.career.careerpage;
  } catch (error) {
    console.error("Error fetching Career Page:", error);
    return null;
  }
}