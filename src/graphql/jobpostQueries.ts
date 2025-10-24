import { gql } from "@apollo/client";

export const QUERY_JOB_POST = gql`

query getAllJobPosts {
  jobPosts {
    nodes {
      jobPosts {
        fieldGroupName
        overviewDescription
        qualificationDescription
        qualificationTittle
        responsibilityDescription
        responsibilityTittle
        overviewTittle
      }
      title
    }
  }
}`
