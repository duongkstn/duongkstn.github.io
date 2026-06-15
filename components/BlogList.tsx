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
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-[#6b7280] uppercase tracking-wider mb-4">
          Filter by Category
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? 'bg-[#6366f1] text-white'
                : 'bg-white text-[#1f2937] border border-[#e5e7eb] hover:border-[#6366f1]'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#6366f1] text-white'
                  : 'bg-white text-[#1f2937] border border-[#e5e7eb] hover:border-[#6366f1]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="space-y-8">
        {filteredBlogs.length === 0 ? (
          <p className="text-[#6b7280]">No blog posts found.</p>
        ) : (
          filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              className="pb-8 border-b border-[#e5e7eb] last:border-b-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider">
                  {blog.category}
                </span>
                <time className="text-xs text-[#6b7280]">
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="text-xl font-bold text-[#1f2937] hover:text-[#6366f1] transition-colors mb-2">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-[#6b7280] mb-4">{blog.description}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6366f1] hover:gap-3 transition-all"
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
