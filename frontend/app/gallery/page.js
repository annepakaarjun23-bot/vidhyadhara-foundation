"use client"

import { useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle } from '../../components/ui'

/*
  NOTE: Move this metadata block to your app/gallery/layout.js file
  since "use client" pages cannot export metadata.

  // app/gallery/layout.js
  export const metadata = {
    title: 'Gallery — Vidhyadhara Foundation',
    description: 'Photos and videos from our camps, programs, and community events at Vidhyadhara Foundation.',
  }
*/

const media = [
  // ── Existing images ──
  { type: 'image', src: '/gallery/image9.jpeg', caption: 'Alumni Meet 2025', aspect: '4/3' },
  { type: 'image', src: '/gallery/image4.jpeg', caption: 'Program Ceremony', aspect: '4/3' },
  { type: 'image', src: '/gallery/image23.jpeg', caption: 'Foundation Events', aspect: '4/3' },
  { type: 'image', src: '/gallery/image14.jpeg', caption: 'Foundation Group Photo', aspect: '4/3' },
  { type: 'image', src: '/gallery/image8.jpeg', caption: 'Connecting People', aspect: '4/3' },
  { type: 'image', src: '/gallery/image6.jpeg', caption: 'Summer Camp 2025', aspect: '4/3' },
  { type: 'image', src: '/gallery/image7.jpeg', caption: 'Morning Mindfulness Session', aspect: '4/3' },
  { type: 'image', src: '/gallery/image3.jpeg', caption: 'Evening Study Hour', aspect: '4/3' },
  { type: 'image', src: '/gallery/image5.jpeg', caption: 'Summer Camp Night Study', aspect: '4/3' },
  { type: 'image', src: '/gallery/image17.jpeg', caption: 'Summer Camp 2024', aspect: '4/3' },
  { type: 'image', src: '/gallery/image24.jpeg', caption: 'Last day at the Camp', aspect: '4/3' },
  { type: 'image', src: '/gallery/image22.jpeg', caption: 'Foundation Events', aspect: '4/3' },

  // ── Summer Camp 2026 images ──
  { type: 'image', src: '/gallery/image26.jpeg', caption: 'A meaningful beginning as children and parents gather to learn', aspect: '1/1' },
  { type: 'image', src: '/gallery/image27.jpeg', caption: 'Building connections and creating memories with our valued guests.', aspect: '1/1' },
  { type: 'image', src: '/gallery/image25.jpeg', caption: 'A day of learning and inspiration at Osmania University.', aspect: '1/1' },
  { type: 'image', src: '/gallery/image28.jpeg', caption: 'Welcoming guests who support and motivate our children dreams and aspirations.', aspect: '1/1' },
  { type: 'image', src: '/gallery/image29.jpeg', caption: 'A memorable milestone during our Summer Camp educational tour.', aspect: '1/1' },
  { type: 'image', src: '/gallery/image30.jpeg', caption: 'Empowering young learners with resources, motivation, and care.', aspect: '1/1' },

  // ── Videos ──
  {
    type: 'video',
    src: '/videos/video1.mp4',
    caption: 'Guiding young minds through an inspiring educational journey at Osmania University.',
    aspect: '16/9',
    poster: '/gallery/image25.jpeg',
  },
  {
    type: 'video',
    src: '/videos/video2.mp4',
    caption: 'A glimpse into the joy, growth, and memories created during Summer Camp.',
    aspect: '16/9',
    poster: '/gallery/image25.jpeg',
  },
]

function VideoPlayer({ src, poster }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scroll into view: try to play with audio
            video.muted = false
            const playPromise = video.play()
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Browser blocked unmuted autoplay → fallback muted
                video.muted = true
                video.play()
              })
            }
          } else {
            // Scroll out of view: pause
            video.pause()
          }
        })
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  const togglePlay = (e) => {
    e.stopPropagation()
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      // User clicked to play → allow audio
      video.muted = false
      video.play().catch(() => {
        video.muted = true
        video.play()
      })
    } else {
      video.pause()
    }
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        loop
        preload="metadata"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Invisible overlay — click anywhere on the video to play/pause */}
      <div
        onClick={togglePlay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          zIndex: 2,
          background: 'transparent',
        }}
      />
    </div>
  )
}

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
              {media.map((item, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #dce6f0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <div style={{
                    aspectRatio: item.aspect || '4/3',
                    overflow: 'hidden',
                    background: '#e8eef6',
                    position: 'relative',
                  }}>
                    {item.type === 'video' ? (
                      <VideoPlayer src={item.src} poster={item.poster} />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.caption}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div style={{
                    padding: '12px 16px',
                    borderTop: '1px solid #dce6f0',
                    background: '#ffffff',
                  }}>
                    <p style={{
                      fontSize: '0.82rem',
                      color: '#4a5568',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      {item.caption}
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