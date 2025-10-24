import { gql } from "@apollo/client";

export const QUERY_BLOG_POSTS = gql`
query NewQuery {
  blogs {
    nodes {
      blogpage {
        blogText
        fieldGroupName
        topblogimage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}`
