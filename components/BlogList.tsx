'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Blog } from '@/lib/types';

interface BlogListProps {
  blogs: Blog[];
  categories: string[];
}

export default function BlogList({ blogs, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-12">
        <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-4">
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-[#6366f1] text-white shadow-md'
                : 'bg-white text-[#1f2937] border border-[#e5e7eb] hover:border-[#6366f1] hover:bg-gray-50'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-white text-[#1f2937] border border-[#e5e7eb] hover:border-[#6366f1] hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="space-y-10">
        {filteredBlogs.length === 0 ? (
          <p className="text-[#6b7280] text-lg">No blog posts found.</p>
        ) : (
          filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="pb-10 border-b border-[#e5e7eb] last:border-b-0 hover:bg-gray-50 transition-colors p-4 -mx-4 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold text-[#6366f1] uppercase tracking-widest bg-[#f0f0ff] px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <time className="text-xs font-medium text-[#9ca3af]">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="text-2xl font-bold text-[#1f2937] hover:text-[#6366f1] transition-colors mb-3">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-[#6b7280] mb-5 text-lg leading-relaxed">{blog.description}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#6366f1] hover:gap-3 transition-all uppercase tracking-wider"
              >
                Read More <span>→</span>
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
