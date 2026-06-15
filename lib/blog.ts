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
