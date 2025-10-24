import BlogBanner from "@/components/Blogs/BlogsBanner";
import { getBlogPosts } from "@/lib/blogsContent";
import { getBlogCardList } from "@/lib/blogPostContent";
import BlogListWithPagination from "@/components/Blogs/BlogListWithPagination";

export default async function BlogPage() {
  // Fetch banner data
  const blogPosts = await getBlogPosts();

  // Fetch card data
  const blogCards = await getBlogCardList() ?? []; 

  if (!blogPosts || blogPosts.length === 0) {
    return <div>Blog posts are not available at the moment.</div>;
  }

  const BlogPage = blogPosts[0];
  const formattedBlogCards = blogCards.map((post) => ({
    title: post.postTitle,
    description: post.postDescription,
    imageUrl: post.postImageUrl,
    date: post.postDate,
    author: "Flairdocs",
    slug: post.postSlug,  
  }));

  return (
    <div>
      <BlogBanner
        image={BlogPage.topBlogImage}
        title={BlogPage.blogText}
      />

      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogCards?.map((post, index) => (
          <BlogCard
            key={index}
            title={post.postTitle}
            description={post.postDescription}
            imageUrl={post.postImageUrl}
            date={post.postDate}
            author="by Flairdocs"
          />
        ))}
      </div> */}
      <div className="container mx-auto px-4 py-8">
      <BlogListWithPagination blogCards={formattedBlogCards} />
    </div>
    </div>
  );
}