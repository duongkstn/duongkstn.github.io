import Link from 'next/link';
import { resumeData } from '@/lib/resume-data';

export const metadata = {
  title: 'Resume | Dao Nguyen Duong',
  description: 'Resume and CV for Dao Nguyen Duong - AI Engineer & Software Engineer',
};

export default function ResumePage() {
  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto', paddingLeft: '1rem', paddingRight: '1rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '0.5rem'
        }}>
          {resumeData.name}
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#10b981',
          fontWeight: '600',
          marginBottom: '1rem'
        }}>
          {resumeData.title}
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: '#64748b', fontSize: '0.875rem' }}>
          <a href={`mailto:${resumeData.contact.email}`} style={{ color: '#10b981', textDecoration: 'none', fontWeight: '500' }}>
            {resumeData.contact.email}
          </a>
          {resumeData.contact.phone && (
            <span style={{ color: '#475569', fontWeight: '500' }}>
              {resumeData.contact.phone}
            </span>
          )}
          {resumeData.contact.location && (
            <span style={{ color: '#475569', fontWeight: '500' }}>
              {resumeData.contact.location}
            </span>
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

      {/* Professional Summary */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>Professional Summary</h2>
        <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '0.95rem', whiteSpace: 'pre-wrap' }}>
          {resumeData.summary}
        </p>
      </section>

      {/* Work Experience */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {resumeData.experience.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                paddingBottom: index !== resumeData.experience.length - 1 ? '1.5rem' : '0',
                borderBottom: index !== resumeData.experience.length - 1 ? '1px solid #e2e8f0' : 'none'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                  {exp.title}
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.9rem' }}>
                {exp.company}
              </p>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '0.75rem' }}>
                {exp.description}
              </p>
              {exp.achievements && exp.achievements.length > 0 && (
                <>
                  <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Key Achievements:
                  </p>
                  <ul style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.8', marginLeft: '1rem', marginBottom: '0.75rem' }}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>• {achievement}</li>
                    ))}
                  </ul>
                </>
              )}
              {exp.technologies && exp.technologies.length > 0 && (
                <>
                  <p style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Technologies:
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#e0f2fe',
                          border: '1px solid #7dd3fc',
                          borderRadius: '0.375rem',
                          fontSize: '0.8rem',
                          color: '#0c4a6e',
                          fontWeight: '500'
                        }}
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
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.education.map((edu) => (
            <div key={edu.id} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                  {edu.degree} in {edu.field}
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {edu.year}
                </span>
              </div>
              <p style={{ color: '#10b981', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
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

      {/* Skills */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Skills</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.skills.map((skillCategory) => (
            <div key={skillCategory.category}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                {skillCategory.category}
              </h3>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {skillCategory.items.map((skill) => (
                  <span
                    key={skill}
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

      {/* Awards & Honors */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Awards & Honors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {resumeData.awards.map((award) => (
            <div
              key={award.id}
              style={{
                padding: '1rem',
                backgroundColor: '#fef3c7',
                border: '1px solid #fde68a',
                borderLeft: '4px solid #f59e0b',
                borderRadius: '0.375rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a' }}>
                  {award.title}
                </h3>
                <span style={{ fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                  {award.date}
                </span>
              </div>
              <p style={{ color: '#92400e', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
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

      {/* Expertise */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.5rem' }}>Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.75rem' }}>
                {exp.area}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                {exp.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {exp.relatedSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#dbeafe',
                      border: '1px solid #93c5fd',
                      borderRadius: '0.375rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#1e40af'
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

      {/* Footer */}
      <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', marginBottom: '2rem' }}>
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
