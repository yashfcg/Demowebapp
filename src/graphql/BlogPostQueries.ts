import { gql } from "@apollo/client";


export const QUERY_BLOG_CARD_POSTS = gql`
  query NewQuery {
    blogPosts(first: 100) {
      nodes {
        slug
        revisionOf {
          node {
            id
          }
        }
        revisions {
          edges {
            node {
              id
            }
          }
        }
        preview {
          node {
            id
          }
        }
        blogposts {
          posttitle
          postsimage {
            node {
              mediaItemUrl
            }
          }
          postdesciption
          date
          fieldGroupName
        }
      }
    }
  }
`;