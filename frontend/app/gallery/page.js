import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle } from '../../components/ui'

export const metadata = {
  title: 'Gallery — Vidhyadhara Foundation',
  description: 'Photos from our camps, programs, and community events at Vidhyadhara Foundation.',
}

const images = [
  { src: '/gallery/image9.jpeg', caption: 'Alumni Meet 2025' },
  { src: '/gallery/image4.jpeg', caption: 'Program Ceremony'},
  { src: '/gallery/image23.jpeg', caption: 'Foundation Events' },
  { src: '/gallery/image14.jpeg', caption: 'Foundation Group Photo' },
  { src: '/gallery/image8.jpeg', caption: 'Connecting People' },
  { src: '/gallery/image6.jpeg', caption: 'Summer Camp 2025'  },
  { src: '/gallery/image7.jpeg', caption: 'Morning Mindfulness Session' },
  { src: '/gallery/image3.jpeg', caption: 'Evening Study Hour' },
  { src: '/gallery/image5.jpeg', caption: 'Summer Camp Night Study' },
  { src: '/gallery/image17.jpeg', caption: 'Summer Camp 2024' },
  { src: '/gallery/image24.jpeg', caption: 'Last day at the Camp' },
  { src: '/gallery/image22.jpeg', caption: 'Foundation Events' },
]

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Gallery</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              From Our Camps &amp; Events
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '500px' }}>
              A visual record of the work we have done and the children we have served across Nalgonda.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}>
              {images.map((img, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #dce6f0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#e8eef6' }}>
                    <img
                      src={img.src}
                      alt={img.caption}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{
                    padding: '12px 16px',
                    borderTop: '1px solid #dce6f0',
                    background: '#ffffff',
                  }}>
                    <p style={{ fontSize: '0.82rem', color: '#4a5568', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section style={{ background: '#0d2a4e', padding: '64px 0' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <div style={{
              width: '40px',
              height: '3px',
              background: '#5da9e9',
              margin: '0 auto 32px',
            }} />
            <blockquote style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontStyle: 'italic',
              color: '#ffffff',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              marginBottom: '24px',
            }}>
              &ldquo;When you educate a child, you change the future of an entire family. Every photograph here represents a step taken in that direction.&rdquo;
            </blockquote>
            <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
              — Vidhyadhara Foundation
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
