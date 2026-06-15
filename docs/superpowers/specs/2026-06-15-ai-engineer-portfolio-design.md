# AI Engineer Portfolio Design (duongkstn.github.io)

**Date**: 2026-06-15  
**Tech Stack**: Next.js + Markdown + GitHub Pages  
**Aesthetic**: Modern Minimal with indigo accents  

---

## Architecture

### Local Development
- Next.js dev server (`localhost:3000`)
- Browser-based markdown editor for blog creation/editing
- Live preview as users type
- Blogs stored in `/public/blogs` as `.md` files
- Images stored in `/public/images`

### Deployment to GitHub Pages
- `npm run export` generates static HTML to `/out` folder
- Push `/out` contents to `duongkstn.github.io` repo
- GitHub Pages serves static site automatically
- Zero server dependencies

---

## Layout & Visual Design

**Aesthetic**: Modern Minimal (white/cream background, clean sans-serif, indigo accents)

### Dashboard Layout
- **Left Sidebar** (Profile Card)
  - Profile photo (circular, 80-100px)
  - Name (Duong Nguyen)
  - Title (AI Engineer · Software Engineer)
  - Short bio paragraph (1-2 sentences)
  - Links: GitHub, LinkedIn, Email, Resume
  
- **Main Content Area** (Right)
  - Featured/Latest blog posts
  - Blog filter by category (Date + Categories)
  - Individual blog pages

### Pages
1. **Homepage** (`/`) — Profile card + featured blogs
2. **Blog** (`/blog`) — Full blog listing with category filters
3. **Blog Post** (`/blog/[slug]`) — Individual blog with metadata
4. **Resume** (`/resume`) — Resume/CV page or link to PDF

---

## Blog System

### Storage & Format
- Markdown files in `/public/blogs/` with YAML frontmatter
- File naming: `YYYY-MM-DD-slug.md`
- Frontmatter includes: `title`, `date`, `category`, `description`, `tags`

### Live Editor (Local Only)
- Browser-based textarea with markdown preview side-by-side
- Save button writes to filesystem
- Real-time preview using markdown-to-HTML library
- Simple, no database required

### Blog Listing
- Display blogs by date (newest first)
- Filter by category (dropdown/buttons)
- Show title, date, category, short description
- Link to full post

---

## Data Flow

1. **Edit Mode (Local)**
   - User opens live editor in browser
   - Writes/edits markdown
   - Clicks "Save" → writes to `/public/blogs/[slug].md`
   - Next.js reloads and displays updated blog

2. **Static Export Mode**
   - User runs `npm run export`
   - Next.js generates static HTML for all pages and blog posts
   - Creates `/out` folder with complete static site
   - No dynamic content, no server required

3. **GitHub Pages Deployment**
   - User commits `/out` folder to `duongkstn.github.io` repo
   - GitHub Pages serves the static files
   - Site live at `https://duongkstn.github.io`

---

## Components & Structure

### Next.js Structure
```
/app
  /page.tsx          # Homepage (profile + featured blogs)
  /blog
    /page.tsx        # Blog listing with filters
    /[slug]
      /page.tsx      # Individual blog post
  /resume
    /page.tsx        # Resume page or PDF link
  /layout.tsx        # Root layout with sidebar

/public
  /blogs             # Markdown blog files
    2026-06-15-first-post.md
    2026-06-20-second-post.md
  /images            # Blog images and profile photo

/components
  ProfileCard.tsx    # Left sidebar profile
  BlogEditor.tsx     # Live markdown editor
  BlogList.tsx       # Blog listing with filters
  BlogPost.tsx       # Rendered blog post

/lib
  blog.ts            # Blog utilities (read files, parse frontmatter)
  markdown.ts        # Markdown to HTML conversion
```

---

## Key Features

✅ **Modern Minimal Design** — Clean, professional, readable  
✅ **Dashboard Layout** — Sidebar profile + main blog content  
✅ **Live Local Editor** — Write blogs in browser, see preview live  
✅ **Blog Organization** — Filter by date and category  
✅ **Markdown-Based** — Easy to manage, version-control friendly  
✅ **Static Export** — Zero dependencies, pure HTML/CSS/JS  
✅ **GitHub Pages Ready** — Free hosting, automatic deployment  
✅ **Responsive Design** — Works on mobile and desktop  

---

## Deployment Flow

1. **Local Development**: `npm run dev` → edit blogs locally
2. **Ready to Publish**: `npm run export` → generates static HTML
3. **Push to GitHub**: Commit and push `/out` folder to `duongkstn.github.io`
4. **Live**: Site available at `https://duongkstn.github.io`

---

## Technology Details

- **Framework**: Next.js 14+ (React + Server Components)
- **Styling**: Tailwind CSS (Modern Minimal utilities)
- **Markdown Parsing**: gray-matter (frontmatter) + markdown-it or marked
- **Editor**: Simple textarea with rehype-react for preview
- **Images**: Next.js Image optimization
- **Deployment**: GitHub Pages (static export)

---

## Success Criteria

- [ ] Live markdown editor works smoothly locally
- [ ] Blog filtering by category functional
- [ ] Static export generates complete working site
- [ ] Site deploys to GitHub Pages without issues
- [ ] Responsive on mobile and desktop
- [ ] Load times under 2 seconds
