# Portfolio Redesign - Phase 1: Resume & Home Tabs

**Date:** 2026-06-15  
**Scope:** Sync resume with all information from Google Drive, create Home tab with key highlights, add My Life tab skeleton  
**Priority Phase:** 1 of 2 (content structure first, then styling/theme/hover effects)

## Goal

Transform the portfolio from a blog-first site to a comprehensive professional presence that:
1. Displays complete resume information (work experiences, honors, awards, expertise)
2. Shows professional highlights on Home page pulled from resume
3. Prepares infrastructure for personal content (My Life tab)
4. Maintains single source of truth for resume data across all pages

## Architecture

### Data Structure: `lib/resume-data.ts`

Create a new TypeScript file that exports a single structured object containing all resume information:

```typescript
export const resumeData = {
  name: "Dao Nguyen Duong",
  title: "AI Engineer",
  
  contact: {
    email: "duongdn8@fpt.com",
    phone?: "...",
    location: "Vietnam",
    linkedin?: "https://www.linkedin.com/in/duongkstn/",
    github?: "https://github.com/duongkstn"
  },
  
  summary: "Professional summary from resume...",
  
  experience: [
    {
      id: "exp-1",
      title: "Job Title",
      company: "Company Name",
      startDate: "2024-01",
      endDate: "Present",
      description: "Brief role description",
      achievements: [
        "Achievement or responsibility",
        "Another achievement"
      ],
      technologies?: ["Python", "PyTorch", "etc"]
    }
    // ... all experiences in order
  ],
  
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science",
      field: "Computer Science",
      school: "University Name",
      year: "2021",
      details?: "Additional info"
    }
    // ... all education
  ],
  
  skills: [
    {
      category: "Machine Learning",
      items: ["PyTorch", "TensorFlow", "LLMs"]
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "TypeScript"]
    }
    // ... organized by category
  ],
  
  awards: [
    {
      id: "award-1",
      title: "Award Name",
      issuer: "Issuing Organization",
      date: "2024-06",
      description?: "Award details"
    }
    // ... all honors and awards
  ],
  
  expertise: [
    {
      area: "AI Systems",
      description: "Building production-ready AI and ML systems",
      relatedSkills: ["Machine Learning", "Python", "LLMs"]
    }
    // ... key expertise areas
  ]
}
```

**Usage:** This single file becomes the source of truth for:
- Resume page (displays all sections)
- Home page (extracts highlights)
- Any future pages needing resume data

## Page Designs

### 1. Home Page (`app/page.tsx`)

**Purpose:** Landing page that showcases who you are and top professional highlights

**Sections:**
1. **Hero Section** (top)
   - Professional statement (from `resumeData.summary`)
   - Tagline: "AI Engineer"
   - CTA button: "View Full Resume"

2. **Key Highlights Section**
   - Pull 3-5 top achievements from work experience
   - Display each as a card with: title + company + 1-2 key achievements
   - Show most recent/significant first

3. **Current Role Section**
   - Display the most recent job title and company
   - Show key responsibilities/achievements from that role

4. **Core Expertise Section**
   - Display 5-6 expertise areas (from `resumeData.expertise`)
   - Each shows area name + brief description
   - Group related skills underneath

5. **CTA Footer**
   - Links to Resume, Blog, GitHub
   - Consistent with existing design

**Data Dependencies:**
- `resumeData.summary` for hero statement
- `resumeData.experience` for highlights (most recent 3-5)
- `resumeData.expertise` for expertise areas
- Derived: current role is `experience[0]` (most recent)

### 2. Resume Page (`app/resume/page.tsx`)

**Purpose:** Comprehensive resume display in web-friendly format, mirrors Google Drive resume structure

**Sections (in order from resume document):**
1. **Header**
   - Name: "Dao Nguyen Duong"
   - Title: "AI Engineer"
   - Contact info (email, GitHub, LinkedIn, location)

2. **Professional Summary**
   - Full summary text from `resumeData.summary`

3. **Work Experience**
   - Display all items from `resumeData.experience` in chronological order (newest first)
   - For each: title + company + dates + description + bullet-pointed achievements
   - Optional: show technologies used if provided

4. **Education**
   - Display all items from `resumeData.education`
   - For each: degree + field + school + year + details

5. **Skills**
   - Display organized by category (from `resumeData.skills`)
   - Can show as pills/tags grouped by category
   - Or as a structured list

6. **Awards & Honors**
   - Prominently display all items from `resumeData.awards`
   - For each: title + issuer + date + description
   - Use visual emphasis (badges, icons, or colored backgrounds)

7. **Expertise**
   - Display all items from `resumeData.expertise`
   - For each: area name + description + related skills

**Layout Notes:**
- Follows the exact section order from your Google Drive resume
- Web-optimized: clean typography, good spacing, scannable
- Print-friendly (can be printed to PDF if needed)

### 3. My Life Page (`app/life/page.tsx`)

**Purpose:** Personal content gallery organized by categories (travel, family, moments, etc.)

**Components:**
1. **Category Filter** (like Blog tab)
   - Buttons for categories (Travel, Family, Moments, etc.)
   - "All" button to show everything
   - Placeholder categories for now

2. **Photo Gallery**
   - Grid layout for images
   - Filters based on selected category
   - Empty state: "Coming soon - gallery content will be added here"

3. **Structure Ready For:**
   - Adding images later
   - Captions/descriptions (optional)
   - Growing the collection over time

**Data Structure (prepared but empty):**
```typescript
export const lifeData = {
  categories: ["Travel", "Family", "Moments", "Events"],
  photos: [
    // To be filled in later
    // { id, title, category, imageUrl, description, date }
  ]
}
```

## Navigation Structure

Update `components/Header.tsx` tabs:
- **Home** → `/` (existing, redesigned)
- **Blog** → `/blog` (existing)
- **Resume** → `/resume` (existing, redesigned)
- **My Life** → `/life` (new)
- **GitHub** → external link

All pages maintain consistent:
- Name: "Dao Nguyen Duong" + "AI Engineer" in top-left
- Navigation with all tabs
- Header styling

## Implementation Notes

### Data Entry
1. User manually populates `lib/resume-data.ts` with all information from Google Drive resume
2. Structure strictly follows the provided TypeScript type above
3. This is a one-time manual entry; subsequent updates only require editing this file

### Component Reuse
- Resume data is imported once and used by multiple pages
- Home page queries data to extract highlights
- Resume page displays full data in structured format
- Reduces duplication, maintains consistency

### Empty Sections
- My Life page is fully scaffolded but empty (no image data yet)
- Can be populated independently later without touching other code
- Ready for categories, images, and captions when content is available

### Future Phases
- **Phase 2:** Styling overhaul (color theme: almost-black with blue accents)
- **Phase 2:** Creative hover effects on blocks/cards
- **Phase 2:** Blog tab styling fixes
- **Phase 2:** General design polish

## Success Criteria

- ✅ Resume page displays all content from Google Drive resume in correct order
- ✅ Home page shows professional highlights extracted from resume data
- ✅ My Life tab is structured and ready for content (currently empty)
- ✅ Single `resume-data.ts` file serves as source of truth
- ✅ "Dao Nguyen Duong" appears consistently in all page headers
- ✅ Navigation includes all tabs (Home, Blog, Resume, My Life, GitHub)
- ✅ No styling/theme changes in this phase (preserve current colors for now)

## Deferred to Phase 2

- Color theme change (almost-black with blue accents)
- Creative hover effects
- Blog tab styling fixes
- General visual polish and design refinement
