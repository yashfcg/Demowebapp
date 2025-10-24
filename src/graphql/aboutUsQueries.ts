import { gql } from "@apollo/client";

export const QUERY_MANAGEMENT = gql`
query getManagement {
  managements(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            width
            height
          }
        }
      }
      managementFields {
        bio
        position
        linkedin
      }
    }
  }
}
`

export const QUERY_ABOUT_US_META_DATA = gql `
query aboutUsMetaData {
  aboutUsPage(id: "about-us", idType: SLUG) {
    metaData {
      keyWords
      metaDescription
      metaTitle
      openGraphDescription
    }
  }
}
`
export const QUERY_ABOUT_US = gql`
query NewQuery {
  aboutUsPage(id: "about-us", idType: SLUG) {
    featuredImage {
      node {
        altText
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
    aboutUsFields {
      bannerText
      companyDescription
      mission
      mottoOnAboutUsPage
      vision
    }
  }
}
`


export const QUERY_TECH_PARTNERS = gql`
query getTechnologyPartners {
  technologyPartners(where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      featuredImage {
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
`

