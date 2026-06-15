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
