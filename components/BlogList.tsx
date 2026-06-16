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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredAllButton, setHoveredAllButton] = useState(false);
  const [hoveredCategoryButton, setHoveredCategoryButton] = useState<string | null>(null);
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [hoveredReadMoreLink, setHoveredReadMoreLink] = useState<string | null>(null);
  const [focusedAllButton, setFocusedAllButton] = useState(false);
  const [focusedCategory, setFocusedCategory] = useState<string | null>(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div>
      {/* Category Filter */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
          fontSize: '0.75rem',
          fontWeight: 'bold',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '1rem'
        }}>
          Filter by Category
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: '0.625rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
              transition: 'all 0.3s ease-in-out',
              border: selectedCategory === null ? 'none' : '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: selectedCategory === null ? '#10b981' : (hoveredAllButton ? '#f9fafb' : 'white'),
              color: selectedCategory === null ? 'white' : '#1f2937',
              borderColor: hoveredAllButton ? '#10b981' : '#e5e7eb',
              outline: focusedAllButton ? '2px solid #10b981' : 'none',
              ...(selectedCategory === null && {
                boxShadow: '0 4px 8px rgba(16, 185, 129, 0.25)'
              })
            }}
            onMouseEnter={() => setHoveredAllButton(selectedCategory !== null)}
            onMouseLeave={() => setHoveredAllButton(false)}
            onFocus={() => setFocusedAllButton(true)}
            onBlur={() => setFocusedAllButton(false)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.625rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'all 0.3s ease-in-out',
                border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category ? '#10b981' : (hoveredCategoryButton === category ? '#f9fafb' : 'white'),
                color: selectedCategory === category ? 'white' : '#1f2937',
                borderColor: hoveredCategoryButton === category ? '#10b981' : '#e5e7eb',
                outline: focusedCategory === category ? '2px solid #10b981' : 'none',
                ...(selectedCategory === category && {
                  boxShadow: '0 4px 8px rgba(16, 185, 129, 0.25)'
                })
              }}
              onMouseEnter={() => setHoveredCategoryButton(selectedCategory !== category ? category : null)}
              onMouseLeave={() => setHoveredCategoryButton(null)}
              onFocus={() => setFocusedCategory(category)}
              onBlur={() => setFocusedCategory(null)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {filteredBlogs.length === 0 ? (
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>No blog posts found.</p>
        ) : (
          filteredBlogs.map((blog) => (
            <article
              key={blog.slug}
              style={{
                backgroundColor: hoveredCard === blog.slug ? '#f9fafb' : 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: hoveredCard === blog.slug ? '0 12px 24px rgba(0, 0, 0, 0.12)' : '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                transform: hoveredCard === blog.slug ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard(blog.slug)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: '#1e40af',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  backgroundColor: '#dbeafe',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px'
                }}>
                  {blog.category}
                </span>
                <time
                  dateTime={blog.date}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#9ca3af'
                  }}>
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <Link href={`/blog/${blog.slug}`} style={{ textDecoration: 'none' }}>
                <h3
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: hoveredTitle === blog.slug ? '#10b981' : '#1f2937',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease-in-out'
                  }}
                  onMouseEnter={() => setHoveredTitle(blog.slug)}
                  onMouseLeave={() => setHoveredTitle(null)}
                >
                  {blog.title}
                </h3>
              </Link>
              <p style={{
                color: '#6b7280',
                margin: '1rem 0 1.5rem 0',
                fontSize: '1.125rem',
                lineHeight: '1.8'
              }}>
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: hoveredReadMoreLink === blog.slug ? '0.75rem' : '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  color: hoveredReadMoreLink === blog.slug ? '#10b981' : '#6366f1',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={() => setHoveredReadMoreLink(blog.slug)}
                onMouseLeave={() => setHoveredReadMoreLink(null)}
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
