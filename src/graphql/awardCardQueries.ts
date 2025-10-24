import { gql } from "@apollo/client";

export const QUERY_AWARD_CARDS = gql`

query NewQuery {
  awardcards {
    nodes {
      awardcards {
        awardcarddescription
        awardcardtitle
        fieldGroupName
      }
    }
  }
}`