import { gql } from "@apollo/client";

export const QUERY_PRODUCT_BY_SLUG = gql`
query getProductBySlug ($slug: ID!){
  product(id: $slug , idType: SLUG) {
    productFields {
      heroBannerImage {
        node {
          sourceUrl
        }
      }
      benefits
      features
      productDescription
      benefitBackgroundImage {
          node {
            sourceUrl
          }
        }
    }
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
    title
    slug
  }
}
`
export const QUERY_PRODUCT_FOR_MENU = gql`
query getAllProductsMenu {
  products (where: {orderby: {field: DATE, order: ASC}}, first: 1000){
    nodes {
      title
      slug
      productFields {
        productDescriptionInMenu
      }
    }
  }
}
`

export const QUERY_PRODUCT_META_DATA = gql`
query getProductMetaData($slug: ID!) {
  product(id: $slug , idType: SLUG) {
    metaData {
      keyWords
      metaDescription
      metaTitle
      openGraphDescription
    }
  }
}
`