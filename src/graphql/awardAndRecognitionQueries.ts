import { gql } from "@apollo/client";

export const QUERY_AWARDS_AND_RECOG = gql`


  query AwardsAndRecognitions {
    awardsAndRecognitions {
        nodes {
            awardsAndRecognitionField {
                awardsbannerimage {
                    node {
                        mediaItemUrl
                    }
                }
                awardsdescription
                awardstittle
            }
        }
    }
}`