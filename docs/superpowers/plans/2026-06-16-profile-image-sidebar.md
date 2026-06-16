# Profile Image in Sidebar - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a circular profile image at the top of the sidebar that displays on all screen sizes.

**Architecture:** Create a placeholder image in `/public/images/`, then update the ProfileCard component to display it with circular styling and enable the sidebar visibility. The image uses inline styles for consistency with the existing component approach.

**Tech Stack:** Next.js, React, inline CSS styling

---

## File Structure

**Files to create:**
- `/public/images/profile.jpg` — Placeholder image (160x160px minimum)

**Files to modify:**
- `components/ProfileCard.tsx` — Enable sidebar, add image, apply circular styling

---

### Task 1: Create Images Directory and Placeholder Image

**Files:**
- Create: `/public/images/profile.jpg`

- [ ] **Step 1: Create the images directory**

Run:
```bash
mkdir -p /home/duongkstn/profile/public/images
```

Expected: Directory created successfully

- [ ] **Step 2: Create a placeholder image using ImageMagick**

Run:
```bash
convert -size 160x160 xc:'#10b981' /home/duongkstn/profile/public/images/profile.jpg
```

Expected: 160x160px JPEG file created with a solid teal background (#10b981 - matches your brand color)

- [ ] **Step 3: Verify the file exists**

Run:
```bash
ls -lh /home/duongkstn/profile/public/images/profile.jpg
```

Expected: File listed with size around 2-3KB

- [ ] **Step 4: Commit the placeholder image**

Run:
```bash
cd /home/duongkstn/profile && git add public/images/profile.jpg && git commit -m "feat: add placeholder profile image"
```

Expected: Commit successful

---

### Task 2: Update ProfileCard to Enable Sidebar and Add Image

**Files:**
- Modify: `components/ProfileCard.tsx`

- [ ] **Step 1: Update ProfileCard component**

Replace the entire `ProfileCard.tsx` file with this version that enables the sidebar and adds the circular image at the top:

```typescript
'use client';

export default function ProfileCard() {
  return (
    <aside style={{
      display: 'flex',
      flexDirection: 'column',
      width: '280px',
      backgroundColor: '#f8fafc',
      borderRight: '1px solid #e2e8f0',
      padding: '2rem',
      position: 'sticky',
      top: '65px',
      height: 'calc(100vh - 65px)',
      overflowY: 'auto'
    }}>

      {/* Profile Image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1.5rem'
      }}>
        <img
          src="/images/profile.jpg"
          alt="Dao Nguyen Duong"
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>

      {/* Name */}
      <h2 style={{
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '0.5rem',
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
        marginBottom: '1.5rem',
        margin: '0 0 1.5rem 0'
      }}>
        AI Engineer
      </p>


      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#e2e8f0',
        marginBottom: '1.5rem'
      }}></div>

      {/* Info */}
      <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
        <p style={{ margin: '0.5rem 0' }}>📍 Vietnam</p>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', marginBottom: '1.5rem' }}></div>

      {/* Social Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <a href="https://github.com/duongkstn" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/duongkstn/" target="_blank" rel="noopener noreferrer" className="social-link" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
        <a href="mailto:nguyenduongyht@gmail.com" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email
        </a>
        <a href="https://scholar.google.com/citations?user=GWdDtWYAAAAJ" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          gap: '0.75rem',
          fontSize: '0.875rem',
          color: '#64748b',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}>
          <svg style={{ width: '1.125rem', height: '1.125rem', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C16.254 13.769 14 17 14 17v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3c0-.227-1.745-3.231-2.758-3.231zm5.758.231v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3h1.77L12 10.433 8.23 14z"/>
          </svg>
          Google Scholar
        </a>
      </div>
    </aside>
  );
}
```

Expected: Component updated with sidebar enabled and image container added

- [ ] **Step 2: Run the development server to test**

Run:
```bash
cd /home/duongkstn/profile && npm run dev
```

Expected: Next.js dev server starts successfully on `http://localhost:3000`

- [ ] **Step 3: Open the site in a browser and verify the sidebar**

Action: Open `http://localhost:3000` in your browser

Visual checks:
- ✓ Sidebar is visible on the left side (on desktop)
- ✓ Circular profile image appears at the top of the sidebar (teal placeholder)
- ✓ Image is 160px diameter
- ✓ Name, title, and social links appear below the image
- ✓ Image has subtle shadow
- ✓ Sidebar is visible on mobile (may stack differently)

- [ ] **Step 4: Test responsive design**

Action: Open browser developer tools (F12), resize window to mobile size (375px width)

Visual checks:
- ✓ Sidebar remains visible on mobile
- ✓ Image maintains circular shape and 160px size
- ✓ Sidebar content is readable and properly spaced
- ✓ No layout breaks or overflow issues

- [ ] **Step 5: Commit the component update**

Run:
```bash
cd /home/duongkstn/profile && git add components/ProfileCard.tsx && git commit -m "feat: add profile image to sidebar and enable sidebar visibility"
```

Expected: Commit successful

---

## Success Verification

After completing both tasks, verify:
- ✓ `/public/images/profile.jpg` exists and is 160x160px
- ✓ Sidebar displays on all screen sizes (mobile, tablet, desktop)
- ✓ Circular profile image appears at top of sidebar with proper styling
- ✓ Image has subtle shadow for depth
- ✓ Proper spacing between image and name
- ✓ No layout shifts or responsive issues
- ✓ Two commits created with appropriate messages

## Notes for User

When you're ready to replace the placeholder with your actual photo:
1. Place your image at `/public/images/profile.jpg` (or any size, Next.js will optimize it)
2. The circular styling and shadow will apply automatically
3. No code changes needed—just replace the file
