import { getApolloClient } from "./apolloClient";
import { QUERY_AWARD_CARDS } from "@/graphql/awardCardQueries";

export interface AwardCard {
  title: string;
  description: string;
}

interface AwardCardNode {
  awardcards: {
    awardcardtitle: string;
    awardcarddescription: string;
    fieldGroupName?: string;
  };
}

export async function getAwardCards(): Promise<AwardCard[] | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_AWARD_CARDS,
      fetchPolicy: "no-cache",
    });

    if (!data || !data.awardcards?.nodes) {
      throw new Error("No award cards found");
    }

    const cards: AwardCard[] = data.awardcards.nodes.map(
      (node: AwardCardNode) => ({
        title: node.awardcards.awardcardtitle,
        description: node.awardcards.awardcarddescription,
      })
    );

    return cards;
  } catch (error) {
    console.error("Error fetching award cards:", error);
    return null;
  }
}