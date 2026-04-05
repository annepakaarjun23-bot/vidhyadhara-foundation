'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/student_register', label: 'Student Register' },
  { href: '/volunteer_register', label: 'Volunteer Register' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#0d2a4e',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(93,169,233,0.15)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
    }}>
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        {/* Brand */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.8)',
            overflow: 'hidden',
            flexShrink: 0,
            background: '#ffffff',
          }}>
            <img
              src="/logo.jpeg"
              alt="Vidhyadhara Foundation logo"
              width={52}
              height={52}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: '0.9rem',
              color: '#ffffff',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
              textTransform: 'uppercase',
            }}>
              Vidhyadhara Foundation
            </div>
            <div style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: 'Open Sans, sans-serif',
              letterSpacing: '0.06em',
            }}>
              Education Is Our Weapon
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{
          alignItems: 'center',
          gap: '2px',
        }}>
          {navLinks.map(link => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 12px',
                  fontSize: '0.8rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.72)',
                  letterSpacing: '0.02em',
                  borderRadius: '4px',
                  background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                  borderBottom: isActive ? '2px solid #5da9e9' : '2px solid transparent',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="2" x2="20" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="2" x2="2" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
              <line x1="0" y1="1" x2="24" y2="1" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="0" y1="9" x2="24" y2="9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="0" y1="17" x2="24" y2="17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          position: 'absolute',
          top: '72px',
          left: 0,
          right: 0,
          background: '#15407a',
          borderTop: '1px solid rgba(93,169,233,0.2)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          zIndex: 999,
          display: 'block',
        }}>
          {navLinks.map(link => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '14px 24px',
                  fontSize: '0.88rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#5da9e9' : 'rgba(255,255,255,0.85)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  background: isActive ? 'rgba(93,169,233,0.08)' : 'transparent',
                  borderLeft: isActive ? '3px solid #5da9e9' : '3px solid transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
