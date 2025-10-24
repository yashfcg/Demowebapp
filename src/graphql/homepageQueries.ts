import { gql } from "@apollo/client";

export const QUERY_CLIENT_LOGOS = gql`
  query getAllClientLogos {
  allClients(first: 100, where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
}
`;

export const QUERY_HERO_CONTENT = gql `
query heroContent {
  homepage(id: "home-page", idType: SLUG) {
    homePageFields {
      heroHeading
      heroPara
      herovideo {
        node {
          mediaItemUrl
        }
      }
      heroVideoposter {
        node {
          sourceUrl
        }
      }
      homePageBanner {
        node {
          sourceUrl
        }
      }
    }
  }
}
`
export const QUERY_HOME_META_DATA = gql `
query homepageMetaData {
  homepage(id: "home-page", idType: SLUG) {
    metaData {
      keyWords
      metaDescription
      metaTitle
      openGraphDescription
    }
  }
}
`
export const QUERY_HEADER_DATA = gql `
query headerData {
  header(id: "header-items", idType: SLUG) {
    headerfields {
      mainlogo {
        node {
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
export const QUERY_FOOTER_DATA = gql `
query FooterQuery {
  footer(id: "footer-items", idType: SLUG) {
    footerFields {
      address {
        address
        addressHeading
      }
      copyright
      flairsoft {
        logoHeading
        flairsoft_logo {
          node {
            sourceUrl
          }
        }
      }
      location {
        locationHeading
        locations
      }
      mail {
        display
        mailtoLink
      }
      telephone {
        telLink
        display
      }
      flairsoftFederal {
        flairsoftFederalLogo {
          node {
            sourceUrl
          }
        }
        flairsoftFederalLogoHeading
      }
    }
  }
}
`

export const QUERY_LATEST_TECH = gql `
query latestTechnologies  {
  latestTechnologies (first: 100, where: {orderby: {field: DATE, order: ASC}}) {
    nodes {
      title
      latestTechFields {
        techShowcasingImage {
          node {
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        description
        heading
      }
    }
  }
}
`