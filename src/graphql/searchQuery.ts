import { gql } from "@apollo/client";

export const QUERY_SEARCH_POSTS = gql `
query SearchPosts($searchTerm: String!) {
  aboutUsPages(where: {search: $searchTerm}) {
    nodes {
      title
      content : aboutUsFields {
        companyDescription
      }
      slug
    }
  }
  caseStudies(where: {search: $searchTerm}) {
    nodes {
      title
      content : caseStudyField{
        bannerText
      }
      slug
    }
  }
  
  homepages(where: {search: $searchTerm}) {
    nodes {
      title
      content : homePageFields{
        heroPara
      }
      slug
    }
  }
  industries(where: {search: $searchTerm}) {
    nodes {
      title
      content : industryFields{
        bannerText
      }
      slug
    }
  }
  
  products(where: {search: $searchTerm}) {
    nodes {
      title
      slug
      content: productFields {
         productDescription
      }
    }
  }
  latestTechnologies(where: {search: $searchTerm}) {
    nodes {
      title
    }
  }
  managements(where: {search: $searchTerm}) {
    nodes {
      title
    }
  }
}
`