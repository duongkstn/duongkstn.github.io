'use client';

import { useState } from 'react';
import Link from 'next/link';
import { lifeData } from '@/lib/life-data';

export default function LifePageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPhotos = selectedCategory
    ? lifeData.photos.filter((photo) => photo.category === selectedCategory)
    : lifeData.photos;

  return (
    <div style={{ maxWidth: '900px', marginRight: 'auto', marginLeft: 'auto' }}>
      {/* Header Section */}
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
          My Life
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#475569',
          lineHeight: '1.6',
          maxWidth: '600px'
        }}>
          Moments from my travels, time with family, and memories along the way.
        </p>
      </header>

      {/* Category Filter */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{
          fontSize: '0.75rem',
          fontWeight: 'bold',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '1rem'
        }}>
          Filter by Category
        </h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{
              paddingLeft: '1.25rem',
              paddingRight: '1.25rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backgroundColor: selectedCategory === null ? '#10b981' : 'white',
              color: selectedCategory === null ? 'white' : '#1f2937',
              borderWidth: selectedCategory === null ? '0' : '1px',
              borderColor: selectedCategory === null ? 'transparent' : '#e5e7eb',
              boxShadow: selectedCategory === null ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
            }}
          >
            All
          </button>
          {lifeData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: selectedCategory === category ? '#10b981' : 'white',
                color: selectedCategory === category ? 'white' : '#1f2937',
                borderWidth: selectedCategory === category ? '0' : '1px',
                borderColor: selectedCategory === category ? 'transparent' : '#e5e7eb',
                boxShadow: selectedCategory === category ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div style={{ marginBottom: '3rem' }}>
        {filteredPhotos.length === 0 ? (
          <p style={{
            color: '#6b7280',
            fontSize: '1.125rem',
            lineHeight: '1.6',
            textAlign: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem'
          }}>
            Coming soon! Gallery content will be added here. Check back later for photos and memories.
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {/* Image Placeholder */}
                <div style={{
                  backgroundColor: '#e5e7eb',
                  height: '250px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontStyle: 'italic'
                }}>
                  [Image: {photo.title}]
                </div>

                {/* Photo Info */}
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'white'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    {photo.title}
                  </h3>
                  {photo.date && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#9ca3af',
                      marginBottom: '0.5rem'
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
      </div>

      {/* Footer */}
      <footer style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        borderTop: '1px solid #e5e7eb',
        textAlign: 'center'
      }}>
        <Link href="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          color: '#10b981',
          textDecoration: 'none',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'gap 0.3s ease'
        }}>
          ← Back to Home
        </Link>
      </footer>
    </div>
  );
}
