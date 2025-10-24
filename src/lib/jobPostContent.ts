import { getApolloClient } from "./apolloClient";
import { QUERY_JOB_POST } from "@/graphql/jobpostQueries";

export interface JobPost {
  title: string;
  overviewTittle: string;
  overviewDescription: string;
  responsibilityTittle: string;
  responsibilityDescription: string;
  qualificationTittle: string;
  qualificationDescription: string;
}

interface JobPostNode {
  title: string;
  jobPosts: {
    overviewTittle: string;
    overviewDescription: string;
    responsibilityTittle: string;
    responsibilityDescription: string;
    qualificationTittle: string;
    qualificationDescription: string;
  };
}

export async function getJobPosts(): Promise<JobPost[] | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_JOB_POST,
      fetchPolicy: "no-cache",
    });

    if (!data || !data.jobPosts?.nodes) {
      throw new Error("No job posts found");
    }

    const jobPosts: JobPost[] = data.jobPosts.nodes.map((node: JobPostNode) => ({
      title: node.title,
      overviewTittle: node.jobPosts.overviewTittle,
      overviewDescription: node.jobPosts.overviewDescription,
      responsibilityTittle: node.jobPosts.responsibilityTittle,
      responsibilityDescription: node.jobPosts.responsibilityDescription,
      qualificationTittle: node.jobPosts.qualificationTittle,
      qualificationDescription: node.jobPosts.qualificationDescription,
    }));

    return jobPosts;
  } catch (error) {
    console.error("Error fetching job posts:", error);
    return null;
  }
}