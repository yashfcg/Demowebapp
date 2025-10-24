'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  author: string;
  slug: string;
}

export default function BlogListWithPagination({ blogCards }: { blogCards: BlogPost[] }) {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogCards.length / postsPerPage);
  const currentPosts = blogCards.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === index + 1 ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}