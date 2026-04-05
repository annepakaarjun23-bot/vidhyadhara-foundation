'use client'
import Link from 'next/link'

export function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'inline-block',
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#1a4d8f',
      borderLeft: '3px solid #1a4d8f',
      paddingLeft: '10px',
      marginBottom: '12px',
      fontFamily: 'Inter, sans-serif',
    }}>
      {children}
    </div>
  )
}

export function SectionTitle({ children, light }) {
  return (
    <h2 style={{
      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
      fontWeight: 800,
      color: light ? '#ffffff' : '#0d2a4e',
      lineHeight: 1.2,
      marginBottom: '16px',
      fontFamily: 'Inter, sans-serif',
    }}>
      {children}
    </h2>
  )
}

export function Btn({ children, href, onClick, variant = 'solid', type = 'button', disabled, style }) {
  const base = {
    display: 'inline-block',
    borderRadius: '4px',
    padding: '11px 28px',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '2px solid',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.02em',
    transition: 'all 0.15s ease',
    textAlign: 'center',
    opacity: disabled ? 0.65 : 1,
    ...style,
  }
  const variants = {
    solid: { background: '#1a4d8f', color: '#ffffff', borderColor: '#1a4d8f' },
    outline: { background: 'transparent', color: '#1a4d8f', borderColor: '#1a4d8f' },
    white: { background: '#ffffff', color: '#1a4d8f', borderColor: '#ffffff' },
  }
  const combined = { ...base, ...variants[variant] }

  if (href) {
    return <Link href={href} style={combined}>{children}</Link>
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={combined}>
      {children}
    </button>
  )
}

export function ProgramCard({ title, description, outcome }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #dce6f0',
      borderTop: '3px solid #1a4d8f',
      borderRadius: '4px',
      padding: '24px',
    }}>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#0d2a4e',
        marginBottom: '10px',
        fontFamily: 'Inter, sans-serif',
      }}>{title}</h3>
      <p style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.7, marginBottom: outcome ? '12px' : 0 }}>
        {description}
      </p>
      {outcome && (
        <p style={{ fontSize: '0.82rem', color: '#2d6a4f', fontWeight: 600 }}>{outcome}</p>
      )}
    </div>
  )
}

export function StatBlock({ number, label, light }) {
  return (
    <div style={{ textAlign: 'center', padding: '16px' }}>
      <div style={{
        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
        fontWeight: 800,
        color: light ? '#5da9e9' : '#1a4d8f',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1,
        marginBottom: '6px',
      }}>{number}</div>
      <div style={{ fontSize: '0.83rem', color: light ? 'rgba(255,255,255,0.8)' : '#4a5568', letterSpacing: '0.03em' }}>
        {label}
      </div>
    </div>
  )
}

export function Field({ label, name, type = 'text', value, onChange, placeholder, required, rows }) {
  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '0.88rem',
    border: '1px solid #dce6f0',
    borderRadius: '4px',
    fontFamily: 'Open Sans, sans-serif',
    color: '#1a1a1a',
    background: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.15s',
  }
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{
        display: 'block',
        fontSize: '0.83rem',
        fontWeight: 600,
        color: '#0d2a4e',
        marginBottom: '6px',
        fontFamily: 'Inter, sans-serif',
      }}>
        {label}{required && <span style={{ color: '#c0392b', marginLeft: '3px' }}>*</span>}
      </label>
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          style={inputStyle}
        />
      )}
    </div>
  )
}
