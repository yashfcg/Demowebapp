import { getApolloClient } from "./apolloClient";
import { QUERY_BLOG_CARD_POSTS } from "@/graphql/BlogPostQueries";

export interface BlogPost {
  postTitle: string;
  postDescription: string;
  postImageUrl: string;
  postDate: string;
  postSlug: string; 
}

interface BlogPostNode {
  slug?: string; 
  blogposts?: {
    posttitle?: string;
    postdesciption?: string;
    postsimage?: {
      node?: {
        mediaItemUrl?: string;
      };
    };
    date?: string;
  };
}

export async function getBlogCardList(): Promise<BlogPost[] | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_BLOG_CARD_POSTS,
      fetchPolicy: "no-cache",
    });

    if (!data || !data?.blogPosts?.nodes) {
      throw new Error("No blog posts found");
    }

    const blogPosts: BlogPost[] = data.blogPosts.nodes.map((node: BlogPostNode) => ({
      postTitle: node.blogposts?.posttitle || "",
      postDescription: node.blogposts?.postdesciption || "",
      postImageUrl: node.blogposts?.postsimage?.node?.mediaItemUrl || "",
      postDate: node.blogposts?.date || "",
      postSlug: node.slug || "", // ✅ Include slug
    }));

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog card list:", error);
    return null;
  }
}