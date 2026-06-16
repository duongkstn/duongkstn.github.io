# Profile Image in Sidebar - Design Specification

**Date:** June 16, 2026  
**Feature:** Add profile image to sidebar  
**Status:** Design Phase

## Overview

Add a circular profile image to the top of the sidebar (ProfileCard component) that displays on all screen sizes. The image will be medium-sized (160px diameter) with a circular shape and subtle styling to create visual depth.

## User Intent

Display a professional profile photo in the sidebar to make the portfolio more personal and visually engaging. The image should be prominent but balanced with other sidebar content (name, title, social links).

## File Structure

### Image Location
- **Path:** `/public/images/profile.jpg`
- **Format:** JPEG or PNG
- **Placeholder:** Create a placeholder image (user will replace with actual photo later)
- **Size:** 160px × 160px minimum (can be larger; Next.js will optimize)

### Component Changes
- **File:** `components/ProfileCard.tsx`
- Update existing component to:
  - Remove `display: 'none'` to show sidebar on all screen sizes
  - Add `<img>` tag at the top of the sidebar (above name)
  - Apply circular styling with border-radius and shadow

## Design Details

### Image Container
- **Diameter:** 160px
- **Shape:** Perfect circle (border-radius: 50%)
- **Styling:**
  - Subtle shadow for depth (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)`)
  - No border (clean look)
  - Responsive: maintains circular aspect ratio on all screen sizes
- **Positioning:** Centered in sidebar, at the very top (above name)
- **Spacing:** 24px margin-bottom to separate from name

### Accessibility
- `alt` text: "Dao Nguyen Duong"
- Semantic `<img>` tag with proper attributes

### Responsive Behavior
- **Desktop (lg and up):** Image displays at 160px in 280px sidebar
- **Tablet/Mobile:** Image maintains 160px size and circular shape, centered in sidebar
- **No media query needed:** Fixed size works well across all breakpoints

## Technical Approach

### Component Structure
```
<aside> (ProfileCard)
  <img /> (Profile image - 160px circular)
  <h2> (Name)
  <p> (Title)
  ...rest of sidebar content
</aside>
```

### Styling
- Use inline styles to maintain consistency with existing ProfileCard approach
- Apply border-radius: '50%' for circular shape
- Add box-shadow for depth
- Set width/height to maintain square aspect ratio
- Use object-fit: 'cover' to ensure image fills the circle

## Implementation Steps

1. Create placeholder image at `/public/images/profile.jpg`
2. Enable sidebar (remove `display: 'none'`)
3. Add `<img>` tag at top of ProfileCard component
4. Apply circular styling
5. Test on mobile, tablet, and desktop viewports
6. User replaces placeholder with actual photo later

## Success Criteria

- ✓ Circular profile image appears at top of sidebar
- ✓ Image is 160px diameter
- ✓ Sidebar is visible on all screen sizes
- ✓ Image maintains circular shape on all devices
- ✓ Proper spacing between image and name
- ✓ No layout shifts or responsive issues
