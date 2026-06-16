# Blog Beautification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean up portfolio header/sidebar/resume, remove duplicate content from home page, delete outdated blog articles, and implement a comprehensive visual refresh of the blog page with modern styling (gradients, depth, improved typography, smooth interactions).

**Architecture:** This is a multi-part cleanup and enhancement:
1. Simplify header and sidebar by removing job title
2. Remove duplicate content from home and resume pages
3. Clean up old blog articles
4. Implement modern card design with shadows, gradients, and interactions in BlogList component
5. Enhance blog page header typography and styling

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, inline styles

---

## File Modification Map

**Modified Files:**
- `components/Header.tsx` — Remove AI Engineer badge from header
- `components/ProfileCard.tsx` — Remove AI Engineer subtitle, adjust spacing
- `app/page.tsx` — Remove duplicate summary from hero section
- `app/resume/page.tsx` — Remove phone number display and Expertise section
- `components/BlogList.tsx` — Implement modern card styling, category filters, typography
- `app/blog/page.tsx` — Enhance header gradient and typography

**Deleted Files:**
- `public/blogs/2026-06-15-getting-started.md`
- `public/blogs/2026-06-15-machine-learning-basics.md`

---

## Implementation Tasks

### Task 1: Remove "AI Engineer" from Header Component

**Files:**
- Modify: `components/Header.tsx:24-43`

- [ ] **Step 1: Open Header.tsx and locate the header markup**

File: `/home/duongkstn/profile/components/Header.tsx`

Current code (lines 23-44):
```typescript
<Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>
  <div style={{display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
    <h1 style={{
      fontSize: '1.125rem',
      fontWeight: '700',
      color: '#0f172a',
      margin: 0,
      letterSpacing: '-0.5px'
    }}>
      Dao Nguyen Duong
    </h1>
    <span style={{
      fontSize: '0.75rem',
      fontWeight: '600',
      color: '#10b981',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    }}>
      AI Engineer
    </span>
  </div>
</Link>
```

- [ ] **Step 2: Remove the AI Engineer span**

Replace the above code with:
```typescript
<Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>
  <h1 style={{
    fontSize: '1.125rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.5px'
  }}>
    Dao Nguyen Duong
  </h1>
</Link>
```

Remove the container div and the AI Engineer span entirely. Keep only the h1 with the name.

- [ ] **Step 3: Commit changes**

```bash
git add components/Header.tsx
git commit -m "feat: remove AI Engineer badge from header"
```

---

### Task 2: Clean Up ProfileCard Sidebar

**Files:**
- Modify: `components/ProfileCard.tsx:37-57`

- [ ] **Step 1: Locate the name and title sections in ProfileCard.tsx**

Current code (lines 37-57):
```typescript
{/* Name */}
<h2 style={{
  fontSize: '1.125rem',
  fontWeight: '700',
  color: '#0f172a',
  margin: 0
}}>
  Dao Nguyen Duong
</h2>

{/* Title */}
<p style={{
  fontSize: '0.75rem',
  fontWeight: '600',
  color: '#10b981',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  margin: '0 0 1.5rem 0'
}}>
  AI Engineer
</p>
```

- [ ] **Step 2: Remove the AI Engineer title paragraph and adjust spacing**

Replace with:
```typescript
{/* Name */}
<h2 style={{
  fontSize: '1.125rem',
  fontWeight: '700',
  color: '#0f172a',
  margin: 0,
  marginBottom: '2rem'
}}>
  Dao Nguyen Duong
</h2>
```

Remove the `<p>` element with "AI Engineer" entirely. Add `marginBottom: '2rem'` to the h2 to create spacing before the divider.

- [ ] **Step 3: Commit changes**

```bash
git add components/ProfileCard.tsx
git commit -m "feat: remove AI Engineer subtitle from profile card and improve spacing"
```

---

### Task 3: Remove Duplicate Summary from Home Page

**Files:**
- Modify: `app/page.tsx:70-77`

- [ ] **Step 1: Locate the summary paragraph in the hero section**

Current code (lines 70-77):
```typescript
<p style={{
  fontSize: '1.125rem',
  color: colors.muted,
  marginBottom: '2rem',
  lineHeight: '1.8'
}}>
  {resumeData.summary}
</p>
```

- [ ] **Step 2: Remove the summary paragraph**

Delete these 8 lines entirely. The hero section should now end with the headline and go directly to the CTA button.

After deletion, the hero section ends at line 68 with the headline, then continues to the CTA button (currently at line 78).

- [ ] **Step 3: Commit changes**

```bash
git add app/page.tsx
git commit -m "fix: remove duplicate summary from home page hero section"
```

---

### Task 4: Remove Phone Number from Resume Page

**Files:**
- Modify: `app/resume/page.tsx:145-149`

- [ ] **Step 1: Locate the phone number display in resume header**

Current code (lines 145-149):
```typescript
{resumeData.contact.phone && (
  <span style={{ color: colors.slateGray, fontWeight: '500' }}>
    {resumeData.contact.phone}
  </span>
)}
```

- [ ] **Step 2: Delete the phone number conditional block**

Remove these 5 lines entirely. The contact info section will now show only email, location, GitHub, and LinkedIn.

- [ ] **Step 3: Commit changes**

```bash
git add app/resume/page.tsx
git commit -m "fix: remove phone number from resume contact info"
```

---

### Task 5: Remove Expertise Section from Resume Page

**Files:**
- Modify: `app/resume/page.tsx:317-345`

- [ ] **Step 1: Locate the Expertise section in resume page**

Current code (lines 317-345):
```typescript
{/* Expertise */}
<section style={{ marginBottom: '3rem' }}>
  <h2 style={styles.h2}>Expertise</h2>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
    {resumeData.expertise.map((exp) => (
      <div
        key={exp.id}
        style={styles.expertiseBox}
      >
        <h3 style={styles.sectionTitle}>
          {exp.area}
        </h3>
        <p style={{ color: colors.slateGray, fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          {exp.description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {exp.relatedSkills.map((skill) => (
            <span
              key={skill}
              style={styles.relatedSkillTag}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Delete the entire Expertise section**

Remove the entire `<section>` block for Expertise (29 lines total from line 317 to 345).

The resume page will now go directly from Awards & Honors section to the Footer section.

- [ ] **Step 3: Commit changes**

```bash
git add app/resume/page.tsx
git commit -m "feat: remove Expertise section from resume page"
```

---

### Task 6: Delete Outdated Blog Articles

**Files:**
- Delete: `public/blogs/2026-06-15-getting-started.md`
- Delete: `public/blogs/2026-06-15-machine-learning-basics.md`

- [ ] **Step 1: Delete both blog markdown files**

```bash
rm /home/duongkstn/profile/public/blogs/2026-06-15-getting-started.md
rm /home/duongkstn/profile/public/blogs/2026-06-15-machine-learning-basics.md
```

Verify deletion:
```bash
ls -la /home/duongkstn/profile/public/blogs/
```

Expected: Directory should be empty or contain no .md files.

- [ ] **Step 2: Commit the deletions**

```bash
git add -A
git commit -m "feat: remove outdated blog articles (Getting Started, What is Machine Learning)"
```

---

### Task 7: Implement Blog Card and Filter Styling

**Files:**
- Modify: `components/BlogList.tsx`

- [ ] **Step 1: Replace the entire BlogList.tsx component with enhanced styling**

Replace all content in `components/BlogList.tsx` with:

```typescript
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
              border: 'none',
              cursor: 'pointer',
              backgroundColor: selectedCategory === null ? '#10b981' : 'white',
              color: selectedCategory === null ? 'white' : '#1f2937',
              ...(selectedCategory === null && {
                boxShadow: '0 4px 8px rgba(16, 185, 129, 0.25)'
              }),
              ...(selectedCategory !== null && {
                border: '1px solid #e5e7eb'
              })
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== null) {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== null) {
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = 'white';
              }
            }}
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
                backgroundColor: selectedCategory === category ? '#10b981' : 'white',
                color: selectedCategory === category ? 'white' : '#1f2937',
                ...(selectedCategory === category && {
                  boxShadow: '0 4px 8px rgba(16, 185, 129, 0.25)'
                })
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}
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
          filteredBlogs.map((blog, index) => (
            <article
              key={blog.slug}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                paddingBottom: index !== filteredBlogs.length - 1 ? '1.5rem' : '1.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'white';
              }}
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
                <time style={{
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
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1rem',
                  margin: 0,
                  lineHeight: '1.3',
                  transition: 'color 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#1f2937';
                }}>
                  {blog.title}
                </h3>
              </Link>
              <p style={{
                color: '#6b7280',
                marginBottom: '1.5rem',
                fontSize: '1.125rem',
                lineHeight: '1.8',
                margin: '1rem 0 1.5rem 0'
              }}>
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  color: '#6366f1',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                  e.currentTarget.style.gap = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6366f1';
                  e.currentTarget.style.gap = '0.5rem';
                }}
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

Key changes:
- Cards now have white background, border, and subtle shadow
- Hover effect: deeper shadow + slight lift (translateY -2px) + light gray background
- Category badges: changed from light purple to light blue (#dbeafe) with darker text
- Article titles: increased from 2xl to 2.5rem, color changes to emerald on hover
- Description: improved font size (1.125rem) and line height (1.8)
- Read More link: better sizing, color changes from indigo to emerald on hover
- Gap between articles: increased to 3rem for better spacing
- All transitions smooth (0.3s ease-in-out)

- [ ] **Step 2: Test the changes locally**

```bash
cd /home/duongkstn/profile && npm run dev
```

Navigate to http://localhost:3000/blog and verify:
- Category filter buttons style correctly (active = emerald, inactive = white with border)
- Blog cards have proper shadows and spacing
- Hover on cards lifts them with deeper shadow
- Article titles change color to emerald on hover
- Read More link changes color to emerald on hover
- Overall styling looks polished and modern

- [ ] **Step 3: Commit changes**

```bash
git add components/BlogList.tsx
git commit -m "feat: implement modern card styling for blog articles with enhanced shadows, colors, and interactions"
```

---

### Task 8: Enhance Blog Page Header Typography

**Files:**
- Modify: `app/blog/page.tsx:19-39`

- [ ] **Step 1: Locate the blog page header section**

Current code (lines 15-40):
```typescript
<header style={{
  marginBottom: '3rem',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
  borderRadius: '1rem',
  padding: '3rem'
}}>
  <h1 style={{
    fontSize: '3rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '1rem',
    lineHeight: '1.1'
  }}>
    Blog
  </h1>
  <p style={{
    fontSize: '1.125rem',
    color: '#475569',
    lineHeight: '1.6',
    maxWidth: '600px'
  }}>
    Thoughts and insights on AI, machine learning, and software engineering. Exploring production systems, LLMs, and clean architecture.
  </p>
</header>
```

- [ ] **Step 2: Update the header styling**

Replace with:
```typescript
<header style={{
  marginBottom: '3rem',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
  borderRadius: '1rem',
  padding: '3rem'
}}>
  <h1 style={{
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    letterSpacing: '-1px'
  }}>
    Blog
  </h1>
  <p style={{
    fontSize: '1.125rem',
    color: '#475569',
    lineHeight: '1.8',
    maxWidth: '600px'
  }}>
    Thoughts and insights on AI, machine learning, and software engineering. Exploring production systems, LLMs, and clean architecture.
  </p>
</header>
```

Changes:
- Increased h1 fontSize from 3rem to 3.5rem
- Increased h1 marginBottom from 1rem to 1.5rem
- Added letterSpacing: '-1px' for tighter heading
- Increased description lineHeight from 1.6 to 1.8 for better readability

- [ ] **Step 3: Verify changes in browser**

```bash
cd /home/duongkstn/profile && npm run dev
```

Navigate to http://localhost:3000/blog and verify:
- Blog header is larger and more prominent
- Title and description have better visual hierarchy
- Description is easier to read with improved line height

- [ ] **Step 4: Commit changes**

```bash
git add app/blog/page.tsx
git commit -m "feat: enhance blog page header typography and spacing"
```

---

### Task 9: Full Integration Test

**Files:**
- Test all modified files in browser

- [ ] **Step 1: Start the development server**

```bash
cd /home/duongkstn/profile && npm run dev
```

Expected: Server starts at http://localhost:3000

- [ ] **Step 2: Test header changes**

Navigate to http://localhost:3000

Verify:
- Header shows only "Dao Nguyen Duong" without "AI Engineer"
- Profile sidebar shows only the name without "AI Engineer" subtitle

- [ ] **Step 3: Test home page changes**

Verify:
- Hero section shows headline "I build AI systems that work in production"
- No summary paragraph below the headline
- CTA button is visible and functional

- [ ] **Step 4: Test resume page changes**

Navigate to http://localhost:3000/resume

Verify:
- Contact info section has NO phone number displayed
- NO Expertise section exists (goes directly from Awards & Honors to Footer)
- All other sections are intact

- [ ] **Step 5: Test blog page changes**

Navigate to http://localhost:3000/blog

Verify:
- Blog header has larger, more prominent title (3.5rem)
- Blog description has better line height
- Only existing blog articles are shown (Getting Started and What is Machine Learning are gone)
- Category filter buttons style correctly:
  - Active: emerald background, white text, shadow
  - Inactive: white background, dark border, hovers to light gray
- Blog cards have:
  - White background with 1px border
  - Subtle shadow: 0 4px 12px rgba(0,0,0,0.08)
  - On hover: deeper shadow + lift effect + light gray background
  - Category badges in light blue with dark text
  - Titles in 2.5rem font, color changes to emerald on hover
  - Proper spacing and padding
- Read More links change from indigo to emerald on hover

- [ ] **Step 6: Test responsive design**

Resize browser to mobile width (375px) and verify:
- All sections remain readable
- Blog cards stack properly
- Category filter buttons wrap appropriately
- No overflow issues

- [ ] **Step 7: Commit any small fixes if needed**

If any minor styling adjustments are needed, make them and commit:

```bash
git add .
git commit -m "fix: minor styling adjustments for full compatibility"
```

---

### Task 10: Verify All Commits and Create Summary

**Files:**
- Git history verification

- [ ] **Step 1: View the commit log**

```bash
cd /home/duongkstn/profile && git log --oneline -10
```

Expected output should show commits like:
```
abc1234 feat: enhance blog page header typography and spacing
def5678 feat: implement modern card styling for blog articles with enhanced shadows, colors, and interactions
ghi9012 feat: remove outdated blog articles (Getting Started, What is Machine Learning)
jkl3456 feat: remove Expertise section from resume page
mno7890 fix: remove phone number from resume contact info
pqr1234 fix: remove duplicate summary from home page hero section
stu5678 feat: remove AI Engineer subtitle from profile card and improve spacing
vwx9012 feat: remove AI Engineer badge from header
```

- [ ] **Step 2: Verify git status is clean**

```bash
git status
```

Expected: "On branch main, nothing to commit, working tree clean"

- [ ] **Step 3: Final summary**

All tasks completed:
✅ Header simplified (no AI Engineer badge)
✅ Profile card cleaned up (no AI Engineer subtitle, improved spacing)
✅ Home page cleaned (no duplicate summary)
✅ Resume page cleaned (no phone number, no Expertise section)
✅ Blog articles removed (Getting Started, What is Machine Learning)
✅ Blog page beautifully redesigned with modern styling
  - Enhanced card styling with shadows and depth
  - Improved typography hierarchy
  - Better color usage with emerald and indigo accents
  - Smooth hover effects and transitions
  - Improved category filter styling
✅ All changes committed with clear commit messages

---

## Success Criteria Checklist

- ✅ Header displays only "Dao Nguyen Duong" without "AI Engineer"
- ✅ Profile sidebar shows only name without subtitle
- ✅ Home page hero has no duplicate summary text
- ✅ Resume page has no phone number in contact info
- ✅ Resume page has no Expertise section
- ✅ Blog articles removed: "Getting Started with This Portfolio" and "What is Machine Learning?"
- ✅ Blog cards have proper white background, border, and shadows
- ✅ Blog cards lift on hover with enhanced shadow effect
- ✅ Category filter buttons style correctly (active = emerald, inactive = white)
- ✅ Article titles use 2.5rem font with emerald color on hover
- ✅ Blog header typography enhanced (3.5rem title, better spacing)
- ✅ All colors match emerald/indigo/blue palette
- ✅ Smooth transitions (0.3s) on all interactive elements
- ✅ All changes properly committed with descriptive messages
- ✅ Responsive design maintained on mobile
