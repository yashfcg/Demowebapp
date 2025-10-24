import { getSingleBlogPost } from "@/lib/singleBlogContent";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blogsContent";
import BlogBanner from "@/components/Blogs/BlogsBanner";
import Image from "next/image";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const {slug} = await params;

  if (!slug) return notFound();

  const [blogPosts, post] = await Promise.all([
    getBlogPosts(),
    getSingleBlogPost(slug),
  ]);

  if (!post) return notFound();
  console.log("Post Data:", post);
  console.log("Post Date:", post.postDate);
  console.log("Post Image URL:", post.postImageUrl);

  const BlogPage = blogPosts?.[0];
  const rawDate = post.postDate;
  const formattedDateObj = new Date(rawDate);
  const day = formattedDateObj.getDate();
  const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const month = monthNames[formattedDateObj.getMonth()];
  const year = formattedDateObj.getFullYear();
  const displayDate = `${day} ${month} ${year}`;


  return (
    <div>
      {BlogPage && (
        <BlogBanner image={BlogPage.topBlogImage} title={BlogPage.blogText} />
      )}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{post.postTitle}</h1>
        <span className="text-sm text-gray-600 italic">- by Flairdocs</span>
        <p className="pb-5 text-gray-500 mt-2 italic">
        {displayDate}
        </p>

        {post.postImageUrl && (
          <div className="my-6 rounded-md w-full h-[500px] relative overflow-hidden">
            <Image
              src={post.postImageUrl}
              alt={post.postTitle}
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.postDescription }}
        />
      </div>
    </div>
  );
}