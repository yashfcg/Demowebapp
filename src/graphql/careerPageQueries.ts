import { gql } from "@apollo/client";

export const QUERY_CAREER_PAGE = gql`
  query getAllCareerData {
    career(id: "careers", idType: SLUG) {
      careerpage {
        benefitTittleAndDecription
        benefitsHeading
        careerImage {
          node {
            sourceUrl
          }
        }
        careerIntroduction
        fieldGroupName
        formTittle
        joinDescription
        joinTitle
      }
    }
  }
`;