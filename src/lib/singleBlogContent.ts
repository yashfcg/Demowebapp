import { getApolloClient } from "./apolloClient";
import { QUERY_SINGLE_BLOG_POST } from "@/graphql/singleBlogPostQueries";

export interface SingleBlogPost {
  postTitle: string;
  postDescription: string;
  postImageUrl: string;
  postDate: string;
  postSlug: string;
  content: string;
}

interface RawBlogPost {
  slug?: string;
  date?: string;
  content?: string;
  blogposts?: {
    posttitle?: string;
    postdesciption?: string;
    date?: string;
    postsimage?: {
      node?: {
        mediaItemUrl?: string;
      };
    };
  };
}

export async function getSingleBlogPost(slug: string): Promise<SingleBlogPost | null> {
  try {
    const apolloClient = getApolloClient();

    const { data } = await apolloClient.query({
      query: QUERY_SINGLE_BLOG_POST,
      variables: { slug:slug },
      fetchPolicy: "no-cache",
    });

    const post: RawBlogPost = data?.blogPost;

    if (!post) {
      throw new Error("Blog post not found");
    }

    return {
      postTitle: post.blogposts?.posttitle || "",
      postDescription: post.blogposts?.postdesciption || "",
      postImageUrl: post.blogposts?.postsimage?.node?.mediaItemUrl || "",
      postDate:  post.date || "",
      postSlug: post.slug || "",
      content: post.content || "",
    };
  } catch (error) {
    console.error("Error fetching single blog post:", error);
    return null;
  }
}