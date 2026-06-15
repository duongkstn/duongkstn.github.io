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
