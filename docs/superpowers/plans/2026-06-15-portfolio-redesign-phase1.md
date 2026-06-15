# Portfolio Redesign Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a comprehensive professional portfolio by syncing resume data, redesigning Home page with highlights, rebuilding Resume page to show all information, and adding a My Life tab skeleton.

**Architecture:** Single source of truth (`lib/resume-data.ts`) contains all resume information. Home page queries it for highlights, Resume page displays it fully, My Life is scaffolded for future content. No styling changes in this phase.

**Tech Stack:** Next.js 15, TypeScript, React, Tailwind CSS (no changes)

---

## File Structure

**New Files:**
- `lib/resume-data.ts` — Structured resume data (single source of truth)
- `lib/life-data.ts` — My Life gallery data structure (empty skeleton)
- `app/life/page.tsx` — My Life tab with category filters

**Modified Files:**
- `app/page.tsx` — Redesign Home page to show resume highlights
- `app/resume/page.tsx` — Redesign Resume page to display all sections
- `components/Header.tsx` — Add My Life tab to navigation

---

## Task 1: Create Resume Data Structure

**Files:**
- Create: `lib/resume-data.ts`

- [ ] **Step 1: Create resume-data.ts with TypeScript type definitions and structure**

Create the file `/home/duongdn8/profile/lib/resume-data.ts`:

```typescript
export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  startDate: string; // "YYYY-MM" format
  endDate: string; // "YYYY-MM" or "Present"
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  school: string;
  year: string; // "YYYY"
  details?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string; // "YYYY-MM" or "YYYY"
  description?: string;
}

export interface ExpertiseArea {
  id: string;
  area: string;
  description: string;
  relatedSkills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  awards: AwardItem[];
  expertise: ExpertiseArea[];
}

export const resumeData: ResumeData = {
  name: "Dao Nguyen Duong",
  title: "AI Engineer",
  
  summary: `AI engineer passionate about building production-ready machine learning systems. 
Experienced in large language models, deep learning, and full-stack software engineering 
with a strong foundation in Python, distributed systems, and software architecture.`,
  
  contact: {
    email: "duongdn8@fpt.com",
    location: "Vietnam",
    linkedin: "https://www.linkedin.com/in/duongkstn/",
    github: "https://github.com/duongkstn"
  },
  
  experience: [
    // TODO: Populate with actual experience from Google Drive resume
    // FORMAT: Most recent first
    // {
    //   id: "exp-1",
    //   title: "Job Title",
    //   company: "Company Name",
    //   startDate: "YYYY-MM",
    //   endDate: "Present" or "YYYY-MM",
    //   description: "Brief role description",
    //   achievements: [
    //     "Achievement or responsibility",
    //     "Another achievement"
    //   ],
    //   technologies: ["Python", "PyTorch", "etc"]
    // }
  ],
  
  education: [
    // TODO: Populate with actual education from Google Drive resume
    // {
    //   id: "edu-1",
    //   degree: "Bachelor of Science",
    //   field: "Computer Science",
    //   school: "University Name",
    //   year: "2021",
    //   details: "Additional info if any"
    // }
  ],
  
  skills: [
    // TODO: Populate with actual skills from Google Drive resume
    // {
    //   category: "Machine Learning",
    //   items: ["PyTorch", "TensorFlow", "LLMs"]
    // }
  ],
  
  awards: [
    // TODO: Populate with actual awards and honors from Google Drive resume
    // {
    //   id: "award-1",
    //   title: "Award Name",
    //   issuer: "Issuing Organization",
    //   date: "2024-06",
    //   description: "Award details"
    // }
  ],
  
  expertise: [
    // TODO: Populate with actual expertise areas from Google Drive resume
    // {
    //   id: "exp-ai",
    //   area: "AI Systems",
    //   description: "Building production-ready AI and ML systems",
    //   relatedSkills: ["Machine Learning", "Python", "LLMs"]
    // }
  ]
};
```

- [ ] **Step 2: Verify the file is created and TypeScript compiles**

Run: `npx tsc --noEmit` 
Expected: No errors (will validate TypeScript syntax)

- [ ] **Step 3: Create a helper function to extract highlights from experience**

Add this to the bottom of `lib/resume-data.ts`:

```typescript
export function getTopExperiences(count: number = 5): ExperienceItem[] {
  return resumeData.experience.slice(0, count);
}

export function getCurrentRole(): ExperienceItem | undefined {
  return resumeData.experience[0];
}

export function getTopExpertiseAreas(count: number = 6): ExpertiseArea[] {
  return resumeData.expertise.slice(0, count);
}
```

- [ ] **Step 4: Commit**

```bash
git add lib/resume-data.ts
git commit -m "feat: create resume data structure with TypeScript types

- Define ResumeData interface with all resume sections
- Create resumeData object with empty placeholders
- Add helper functions for extracting highlights
- Ready for population with actual resume content

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Redesign Home Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace the entire Home page component**

Replace the contents of `/home/duongdn8/profile/app/page.tsx` with:

```typescript
import Link from 'next/link';
import { resumeData, getTopExperiences, getTopExpertiseAreas, getCurrentRole } from '@/lib/resume-data';

export const metadata = {
  title: 'Home | Dao Nguyen Duong',
  description: 'AI Engineer - Portfolio & Professional Summary',
};

export default function Home() {
  const topExperiences = getTopExperiences(3);
  const topExpertise = getTopExpertiseAreas(5);
  const currentRole = getCurrentRole();

  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Hero Section */}
      <section style={{
        marginBottom: '4rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)',
        borderRadius: '1rem',
        padding: '3rem',
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }}>
        <div style={{ maxWidth: '700px' }}>
          <p style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#10b981',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Welcome
          </p>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            letterSpacing: '-2px'
          }}>
            I build AI systems that <span style={{ color: '#10b981' }}>work in production</span>
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>
            {resumeData.summary}
          </p>
          <Link
            href="/resume"
            className="cta-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingLeft: '2rem',
              paddingRight: '2rem',
              paddingTop: '1rem',
              paddingBottom: '1rem',
              backgroundColor: '#10b981',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(16, 185, 129, 0.15)'
            }}
          >
            View Full Resume <span>→</span>
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Current Role Section */}
      {currentRole && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '1.5rem'
          }}>
            Current Role
          </h2>
          <div style={{
            padding: '2rem',
            backgroundColor: '#f8fafc',
            borderLeft: '4px solid #10b981',
            borderRadius: '0.5rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '0.5rem',
              margin: '0 0 0.5rem 0'
            }}>
              {currentRole.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#10b981',
              fontWeight: '600',
              marginBottom: '1rem',
              margin: '0 0 1rem 0'
            }}>
              {currentRole.company}
            </p>
            <p style={{
              color: '#475569',
              lineHeight: '1.8',
              fontSize: '0.95rem',
              marginBottom: '1rem'
            }}>
              {currentRole.description}
            </p>
            {currentRole.achievements && currentRole.achievements.length > 0 && (
              <ul style={{
                color: '#475569',
                fontSize: '0.9rem',
                lineHeight: '1.8',
                marginLeft: '1.5rem',
                margin: '1rem 0 0 1.5rem'
              }}>
                {currentRole.achievements.slice(0, 3).map((achievement, idx) => (
                  <li key={idx}>• {achievement}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Key Highlights Section */}
      {topExperiences.length > 0 && (
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '2rem'
          }}>
            Key Highlights
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {topExperiences.map((exp) => (
              <div
                key={exp.id}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.25rem',
                  margin: '0 0 0.25rem 0'
                }}>
                  {exp.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#10b981',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  margin: '0 0 0.75rem 0'
                }}>
                  {exp.company}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginBottom: '0.75rem',
                  margin: '0 0 0.75rem 0'
                }}>
                  {exp.startDate} - {exp.endDate}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#475569',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Divider */}
      <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '3rem 0' }}></div>

      {/* Core Expertise Section */}
      {topExpertise.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '2rem'
          }}>
            Core Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {topExpertise.map((exp) => (
              <div key={exp.id} style={{ marginBottom: '1rem' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.5rem',
                  margin: '0 0 0.5rem 0'
                }}>
                  {exp.area}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem'
                }}>
                  {exp.description}
                </p>
                {exp.relatedSkills && exp.relatedSkills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.relatedSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: '#f0fdf4',
                          color: '#166534',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Verify Home page renders without errors**

Run dev server: `npm run dev`
Navigate to: `http://localhost:3000`
Expected: Home page loads with professional summary, no console errors. Current role and key highlights sections appear (will be empty until resume-data.ts is populated).

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign home page with resume highlights

- Display professional summary from resume data
- Show current role with description and achievements
- Show top 3 work experiences as highlight cards
- Show core expertise areas with related skills
- All data pulled from resumeData object

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Redesign Resume Page

**Files:**
- Modify: `app/resume/page.tsx`

- [ ] **Step 1: Replace the entire Resume page component**

Replace the contents of `/home/duongdn8/profile/app/resume/page.tsx` with:

```typescript
import Link from 'next/link';
import { resumeData } from '@/lib/resume-data';

export const metadata = {
  title: 'Resume | Dao Nguyen Duong',
  description: 'Resume and CV for Dao Nguyen Duong - AI Engineer',
};

export default function ResumePage() {
  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '0.5rem',
          margin: '0 0 0.5rem 0'
        }}>
          {resumeData.name}
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#10b981',
          fontWeight: '600',
          marginBottom: '1rem',
          margin: '0 0 1rem 0'
        }}>
          {resumeData.title}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: '#64748b', fontSize: '0.875rem' }}>
          <a href={`mailto:${resumeData.contact.email}`} style={{ color: '#10b981', textDecoration: 'none', fontWeight: '500' }}>
            {resumeData.contact.email}
          </a>
          {resumeData.contact.location && (
            <span>📍 {resumeData.contact.location}</span>
          )}
          {resumeData.contact.github && (
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '500' }}>
              GitHub
            </a>
          )}
          {resumeData.contact.linkedin && (
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '500' }}>
              LinkedIn
            </a>
          )}
        </div>
      </header>

      {/* Summary */}
      {resumeData.summary && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
            Professional Summary
          </h2>
          <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
            {resumeData.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
            Work Experience
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {resumeData.experience.map((exp, idx) => (
              <div
                key={exp.id}
                style={{
                  paddingBottom: '1.5rem',
                  borderBottom: idx === resumeData.experience.length - 1 ? 'none' : '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    {exp.title}
                  </h3>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.9rem', margin: '0 0 0.75rem 0' }}>
                  {exp.company}
                </p>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                  {exp.description}
                </p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8', marginLeft: '1rem', margin: '0.75rem 0 0 1rem' }}>
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx}>• {achievement}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: '#f0fdf4',
                          color: '#166534',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {resumeData.education.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {resumeData.education.map((edu, idx) => (
              <div
                key={edu.id}
                style={{
                  paddingBottom: '1.5rem',
                  borderBottom: idx === resumeData.education.length - 1 ? 'none' : '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    {edu.degree} in {edu.field}
                  </h3>
                  <span style={{ fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                    {edu.year}
                  </span>
                </div>
                <p style={{ color: '#10b981', fontWeight: '600', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>
                  {edu.school}
                </p>
                {edu.details && (
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
            Skills
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {resumeData.skills.map((skillCategory, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem', margin: '0 0 0.75rem 0' }}>
                  {skillCategory.category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {skillCategory.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: '#0f172a'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {resumeData.awards.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
            Awards & Honors
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {resumeData.awards.map((award, idx) => (
              <div
                key={award.id}
                style={{
                  padding: '1rem',
                  backgroundColor: '#fef3c7',
                  border: '1px solid #fcd34d',
                  borderRadius: '0.5rem',
                  borderLeft: '4px solid #f59e0b'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    {award.title}
                  </h3>
                  <span style={{ fontSize: '0.875rem', color: '#92400e', whiteSpace: 'nowrap' }}>
                    {award.date}
                  </span>
                </div>
                <p style={{ color: '#92400e', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                  {award.issuer}
                </p>
                {award.description && (
                  <p style={{ color: '#78350f', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    {award.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Expertise */}
      {resumeData.expertise.length > 0 && (
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>
            Expertise
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {resumeData.expertise.map((exp) => (
              <div
                key={exp.id}
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem'
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', margin: '0 0 0.5rem 0' }}>
                  {exp.area}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                  {exp.description}
                </p>
                {exp.relatedSkills && exp.relatedSkills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.relatedSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: '500'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#10b981',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}
        >
          <span>←</span> Back to home
        </Link>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify Resume page renders without errors**

Run dev server: `npm run dev`
Navigate to: `http://localhost:3000/resume`
Expected: Resume page loads with all section headings visible. Sections will be empty until resume-data.ts is populated with actual data.

- [ ] **Step 3: Commit**

```bash
git add app/resume/page.tsx
git commit -m "feat: redesign resume page to display all resume sections

- Display professional summary, work experience, education
- Show skills organized by category
- Prominently display awards and honors with styled boxes
- Show expertise areas as cards
- All data pulled from resumeData object
- Sections render conditionally (only if data exists)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Create My Life Data Structure

**Files:**
- Create: `lib/life-data.ts`

- [ ] **Step 1: Create life-data.ts with data structure**

Create the file `/home/duongdn8/profile/lib/life-data.ts`:

```typescript
export interface LifePhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  date?: string;
}

export interface LifeData {
  categories: string[];
  photos: LifePhoto[];
}

export const lifeData: LifeData = {
  categories: ["Travel", "Family", "Moments", "Events"],
  photos: [
    // TODO: Populate with actual photos from user
    // {
    //   id: "photo-1",
    //   title: "Photo Title",
    //   category: "Travel",
    //   imageUrl: "/images/life/photo1.jpg",
    //   description: "Optional description",
    //   date: "2024-06"
    // }
  ]
};
```

- [ ] **Step 2: Verify the file is created and TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add lib/life-data.ts
git commit -m "feat: create my life data structure

- Define LifePhoto and LifeData interfaces
- Create lifeData object with placeholder categories
- Ready for population with personal photos and content

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Create My Life Page

**Files:**
- Create: `app/life/page.tsx`

- [ ] **Step 1: Create My Life page component**

Create the file `/home/duongdn8/profile/app/life/page.tsx`:

```typescript
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { lifeData } from '@/lib/life-data';

export default function MyLifePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPhotos = selectedCategory
    ? lifeData.photos.filter((photo) => photo.category === selectedCategory)
    : lifeData.photos;

  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '0.5rem',
          margin: '0 0 0.5rem 0'
        }}>
          My Life
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#64748b',
          lineHeight: '1.6'
        }}>
          Moments from my travels, time with family, and memories along the way.
        </p>
      </header>

      {/* Category Filter */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
          fontSize: '0.75rem',
          fontWeight: '700',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '1rem',
          margin: '0 0 1rem 0'
        }}>
          Filter by Category
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s',
              backgroundColor: selectedCategory === null ? '#10b981' : '#fff',
              color: selectedCategory === null ? '#fff' : '#1f2937',
              ...(selectedCategory === null && { boxShadow: '0 4px 6px rgba(16, 185, 129, 0.15)' }),
              ...(selectedCategory !== null && { border: '1px solid #e5e7eb' })
            }}
          >
            All
          </button>
          {lifeData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: selectedCategory === category ? '#10b981' : '#fff',
                color: selectedCategory === category ? '#fff' : '#1f2937',
                ...(selectedCategory === category && { boxShadow: '0 4px 6px rgba(16, 185, 129, 0.15)' }),
                ...(selectedCategory !== category && { border: '1px solid #e5e7eb' })
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      {filteredPhotos.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          backgroundColor: '#f9fafb',
          borderRadius: '0.5rem'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '1rem'
          }}>
            Coming soon! Gallery content will be added here.
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#9ca3af'
          }}>
            Check back later for photos and memories.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#e5e7eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af'
              }}>
                [Image: {photo.title}]
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#0f172a',
                  marginBottom: '0.5rem',
                  margin: '0 0 0.5rem 0'
                }}>
                  {photo.title}
                </h3>
                {photo.date && (
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#9ca3af',
                    marginBottom: '0.5rem',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {photo.date}
                  </p>
                )}
                {photo.description && (
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                    lineHeight: '1.5'
                  }}>
                    {photo.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', marginTop: '3rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#10b981',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9rem'
          }}
        >
          <span>←</span> Back to home
        </Link>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify My Life page renders**

Run dev server: `npm run dev`
Navigate to: `http://localhost:3000/life`
Expected: Page loads with category filters and empty state message ("Coming soon! Gallery content will be added here.")

- [ ] **Step 3: Commit**

```bash
git add app/life/page.tsx
git commit -m "feat: create my life page with category filters

- Add category filter buttons (Travel, Family, Moments, Events)
- Display photo gallery grid filtered by category
- Show empty state for now (ready to be populated)
- Match styling with Blog page structure
- Ready for images and personal content

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Update Header Navigation

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Add My Life tab to navigation**

In `/home/duongdn8/profile/components/Header.tsx`, find the `<nav>` section (around line 47) and replace it with:

```typescript
            {/* Navigation */}
            <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
              <Link href="/" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Home
              </Link>
              <Link href="/blog" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Blog
              </Link>
              <Link href="/resume" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                Resume
              </Link>
              <Link href="/life" className="nav-link" style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                textDecoration: 'none'
              }}>
                My Life
              </Link>
              <a
                href="https://github.com/duongkstn"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a>
            </nav>
```

- [ ] **Step 2: Verify Header renders with new tab**

Run dev server: `npm run dev`
Navigate to: `http://localhost:3000`
Expected: Header shows all tabs: Home, Blog, Resume, My Life, GitHub. "My Life" link navigates to `/life` when clicked.

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: add my life tab to header navigation

- Add 'My Life' link between Resume and GitHub
- Maintains consistent tab styling and spacing
- Link navigates to /life page

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Self-Review

**Spec coverage:**
- ✅ Task 1: Create resume-data.ts with all resume sections (experience, education, skills, awards, expertise)
- ✅ Task 2: Redesign Home page to show resume highlights, current role, and expertise
- ✅ Task 3: Redesign Resume page to display all sections in order
- ✅ Task 4: Create life-data.ts structure
- ✅ Task 5: Create My Life page with category filters
- ✅ Task 6: Update Header navigation
- ✅ All sections implement "Dao Nguyen Duong" consistently
- ✅ Data structure is single source of truth

**Placeholder scan:**
- ✅ No "TBD" or "TODO" in implementation code (only in data placeholders where user must populate)
- ✅ All code is complete and ready to run

**Type consistency:**
- ✅ All TypeScript interfaces match across files
- ✅ Function names consistent: `getTopExperiences()`, `getCurrentRole()`, `getTopExpertiseAreas()`
- ✅ Property names match throughout

**Ambiguity check:**
- ✅ Data structure is explicit and clear
- ✅ Component props and data flow are unambiguous
- ✅ No conflicting requirements or interpretations

---

## Next: Populate Resume Data

**IMPORTANT:** The implementation is now complete, but `resume-data.ts` needs to be populated with your actual resume information from the Google Drive link.

**To populate, edit `/home/duongdn8/profile/lib/resume-data.ts` and fill in:**
1. `experience[]` — all work experiences (most recent first)
2. `education[]` — all education entries
3. `skills[]` — all skills organized by category
4. `awards[]` — all honors and awards
5. `expertise[]` — expertise areas

All sections use the exact structure defined in Task 1. Once populated, the Home and Resume pages will automatically display all content.

---

## Plan Complete!

Plan saved to: `docs/superpowers/plans/2026-06-15-portfolio-redesign-phase1.md`

**Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
