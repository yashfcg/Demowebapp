import { getApolloClient } from "./apolloClient";
import { QUERY_AWARDS_AND_RECOG } from "@/graphql/awardAndRecognitionQueries";

export interface AwardsAndRecognition {
  bannerImage: string;
  description: string;
  title: string;
}

interface AwardsAndRecognitionNode {
  awardsAndRecognitionField: {
    awardsbannerimage?: {
      node?: {
        mediaItemUrl?: string;
      };
    };
    awardsdescription?: string;
    awardstittle?: string;
  };
}

export async function getAwardsAndRecognitions(): Promise<AwardsAndRecognition[] | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_AWARDS_AND_RECOG,
      fetchPolicy: "no-cache",
    });

    if (!data || !data.awardsAndRecognitions?.nodes) {
      throw new Error("No awards and recognitions found");
    }

    const awardsList: AwardsAndRecognition[] = data.awardsAndRecognitions.nodes.map(
      (node: AwardsAndRecognitionNode) => ({
        bannerImage: node.awardsAndRecognitionField.awardsbannerimage?.node?.mediaItemUrl || "",
        description: node.awardsAndRecognitionField.awardsdescription || "",
        title: node.awardsAndRecognitionField.awardstittle || "",
      })
    );

    return awardsList;
  } catch (error) {
    console.error("Error fetching awards and recognitions:", error);
    return null;
  }
}