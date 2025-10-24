"use client";


import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
  author: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  date,

  author,
  slug,
}: BlogCardProps) {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const month = monthNames[formattedDate.getMonth()];
  const year = formattedDate.getFullYear();
  const monthYear = `${month} ${year}`;

  return (
    <div className="max-w-sm min-h-[250px] bg-white p-4 rounded-lg shadow-md flex flex-col">
      {/* {imageUrl && (
        <div className="mb-2">
          <Image
            src={imageUrl}
            alt="Post"
            width={400}
            height={192}
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      )} */}

      <div className="flex flex-col flex-grow justify-between">
        <h1 className="text-lg font-semibold text-blue-600 mt-2 line-clamp-3">
          {title}
        </h1>

        <div className="flex items-center justify-between text-xs text-gray-500 italic mt-1 mb-2">
          <p>by {author}</p>
          <p>{day} {monthYear}</p>
        </div>

        <p className="text-sm text-gray-700 overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>

      <Link href={`/blogs/${slug}`} passHref>
        <button className="mt-3 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:cursor-pointer w-full">
          Continue Reading
        </button>
      </Link>
    </div>
  );
}