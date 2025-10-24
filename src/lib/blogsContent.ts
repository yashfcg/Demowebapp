import { getApolloClient } from "./apolloClient";
import { QUERY_BLOG_POSTS } from "@/graphql/blogsQueries";

export interface BlogPost {
  blogText: string;
  topBlogImage: string;
}

interface BlogPostNode {
  blogpage: {
    blogText: string;
    topblogimage?: {
      node?: {
        mediaItemUrl?: string;
      };
    };
  };
}

export async function getBlogPosts(): Promise<BlogPost[] | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_BLOG_POSTS,
      fetchPolicy: "no-cache",
    });

    if (!data || !data.blogs?.nodes) {
      throw new Error("No blog posts found");
    }

    const blogPosts: BlogPost[] = data.blogs.nodes.map((node: BlogPostNode) => ({
      blogText: node.blogpage.blogText,
      topBlogImage: node.blogpage.topblogimage?.node?.mediaItemUrl || "",
    }));

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return null;
  }
}