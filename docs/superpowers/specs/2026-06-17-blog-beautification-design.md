# Blog Beautification Design Spec

**Date:** 2026-06-17  
**Status:** Design Phase  
**Type:** Visual Refresh / UI Enhancement

## Overview

Comprehensive visual refresh of the blog tab to implement a modern gradient + depth design approach. This includes improved typography hierarchy, better spacing, enhanced card styling, and interactive elements with smooth transitions.

## Changes Summary

### 1. Header/Profile Changes (Foundation)

**Header Component (Header.tsx):**
- Remove "AI Engineer" subtitle from header (line 34-42)
- Keep only "Dao Nguyen Duong" as the main heading

**Profile Card Sidebar (ProfileCard.tsx):**
- Remove "AI Engineer" subtitle below profile image (line 47-57)
- Adjust spacing: increase margin between profile name and divider to better accommodate removal

### 2. Home Page Changes

**Home Page (app/page.tsx):**
- Remove the duplicate summary paragraph from hero section
- Keep only the main headline "I build AI systems that work in production"
- Remove `resumeData.summary` display (this content is already in Resume tab)

### 3. Resume Tab Changes

**Resume Page (app/resume/page.tsx):**
- Remove phone number display from contact info (line 145-149)
- Remove entire Expertise section (line 317-345 including the h2 title and grid)

### 4. Blog Articles Cleanup

**Remove Articles:**
- Delete `/public/blogs/2026-06-15-getting-started.md` (Getting Started with This Portfolio)
- Delete `/public/blogs/2026-06-15-machine-learning-basics.md` (What is Machine Learning?)

### 5. Blog Page Visual Refresh

#### Header Section (app/blog/page.tsx)
- Enhance gradient background: keep blue-to-cyan gradient
- Typography improvements:
  - H1: increase to 3.5rem, font-weight: 800
  - Description: font-size 1.125rem, line-height: 1.8, improved color contrast
  - Better letter-spacing for visual polish

#### Category Filter (BlogList.tsx)
- Active button styling:
  - Background: `#10b981` (emerald)
  - Text: white
  - Box-shadow: `0 4px 8px rgba(16, 185, 129, 0.25)`
  - Padding: px-6 py-2.5
  - Transition: all 0.3s ease-in-out

- Inactive button styling:
  - Background: white
  - Border: 1px solid `#e5e7eb`
  - Text: `#1f2937`
  - On hover: scale effect, border color shifts to emerald
  - Transition: all 0.3s ease-in-out

- Layout:
  - Flex gap: 0.75rem (increased from 0.75rem to add breathing room)
  - Margin-bottom: 3rem (from 3rem)

#### Blog Article Cards (BlogList.tsx)
- Card styling:
  - Background: white
  - Border: 1px solid `#e5e7eb`
  - Border-radius: 0.75rem
  - Padding: 1.5rem (increased from default)
  - Box-shadow: `0 4px 12px rgba(0, 0, 0, 0.08)` (normal state)
  - Transition: all 0.3s ease-in-out

- Hover state:
  - Box-shadow: `0 12px 24px rgba(0, 0, 0, 0.12)`
  - Transform: translateY(-2px) (subtle lift)
  - Background: very light gray `#f9fafb`

- Category badge:
  - Background: `#f0f0ff` → change to `#dbeafe` (light blue)
  - Text: `#6366f1` → change to `#1e40af` (darker blue for contrast)
  - Padding: px-3 py-1
  - Border-radius: full
  - Font: text-xs, font-bold, uppercase

- Article title (h3):
  - Font-size: 2xl → 2.5rem
  - Font-weight: bold
  - Color: `#1f2937` (normal), `#10b981` (emerald on hover)
  - Margin-bottom: 1rem (increased for better hierarchy)
  - Transition: color 0.3s ease-in-out
  - Line-height: 1.3

- Description:
  - Font-size: lg → 1.125rem
  - Color: `#6b7280`
  - Line-height: 1.8 (improved readability)
  - Margin-bottom: 1.5rem

- Read More link:
  - Font: text-sm → 0.95rem, font-bold, uppercase
  - Color: `#6366f1` (indigo primary)
  - On hover:
    - Color shifts to `#10b981` (emerald)
    - Gap increases with animation
  - Transition: all 0.3s ease-in-out

- Spacing between articles:
  - Gap: space-y-12 (increased from 10)
  - Padding: p-4 → p-6
  - Border-bottom: softer, lighter gray
  - Last article: no border

#### Overall Layout
- Container max-width: 900px (maintained)
- Left/right padding: consistent with site
- Better visual breathing room with increased gaps
- Smoother, more polished appearance

## Typography Scale

```
Blog Header (h1): 3.5rem, font-weight: 800, line-height: 1.1
Article Titles (h3): 2.5rem, font-weight: bold, line-height: 1.3
Description/Body: 1.125rem, line-height: 1.8
Metadata (date/category): 0.875rem
```

## Color Palette

- Primary (Emerald): `#10b981`
- Dark Text: `#1f2937`
- Muted Text: `#6b7280`
- Light Gray: `#f8fafc`
- Border: `#e5e7eb`
- Accent (Indigo): `#6366f1`
- Accent (Light Blue): `#dbeafe`

## Interactive States

All interactive elements use smooth transitions (0.3s ease-in-out):
- Button hovers: color + shadow changes
- Card hovers: shadow enhancement + lift effect (translateY -2px)
- Link hovers: color change + arrow gap animation
- Category filters: active state with emerald background + shadow

## Files to Modify

1. `components/Header.tsx` — Remove "AI Engineer" span
2. `components/ProfileCard.tsx` — Remove "AI Engineer" subtitle, adjust spacing
3. `app/page.tsx` — Remove summary from hero section
4. `app/resume/page.tsx` — Remove phone number and Expertise section
5. `components/BlogList.tsx` — Implement all card and filter styling improvements
6. `app/blog/page.tsx` — Enhance header gradient and typography
7. Delete `/public/blogs/2026-06-15-getting-started.md`
8. Delete `/public/blogs/2026-06-15-machine-learning-basics.md`

## Testing Checklist

- [ ] Header displays only "Dao Nguyen Duong" without "AI Engineer"
- [ ] Profile sidebar shows only name without subtitle
- [ ] Home page hero section has only headline, no summary
- [ ] Resume page has no phone number in contact info
- [ ] Resume page has no Expertise section
- [ ] Blog articles "Getting Started..." and "What is Machine Learning?" are removed
- [ ] Blog cards have proper shadows and spacing
- [ ] Category filter buttons style correctly (active/inactive states)
- [ ] Hover effects work smoothly on cards and links
- [ ] Typography hierarchy is clear and readable
- [ ] All colors match emerald + indigo + blue palette
- [ ] Responsive layout maintained on mobile

## Success Criteria

✓ Blog page looks polished and modern with improved visual hierarchy  
✓ Removed duplicate content from home tab  
✓ Removed unnecessary sections from resume tab  
✓ Header and sidebar simplified by removing job title  
✓ All interactive elements have smooth transitions  
✓ Typography improvements enhance readability  
