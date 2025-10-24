import { gql } from "@apollo/client";

export const QUERY_CASE_STUDY = gql`
  query caseStudy ($slug: ID!){
  caseStudy(id: $slug, idType: SLUG) {
    caseStudyField {
      bannerText
      challenge
      impact
      quoteCitation
      quoteText
      solution
    }
    title
    slug
    featuredImage {
      node {
        mediaDetails {
          height
          width
        }
        sourceUrl
        altText
      }
    }
  }
}
`;

export const QUERY_CASE_STUDY_SLUGS = gql`
  query getAllCaseStudySlug {
  caseStudies {
    nodes {
      caseStudyField {
        quoteCitation
        quoteText
      }
      slug
      title
    }
  }
}
`;

