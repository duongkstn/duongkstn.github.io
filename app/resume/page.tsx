import Link from 'next/link';
import { resumeData } from '@/lib/resume-data';

export const metadata = {
  title: 'Resume | Dao Nguyen Duong',
  description: 'Resume and CV for Dao Nguyen Duong - AI Engineer & Software Engineer',
};

// Color constants
const colors = {
  darkBlue: '#0f172a',
  slateGray: '#475569',
  emerald: '#10b981',
  lightSlate: '#64748b',
  border: '#e2e8f0',
  lightCyan: '#e0f2fe',
  darkCyan: '#7dd3fc',
  darkBlueText: '#0c4a6e',
  lightGreen: '#f0fdf4',
  greenBorder: '#bbf7d0',
  amberBg: '#fef3c7',
  amberBorder: '#fde68a',
  amberAccent: '#f59e0b',
  amberText: '#92400e',
  amberDark: '#78350f',
  lightBg: '#f8fafc',
  lightBlueBg: '#dbeafe',
  lightBlueBorder: '#93c5fd',
  darkBlueAlt: '#1e40af',
};

// Style constants
const styles = {
  container: {
    maxWidth: '900px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  header: {
    marginBottom: '3rem',
    paddingTop: '2rem',
  },
  h1: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: colors.darkBlue,
    marginBottom: '0.5rem',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: colors.darkBlue,
    marginBottom: '1.5rem',
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: colors.darkBlue,
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: colors.darkBlue,
    marginBottom: '0.75rem',
  },
  body: {
    color: colors.slateGray,
    fontSize: '0.9rem',
    lineHeight: '1.8',
  },
  bodySmall: {
    color: colors.slateGray,
    fontSize: '0.9rem',
    lineHeight: '1.6',
  },
  date: {
    fontSize: '0.875rem',
    color: colors.lightSlate,
    whiteSpace: 'nowrap',
  },
  techTag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: colors.lightCyan,
    border: `1px solid ${colors.darkCyan}`,
    borderRadius: '0.375rem',
    fontSize: '0.8rem',
    color: colors.darkBlueText,
    fontWeight: '500',
  },
  skillTag: {
    padding: '0.5rem 1rem',
    backgroundColor: colors.lightGreen,
    border: `1px solid ${colors.greenBorder}`,
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: colors.darkBlue,
  },
  relatedSkillTag: {
    padding: '0.25rem 0.75rem',
    backgroundColor: colors.lightBlueBg,
    border: `1px solid ${colors.lightBlueBorder}`,
    borderRadius: '0.375rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    color: colors.darkBlueAlt,
  },
  awardBox: {
    padding: '1rem',
    backgroundColor: colors.amberBg,
    border: `1px solid ${colors.amberBorder}`,
    borderLeft: `4px solid ${colors.amberAccent}`,
    borderRadius: '0.375rem',
  },
  expertiseBox: {
    padding: '1.5rem',
    backgroundColor: colors.lightBg,
    border: `1px solid ${colors.border}`,
    borderRadius: '0.5rem',
  },
};

export default function ResumePage() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.h1}>
          {resumeData.name}
        </h1>
        <p style={{
          fontSize: '1rem',
          color: colors.emerald,
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          {resumeData.title}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: colors.lightSlate, fontSize: '0.875rem' }}>
          <a href={`mailto:${resumeData.contact.email}`} style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
            {resumeData.contact.email}
          </a>
          {resumeData.contact.location && (
            <span style={{ color: colors.slateGray, fontWeight: '500' }}>
              {resumeData.contact.location}
            </span>
          )}
          {resumeData.contact.github && (
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
              GitHub
            </a>
          )}
          {resumeData.contact.linkedin && (
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: colors.emerald, textDecoration: 'none', fontWeight: '500' }}>
              LinkedIn
            </a>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ ...styles.h2, marginBottom: '1rem' }}>Professional Summary</h2>
        <p style={{ color: colors.slateGray, lineHeight: '1.8', fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
          {resumeData.summary}
        </p>
      </section>

      {/* Work Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={styles.h2}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {resumeData.experience.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                paddingBottom: index !== resumeData.experience.length - 1 ? '1.5rem' : '0',
                borderBottom: index !== resumeData.experience.length - 1 ? `1px solid ${colors.border}` : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={styles.h3}>
                  {exp.title}
                </h3>
                <span style={styles.date}>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p style={{ color: colors.emerald, fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                {exp.company}
              </p>
              <p style={styles.body}>
                {exp.description}
              </p>
              {exp.achievements && exp.achievements.length > 0 && (
                <>
                  <p style={{ fontWeight: '600', color: colors.darkBlue, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Key Achievements:
                  </p>
                  <ul style={{ color: colors.slateGray, fontSize: '0.9rem', lineHeight: '1.8', marginLeft: '1rem', marginBottom: '0.75rem' }}>
                    {exp.achievements.map((achievement) => (
                      <li key={achievement}>• {achievement}</li>
                    ))}
                  </ul>
                </>
              )}
              {exp.technologies && exp.technologies.length > 0 && (
                <>
                  <p style={{ fontWeight: '600', color: colors.darkBlue, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Technologies:
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={styles.techTag}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={styles.h2}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.education.map((edu, idx) => (
            <div key={edu.id} style={{ paddingBottom: '1.5rem', borderBottom: idx === resumeData.education.length - 1 ? 'none' : `1px solid ${colors.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={styles.h3}>
                  {edu.degree} in {edu.field}
                </h3>
                <span style={styles.date}>
                  {edu.year}
                </span>
              </div>
              <p style={{ color: colors.emerald, fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                {edu.school}
              </p>
              {edu.details && (
                <p style={styles.bodySmall}>
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={styles.h2}>Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.skills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h3 style={styles.sectionTitle}>
                {skillCategory.category}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {skillCategory.items.map((skill) => (
                  <span
                    key={skill}
                    style={styles.skillTag}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Honors */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={styles.h2}>Awards & Honors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {resumeData.awards.map((award) => (
            <div
              key={award.id}
              style={styles.awardBox}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={styles.sectionTitle}>
                  {award.title}
                </h3>
                <span style={styles.date}>
                  {award.date}
                </span>
              </div>
              <p style={{ color: colors.amberText, fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                {award.issuer}
              </p>
              {award.description && (
                <p style={{ color: colors.amberDark, fontSize: '0.9rem', lineHeight: '1.6' }}>
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

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

      {/* Footer */}
      <section style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '2rem', marginBottom: '2rem' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: colors.emerald,
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
