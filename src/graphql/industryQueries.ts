import { gql } from "@apollo/client";
export const QUERY_ALL_INDUSTRY_SLUGS = gql`
query getAllIndustrySlugs {
    industries {
      nodes {
        title
        slug
      }
    }
  }
`;
export const QUERY_ALL_INDUSTRY_SLUGS_HOMEPAGE = gql`
query getAllIndustrySlugsForHomepage {
  industries {
    nodes {
      title
      slug
      industryFields {
        industryDescriptionInMenu
        industryImageOnHomepage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`;
export const QUERY_ALL_INDUSTRY_FOR_MENU = gql`
query getAllIndustryForHeader {
  industries {
    nodes {
      title
      slug
      industryFields {
        industryDescriptionInMenu
      }
    }
  }
}
`;



export const QUERY_INDUSTRY_BY_SLUG = gql`
query getAllIndustryBySlug($slug: ID!) {
  industry(id: $slug , idType: SLUG) {
    title
    slug
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        sourceUrl
      }
    }
    industryFields {
      bannerText
      benefitsAndFeatures
      industryEnablement
      industryEmpowerment
      feature1 {
        featureHeading
        featurePara
        featureImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
      feature2 {
        featureHeading
        featurePara
        featureImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
      feature3 {
        featureHeading
        featurePara
        featureImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
}
`
export const QUERY_INDUSTRY_META_DATA = gql`
query getIndustryMetaData($slug: ID!) {
  industry(id: $slug , idType: SLUG) {
    metaData {
      keyWords
      metaDescription
      metaTitle
      openGraphDescription
    }
  }
}
`


