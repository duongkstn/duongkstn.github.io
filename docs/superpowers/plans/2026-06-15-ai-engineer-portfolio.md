# AI Engineer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern minimal AI engineer portfolio (duongkstn.github.io) with a live markdown blog editor, static export to GitHub Pages, and a dashboard layout featuring a sidebar profile card and blog content area.

**Architecture:** Local Next.js dev server with a browser-based markdown editor for writing blogs (stored as `.md` files). Blog posts use YAML frontmatter for metadata (title, date, category, tags). A static export step generates complete HTML/CSS/JS that deploys directly to GitHub Pages with zero server dependencies.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS, gray-matter (frontmatter parsing), markdown-it (markdown rendering), GitHub Pages (static hosting)

---

## File Structure

```
duongdn8-profile/
├── /app
│   ├── layout.tsx              # Root layout with sidebar profile + main content
│   ├── page.tsx                # Homepage (featured blogs)
│   ├── /blog
│   │   ├── page.tsx            # Blog listing with category filters
│   │   └── /[slug]
│   │       └── page.tsx        # Individual blog post
│   ├── /resume
│   │   └── page.tsx            # Resume/CV page
│   └── /editor
│       └── page.tsx            # Live markdown editor (dev only)
├── /components
│   ├── ProfileCard.tsx         # Sidebar profile with photo, bio, links
│   ├── BlogEditor.tsx          # Live markdown editor with preview
│   ├── BlogList.tsx            # Blog listing with category filter
│   ├── BlogPost.tsx            # Rendered blog post
│   └── Navbar.tsx              # Mobile navigation
├── /public
│   ├── /blogs                  # Markdown blog files (2026-06-15-slug.md)
│   ├── /images                 # Profile photo and blog images
│   └── profile.jpg             # Profile photo (placeholder)
├── /lib
│   ├── blog.ts                 # Blog utilities (read, parse, filter)
│   ├── markdown.ts             # Markdown to HTML conversion
│   └── types.ts                # TypeScript types (Blog, BlogMetadata)
├── /styles
│   └── globals.css             # Global styles (Tailwind setup)
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js config (static export)
└── README.md                   # Setup instructions
```

---

## Tasks

### Task 1: Initialize Next.js Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.js`
- Create: `tailwind.config.js`
- Create: `.gitignore`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /home/duongdn8/profile
npx create-next-app@latest . --typescript --tailwind --eslint --no-git
# When prompted: use App Router, use src/ directory (No), use Tailwind (Yes), use TypeScript (Yes)
```

- [ ] **Step 2: Install markdown dependencies**

```bash
npm install gray-matter markdown-it rehype-react remark remark-html
npm install --save-dev @types/markdown-it
```

- [ ] **Step 3: Verify installation**

```bash
npm run dev
# Expected: Server running on http://localhost:3000
# Then Ctrl+C to stop
```

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json tsconfig.json next.config.js tailwind.config.js .gitignore
git commit -m "init: create next.js project with tailwind and markdown dependencies"
```

---

### Task 2: Configure Next.js for Static Export

**Files:**
- Modify: `next.config.js`

- [ ] **Step 1: Update next.config.js for static export**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Image Optimization
  },
  basePath: '', // Set to '/ai-portfolio' if deploying to a subdirectory
  trailingSlash: true, // Important for GitHub Pages routing
};

module.exports = nextConfig;
```

- [ ] **Step 2: Update package.json with export script**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next build && next export",
    "start": "next start"
  }
}
```

- [ ] **Step 3: Test build configuration**

```bash
npm run build
# Expected: .next folder created successfully
# Then delete .next folder: rm -rf .next
```

- [ ] **Step 4: Commit**

```bash
git add next.config.js package.json
git commit -m "config: enable static export for github pages"
```

---

### Task 3: Create TypeScript Types and Utilities

**Files:**
- Create: `lib/types.ts`
- Create: `lib/blog.ts`
- Create: `lib/markdown.ts`

- [ ] **Step 1: Create types file**

```typescript
// lib/types.ts

export interface BlogMetadata {
  title: string;
  date: string;
  category: string;
  description: string;
  tags?: string[];
}

export interface Blog extends BlogMetadata {
  slug: string;
  content: string;
}
```

- [ ] **Step 2: Create blog utilities**

```typescript
// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Blog, BlogMetadata } from './types';

const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');

export function getAllBlogs(): Blog[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogsDirectory);
  const blogs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(blogsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      const slug = file.replace(/\.md$/, '');

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString().split('T')[0],
        category: data.category || 'General',
        description: data.description || '',
        tags: data.tags || [],
        content,
      };
    });

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | null {
  const filePath = path.join(blogsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString().split('T')[0],
    category: data.category || 'General',
    description: data.description || '',
    tags: data.tags || [],
    content,
  };
}

export function getBlogsByCategory(category: string): Blog[] {
  return getAllBlogs().filter((blog) => blog.category === category);
}

export function getCategories(): string[] {
  const blogs = getAllBlogs();
  const categories = new Set(blogs.map((blog) => blog.category));
  return Array.from(categories).sort();
}
```

- [ ] **Step 3: Create markdown utility**

```typescript
// lib/markdown.ts
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export function markdownToHtml(markdown: string): string {
  return md.render(markdown);
}
```

- [ ] **Step 4: Verify types compile**

```bash
npx tsc --noEmit
# Expected: No errors
```

- [ ] **Step 5: Commit**

```bash
git add lib/types.ts lib/blog.ts lib/markdown.ts
git commit -m "feat: add blog types and utilities"
```

---

### Task 4: Create Global Styles with Tailwind

**Files:**
- Create: `styles/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create global styles**

```css
/* styles/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #fafafa;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Source Sans Pro',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Courier New', monospace;
  background-color: #f3f4f6;
  padding: 2px 6px;
  border-radius: 3px;
}

pre {
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 16px 0;
}

a {
  color: #6366f1;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #4f46e5;
  text-decoration: underline;
}

/* Modern Minimal Color Scheme */
:root {
  --color-primary: #6366f1; /* Indigo */
  --color-secondary: #8b5cf6; /* Purple */
  --color-bg-light: #fafafa; /* Off-white */
  --color-bg-white: #ffffff;
  --color-text-dark: #1f2937; /* Dark gray */
  --color-text-light: #6b7280; /* Light gray */
  --color-border: #e5e7eb; /* Border gray */
}
```

- [ ] **Step 2: Create root layout**

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Duong Nguyen | AI Engineer',
  description: 'AI Engineer & Software Engineer Portfolio',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fafafa]">
          {/* Sidebar will be added in Task 5 */}
          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify layout renders**

```bash
npm run dev
# Open http://localhost:3000
# Expected: Blank page with light background
# Ctrl+C to stop
```

- [ ] **Step 4: Commit**

```bash
git add styles/globals.css app/layout.tsx
git commit -m "style: add global styles and root layout with tailwind"
```

---

### Task 5: Create ProfileCard Component

**Files:**
- Create: `components/ProfileCard.tsx`

- [ ] **Step 1: Create ProfileCard component**

```typescript
// components/ProfileCard.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <aside className="hidden md:flex flex-col w-80 bg-white border-r border-[#e5e7eb] p-8 sticky top-0 h-screen overflow-y-auto">
      {/* Profile Photo */}
      <div className="mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Duong Nguyen"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#1f2937] mb-1">Duong Nguyen</h1>
        <p className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider">
          AI Engineer · Software Engineer
        </p>
      </div>

      {/* Bio */}
      <p className="text-sm text-[#6b7280] leading-relaxed mb-6">
        Building AI systems that work in production. Passionate about LLMs, machine learning, and clean code.
      </p>

      {/* Divider */}
      <div className="h-px bg-[#e5e7eb] mb-6"></div>

      {/* Links */}
      <nav className="space-y-3 flex-1">
        <Link
          href="/"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/resume"
          className="block text-sm font-medium text-[#1f2937] hover:text-[#6366f1] transition-colors"
        >
          Resume
        </Link>
      </nav>

      {/* Social Links */}
      <div className="space-y-3 pt-6 border-t border-[#e5e7eb]">
        <a
          href="https://github.com/duongkstn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> GitHub
        </a>
        <a
          href="https://linkedin.com/in/duong"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> LinkedIn
        </a>
        <a
          href="mailto:duongdn8@fpt.com"
          className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#6366f1] transition-colors"
        >
          <span>→</span> Email
        </a>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Update layout to include ProfileCard**

```typescript
// app/layout.tsx (updated)
import type { Metadata } from 'next';
import ProfileCard from '@/components/ProfileCard';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Duong Nguyen | AI Engineer',
  description: 'AI Engineer & Software Engineer Portfolio',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fafafa]">
          <ProfileCard />
          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create placeholder profile image**

```bash
mkdir -p public/images
# Add a placeholder image at public/images/profile.jpg (you can use any JPG for now)
# For testing, create a simple placeholder:
# Option: Download from placeholder service or add your own image
```

- [ ] **Step 4: Test ProfileCard renders**

```bash
npm run dev
# Open http://localhost:3000
# Expected: Sidebar visible on desktop with profile card
# Ctrl+C to stop
```

- [ ] **Step 5: Commit**

```bash
git add components/ProfileCard.tsx app/layout.tsx
git commit -m "feat: add sidebar profile card component"
```

---

### Task 6: Create BlogPost Component

**Files:**
- Create: `components/BlogPost.tsx`

- [ ] **Step 1: Create BlogPost component**

```typescript
// components/BlogPost.tsx
import { markdownToHtml } from '@/lib/markdown';
import { Blog } from '@/lib/types';

interface BlogPostProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogPostProps) {
  const htmlContent = markdownToHtml(blog.content);

  return (
    <article className="max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-[#6366f1] uppercase tracking-wider">
            {blog.category}
          </span>
          <time className="text-xs text-[#6b7280]">
            {new Date(blog.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-[#1f2937] mb-4">
          {blog.title}
        </h1>
        <p className="text-lg text-[#6b7280]">{blog.description}</p>
      </header>

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-[#6366f1] bg-[#f3f4f6] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div
        className="prose prose-invert max-w-none text-[#1f2937]"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}

// Custom CSS for prose styling (add to globals.css)
```

- [ ] **Step 2: Update globals.css for prose styling**

Add to `styles/globals.css`:

```css
/* Prose styles for blog content */
.prose {
  line-height: 1.75;
}

.prose h2 {
  font-size: 1.875rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
  color: #1f2937;
}

.prose p {
  margin-bottom: 1rem;
  color: #374151;
}

.prose ul,
.prose ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose a {
  color: #6366f1;
  text-decoration: underline;
}

.prose a:hover {
  color: #4f46e5;
}

.prose blockquote {
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  margin-left: 0;
  margin-bottom: 1rem;
  color: #6b7280;
  font-style: italic;
}

.prose code {
  background-color: #f3f4f6;
  color: #1f2937;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9em;
}

.prose pre {
  background-color: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.prose pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
  border-radius: 0;
}
```

- [ ] **Step 3: Verify component compiles**

```bash
npx tsc --noEmit
# Expected: No errors
```

- [ ] **Step 4: Commit**

```bash
git add components/BlogPost.tsx styles/globals.css
git commit -m "feat: add blog post component with prose styling"
```

---

### Task 7: Create BlogList Component

**Files:**
- Create: `components/BlogList.tsx`

- [ ] **Step 1: Create BlogList component**

```typescript
// components/BlogList.tsx
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
```

- [ ] **Step 2: Verify component compiles**

```bash
npx tsc --noEmit
# Expected: No errors
```

- [ ] **Step 3: Commit**

```bash
git add components/BlogList.tsx
git commit -m "feat: add blog list component with category filtering"
```

---

### Task 8: Create Homepage (Index Page)

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create homepage**

```typescript
// app/page.tsx
import Link from 'next/link';
import BlogList from '@/components/BlogList';
import { getAllBlogs, getCategories } from '@/lib/blog';

export const metadata = {
  title: 'Home | Duong Nguyen',
  description: 'AI Engineer & Software Engineer - Portfolio & Blog',
};

export default function Home() {
  const allBlogs = getAllBlogs();
  const categories = getCategories();
  const featuredBlogs = allBlogs.slice(0, 5); // Show 5 latest blogs

  return (
    <div className="max-w-4xl">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">
          Welcome to my digital space
        </h1>
        <p className="text-lg text-[#6b7280] mb-6">
          I explore AI, machine learning, and software engineering. Here you'll find my thoughts on LLMs, production systems, and building things that matter.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white font-medium rounded-lg hover:bg-[#4f46e5] transition-colors"
        >
          View All Posts <span>→</span>
        </Link>
      </section>

      {/* Featured Posts */}
      <section>
        <h2 className="text-2xl font-bold text-[#1f2937] mb-8">Latest Posts</h2>
        <BlogList blogs={featuredBlogs} categories={categories} />
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Create sample blog post**

```bash
mkdir -p public/blogs
```

Create `public/blogs/2026-06-15-getting-started.md`:

```markdown
---
title: Getting Started with This Portfolio
date: 2026-06-15
category: Meta
description: An overview of how this portfolio works and how to use it.
tags:
  - portfolio
  - nextjs
  - markdown
---

# Getting Started

Welcome to my portfolio! This is a simple markdown-based blog system built with Next.js.

## How It Works

Each blog post is written in Markdown with YAML frontmatter. The frontmatter contains:

- **title**: The blog post title
- **date**: Publication date (YYYY-MM-DD)
- **category**: Category for filtering
- **description**: Short summary
- **tags**: Optional tags

## Writing a New Post

1. Create a new `.md` file in `public/blogs/`
2. Add frontmatter at the top
3. Write your post in Markdown
4. The site automatically picks it up!

## Features

- Live markdown editor (local development)
- Category-based filtering
- Responsive design
- Static export to GitHub Pages

Happy blogging!
```

- [ ] **Step 3: Test homepage**

```bash
npm run dev
# Open http://localhost:3000
# Expected: Homepage with hero section and featured blog
# Ctrl+C to stop
```

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx public/blogs/2026-06-15-getting-started.md
git commit -m "feat: create homepage with featured posts"
```

---

### Task 9: Create Blog Listing Page

**Files:**
- Create: `app/blog/page.tsx`

- [ ] **Step 1: Create blog listing page**

```typescript
// app/blog/page.tsx
import BlogList from '@/components/BlogList';
import { getAllBlogs, getCategories } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Duong Nguyen',
  description: 'Articles on AI, machine learning, and software engineering',
};

export default function BlogPage() {
  const blogs = getAllBlogs();
  const categories = getCategories();

  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1f2937] mb-4">
          Blog
        </h1>
        <p className="text-lg text-[#6b7280]">
          Thoughts on AI, machine learning, and software engineering.
        </p>
      </header>

      <BlogList blogs={blogs} categories={categories} />
    </div>
  );
}
```

- [ ] **Step 2: Test blog listing page**

```bash
npm run dev
# Open http://localhost:3000/blog
# Expected: Blog listing page with all posts and category filters
# Ctrl+C to stop
```

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: create blog listing page with filters"
```

---

### Task 10: Create Dynamic Blog Post Page

**Files:**
- Create: `app/blog/[slug]/page.tsx`

- [ ] **Step 1: Create dynamic blog post page**

```typescript
// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { getBlogBySlug, getAllBlogs } from '@/lib/blog';

export const metadata = {
  title: 'Blog Post | Duong Nguyen',
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="max-w-4xl">
      <BlogPost blog={blog} />

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-[#e5e7eb]">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#6366f1] hover:gap-3 transition-all font-medium"
        >
          <span>←</span> Back to all posts
        </a>
      </nav>
    </div>
  );
}
```

- [ ] **Step 2: Test blog post page**

```bash
npm run dev
# Open http://localhost:3000/blog/2026-06-15-getting-started
# Expected: Individual blog post renders with markdown content
# Ctrl+C to stop
```

- [ ] **Step 3: Commit**

```bash
git add app/blog/[slug]/page.tsx
git commit -m "feat: create dynamic blog post page with static params"
```

---

### Task 11: Create Resume Page

**Files:**
- Create: `app/resume/page.tsx`

- [ ] **Step 1: Create resume page**

```typescript
// app/resume/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Duong Nguyen',
  description: 'Resume and CV for Duong Nguyen',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#1f2937] mb-2">Duong Nguyen</h1>
        <p className="text-lg text-[#6366f1] font-semibold mb-4">
          AI Engineer · Software Engineer
        </p>
        <p className="text-[#6b7280] mb-6">
          Email:{' '}
          <a href="mailto:duongdn8@fpt.com" className="text-[#6366f1]">
            duongdn8@fpt.com
          </a>{' '}
          | GitHub:{' '}
          <a
            href="https://github.com/duongkstn"
            className="text-[#6366f1]"
            target="_blank"
            rel="noopener noreferrer"
          >
            duongkstn
          </a>
        </p>
      </header>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">About</h2>
        <p className="text-[#6b7280] leading-relaxed">
          AI engineer passionate about building production-ready machine learning systems. Experienced in LLMs, deep learning, and full-stack software engineering. Strong foundation in Python, distributed systems, and software architecture.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Experience</h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                AI Engineer / ML Engineer
              </h3>
              <span className="text-sm text-[#6b7280]">2021 - Present</span>
            </div>
            <p className="text-[#6366f1] font-medium mb-2">Your Company</p>
            <ul className="text-[#6b7280] space-y-1 ml-4">
              <li>• Built and deployed production ML models using Python and PyTorch</li>
              <li>• Developed LLM-based applications with prompt engineering and fine-tuning</li>
              <li>• Optimized model inference performance and reduced latency by 40%</li>
            </ul>
          </div>

          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[#1f2937]">
                Software Engineer
              </h3>
              <span className="text-sm text-[#6b7280]">2019 - 2021</span>
            </div>
            <p className="text-[#6366f1] font-medium mb-2">Startup / Company</p>
            <ul className="text-[#6b7280] space-y-1 ml-4">
              <li>• Developed full-stack web applications using React and Node.js</li>
              <li>• Designed and implemented REST APIs with proper architecture</li>
              <li>• Mentored junior developers on best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Python',
            'PyTorch',
            'TensorFlow',
            'LLMs',
            'React',
            'Node.js',
            'TypeScript',
            'PostgreSQL',
            'Docker',
            'AWS',
            'Git',
            'Machine Learning',
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 bg-white border border-[#e5e7eb] rounded-lg text-sm font-medium text-[#1f2937]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#1f2937] mb-4">Education</h2>
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-[#1f2937]">
              Bachelor of Science in Computer Science
            </h3>
            <span className="text-sm text-[#6b7280]">Graduation Year</span>
          </div>
          <p className="text-[#6366f1] font-medium">University Name</p>
        </div>
      </section>

      {/* Download Section */}
      <section className="border-t border-[#e5e7eb] pt-8">
        <p className="text-[#6b7280] mb-4">
          For a downloadable PDF version, please{' '}
          <a href="mailto:duongdn8@fpt.com" className="text-[#6366f1] font-medium">
            contact me
          </a>
          .
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6366f1] hover:gap-3 transition-all font-medium"
        >
          <span>←</span> Back home
        </Link>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Test resume page**

```bash
npm run dev
# Open http://localhost:3000/resume
# Expected: Resume page displays properly
# Ctrl+C to stop
```

- [ ] **Step 3: Commit**

```bash
git add app/resume/page.tsx
git commit -m "feat: create resume page with experience and skills"
```

---

### Task 12: Create Live Markdown Editor (Development Only)

**Files:**
- Create: `app/editor/page.tsx`
- Create: `components/BlogEditor.tsx`

- [ ] **Step 1: Create BlogEditor component**

```typescript
// components/BlogEditor.tsx
'use client';

import { useState, useEffect } from 'react';
import { markdownToHtml } from '@/lib/markdown';

interface EditorState {
  title: string;
  date: string;
  category: string;
  description: string;
  tags: string;
  content: string;
}

export default function BlogEditor() {
  const [state, setState] = useState<EditorState>({
    title: 'New Post',
    date: new Date().toISOString().split('T')[0],
    category: 'General',
    description: '',
    tags: '',
    content: '# Hello\n\nStart typing...',
  });

  const [htmlPreview, setHtmlPreview] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setHtmlPreview(markdownToHtml(state.content));
  }, [state.content]);

  const handleSave = async () => {
    const slug = state.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');

    const filename = `${state.date}-${slug}`;

    const frontmatter = `---
title: ${state.title}
date: ${state.date}
category: ${state.category}
description: ${state.description}
tags:
${state.tags
  .split(',')
  .map((tag) => `  - ${tag.trim()}`)
  .join('\n')}
---

${state.content}`;

    try {
      const response = await fetch('/api/save-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filename,
          content: frontmatter,
        }),
      });

      if (response.ok) {
        setStatus(`✓ Saved as ${filename}.md`);
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('✗ Failed to save');
      }
    } catch (error) {
      setStatus('✗ Error saving');
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Metadata Form */}
      <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#1f2937] mb-4">Metadata</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <input
            type="date"
            value={state.date}
            onChange={(e) => setState({ ...state, date: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <input
            type="text"
            placeholder="Category"
            value={state.category}
            onChange={(e) =>
              setState({ ...state, category: e.target.value })
            }
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
          <textarea
            placeholder="Short description"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1] resize-none"
            rows={3}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={state.tags}
            onChange={(e) => setState({ ...state, tags: e.target.value })}
            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1]"
          />
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-4">
            Markdown Content
          </h2>
          <textarea
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
            className="w-full h-96 px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#6366f1] resize-none font-mono text-sm"
          />
        </div>

        {/* Preview */}
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-6">
          <h2 className="text-lg font-semibold text-[#1f2937] mb-4">Preview</h2>
          <div
            className="prose prose-invert max-w-none h-96 overflow-y-auto text-[#1f2937]"
            dangerouslySetInnerHTML={{ __html: htmlPreview }}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-[#6366f1] text-white font-medium rounded-lg hover:bg-[#4f46e5] transition-colors"
        >
          Save Blog Post
        </button>
        {status && <span className="text-sm text-[#6b7280]">{status}</span>}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create editor page**

```typescript
// app/editor/page.tsx
import BlogEditor from '@/components/BlogEditor';

export const metadata = {
  title: 'Blog Editor | Duong Nguyen',
};

export default function EditorPage() {
  return (
    <div className="max-w-6xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#1f2937] mb-2">Blog Editor</h1>
        <p className="text-[#6b7280]">
          Create and edit blog posts. New posts are saved to{' '}
          <code className="bg-[#f3f4f6] px-2 py-1 rounded">public/blogs/</code>
        </p>
      </header>

      <BlogEditor />
    </div>
  );
}
```

- [ ] **Step 3: Create API route for saving blogs**

```typescript
// app/api/save-blog/route.ts
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { filename, content } = await request.json();

    if (!filename || !content) {
      return NextResponse.json(
        { error: 'Missing filename or content' },
        { status: 400 }
      );
    }

    const blogsDir = join(process.cwd(), 'public', 'blogs');

    // Create directory if it doesn't exist
    if (!existsSync(blogsDir)) {
      mkdirSync(blogsDir, { recursive: true });
    }

    const filepath = join(blogsDir, `${filename}.md`);
    writeFileSync(filepath, content, 'utf-8');

    return NextResponse.json(
      { message: 'Blog saved successfully', filepath },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving blog:', error);
    return NextResponse.json(
      { error: 'Failed to save blog' },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 4: Test editor**

```bash
npm run dev
# Open http://localhost:3000/editor
# Expected: Editor page with metadata form, markdown editor, and preview
# Write a test post and click "Save Blog Post"
# Check that it appears in /blog and /
# Ctrl+C to stop
```

- [ ] **Step 5: Commit**

```bash
git add components/BlogEditor.tsx app/editor/page.tsx app/api/save-blog/route.ts
git commit -m "feat: add live markdown editor with preview and save api"
```

---

### Task 13: Test Static Export

**Files:**
- Verify: `out/` folder (generated)

- [ ] **Step 1: Build and export static site**

```bash
npm run export
# Expected: Successful build, "out" folder created with static files
```

- [ ] **Step 2: Verify exported site structure**

```bash
ls -la out/
# Expected: See index.html, blog/, resume/, etc.
```

- [ ] **Step 3: Serve exported site locally**

```bash
npx serve out/
# Expected: Server running, you can preview the static site
# Test navigation and blog posts work
```

- [ ] **Step 4: Commit**

```bash
git add .gitignore  # Make sure .next and out are ignored
git commit -m "test: verify static export works correctly"
```

---

### Task 14: Create GitHub Pages Deployment Instructions

**Files:**
- Create: `DEPLOY.md`
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deployment guide**

```markdown
# Deployment to GitHub Pages

## One-Time Setup

1. Create a new GitHub repository named `duongkstn.github.io`
2. Clone this repo:
   ```bash
   git clone https://github.com/duongkstn/duongkstn-profile.git
   cd duongkstn-profile
   ```

3. Set up git remote:
   ```bash
   git remote add origin https://github.com/duongkstn/duongkstn.github.io.git
   git branch -M main
   git push -u origin main
   ```

## Deploying Your Site

### Manual Deployment

1. Build and export:
   ```bash
   npm run export
   ```

2. Copy exported files to gh-pages branch:
   ```bash
   git checkout gh-pages || git checkout --orphan gh-pages
   rm -rf * .gitignore
   cp -r out/* .
   cp out/.* . 2>/dev/null || true
   git add -A
   git commit -m "deploy: update site"
   git push origin gh-pages
   ```

3. Switch back to main:
   ```bash
   git checkout main
   ```

### GitHub Actions (Recommended)

The workflow in `.github/workflows/deploy.yml` automatically builds and deploys on every push to main.

1. Go to your repository Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `gh-pages` branch
4. Push to main:
   ```bash
   git add .
   git commit -m "your changes"
   git push origin main
   ```

Site will be live at `https://duongkstn.github.io`
```

Save as `DEPLOY.md`

- [ ] **Step 2: Create GitHub Actions workflow**

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build and export
        run: npm run export

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

- [ ] **Step 3: Create GitHub Pages deployment checklist**

```bash
mkdir -p .github/workflows
```

- [ ] **Step 4: Commit**

```bash
git add DEPLOY.md .github/workflows/deploy.yml
git commit -m "docs: add deployment guide and github actions workflow"
```

---

### Task 15: Final Polish and Documentation

**Files:**
- Create: `README.md`
- Verify: All components working together

- [ ] **Step 1: Create README**

```markdown
# AI Engineer Portfolio

A modern, minimal portfolio website built with Next.js, Tailwind CSS, and Markdown.

**Live Site:** https://duongkstn.github.io  
**Local Dev:** http://localhost:3000

## Features

- ✨ Modern Minimal design (clean, professional)
- 📝 Live markdown blog editor (local dev)
- 📂 Blog organization by date and category
- 🎨 Responsive design (mobile + desktop)
- 📄 Static export to GitHub Pages
- ⚡ Zero server dependencies in production

## Tech Stack

- **Framework:** Next.js 14 (React + Server Components)
- **Styling:** Tailwind CSS
- **Markdown:** gray-matter + markdown-it
- **Hosting:** GitHub Pages (static)

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Writing Blog Posts

1. Go to http://localhost:3000/editor
2. Fill in metadata (title, date, category, tags)
3. Write content in markdown
4. Click "Save Blog Post"
5. Post appears in /blog automatically

### Deploying to GitHub Pages

See [DEPLOY.md](DEPLOY.md) for detailed instructions.

Quick deploy:
```bash
npm run export
git add out/
git commit -m "deploy: update site"
git push
```

## Project Structure

```
├── /app              # Next.js app router pages
├── /components       # React components (ProfileCard, BlogList, etc.)
├── /lib              # Utilities (blog reading, markdown parsing)
├── /public
│   ├── /blogs        # Markdown blog files
│   └── /images       # Images (profile photo, blog images)
├── /styles           # Global CSS
└── package.json
```

## Customization

### Edit Profile Info
- `components/ProfileCard.tsx` — Update name, bio, links
- `public/images/profile.jpg` — Replace with your photo

### Change Colors
- `styles/globals.css` — Modify CSS custom properties
- `tailwind.config.js` — Update Tailwind theme

### Add Pages
- Create new files in `/app` directory
- Next.js automatically creates routes

## License

MIT
```

Save as `README.md`

- [ ] **Step 2: Full end-to-end test**

```bash
# Start fresh
npm run dev &

# Test homepage
curl http://localhost:3000 | grep -q "Welcome" && echo "✓ Homepage works"

# Test blog page
curl http://localhost:3000/blog | grep -q "Blog" && echo "✓ Blog page works"

# Test resume page
curl http://localhost:3000/resume | grep -q "Resume" && echo "✓ Resume works"

# Test editor
curl http://localhost:3000/editor | grep -q "Editor" && echo "✓ Editor works"

# Kill dev server
kill %1
```

- [ ] **Step 3: Test static export**

```bash
npm run export
# Check out/ folder exists
ls out/index.html && echo "✓ Static export successful"
```

- [ ] **Step 4: Final commit and push**

```bash
git add README.md
git commit -m "docs: add comprehensive readme and project documentation"
```

---

## Summary

This plan delivers a complete AI engineer portfolio with:

✅ Modern Minimal design  
✅ Dashboard layout (sidebar profile + main content)  
✅ Live markdown blog editor for local development  
✅ Blog organization by date + categories  
✅ Static export to GitHub Pages  
✅ Responsive design (mobile + desktop)  
✅ Fully documented and deployable  

Each task is self-contained and produces working, testable code. Follow the tasks in order, test after each commit, and you'll have a production-ready portfolio.

---

## Execution Options

Plan complete and saved to `docs/superpowers/plans/2026-06-15-ai-engineer-portfolio.md`.

**Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration with checkpoints

**2. Inline Execution** — Execute tasks in this session, batch mode with checkpoints for review

**Which approach would you prefer?**
