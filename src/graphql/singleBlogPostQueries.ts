import { gql } from "@apollo/client";

export const QUERY_SINGLE_BLOG_POST = gql`
  query BlogPostBySlug($slug: ID!) {
    blogPost(id: $slug, idType: SLUG) {
      title
      slug
      date
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      blogposts {
        posttitle
        postdesciption
        date  
        postsimage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;