'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle, Btn, Field } from '../../components/ui'

const CLASS_OPTIONS = [
  'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8',
  'Class 9', 'Class 10',
  'Class 11 — Science (MPC)', 'Class 11 — Science (BiPC)',
  'Class 11 — Commerce', 'Class 11 — Arts / Humanities',
  'Class 12 — Science (MPC)', 'Class 12 — Science (BiPC)',
  'Class 12 — Commerce', 'Class 12 — Arts / Humanities',
  'Other',
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  class: '',
  school: '',
  address: '',
  reason: '',
}

export default function StudentRegisterPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/register-student`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            firstName: form.firstName.trim(),
            lastName: form.lastName.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            school: form.school.trim(),
            address: form.address.trim(),
            reason: form.reason.trim(),
          }),
          signal: controller.signal,
        }
      )
      clearTimeout(timeoutId)

      const contentType = res.headers.get('content-type') || ''
      if (!contentType.includes('application/json')) {
        throw new Error('Server returned an unexpected response. Please try again.')
      }

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Registration failed. Please try again.')
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      clearTimeout(timeoutId)
      if (err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.')
      } else if (err.message === 'Failed to fetch') {
        setErrorMsg('Could not connect to the server. Please check your internet connection.')
      } else {
        setErrorMsg(err.message)
      }
      setStatus('error')
    }
  }

  return (
    <>
      <Navbar />
      <main>

        {/* Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Join a Program</SectionLabel>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
              Student Registration
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', maxWidth: '520px' }}>
              Register your interest for our free academic programs. We will contact you with details for the next upcoming camp.
            </p>
          </div>
        </div>

        <section style={{ background: '#f0f5fc', padding: '64px 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>

            {status === 'success' ? (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #2d6a4f',
                borderRadius: '4px',
                padding: '40px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#f0faf5',
                  border: '2px solid #2d6a4f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0d2a4e', fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>
                  Registration Submitted
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.75, marginBottom: '28px' }}>
                  Thank you for registering with Vidhyadhara Foundation. We have received your application and will contact you with details about our upcoming program. Registration is free — no further action is needed.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    background: 'none',
                    border: '1px solid #dce6f0',
                    borderRadius: '4px',
                    padding: '9px 20px',
                    fontSize: '0.83rem',
                    color: '#4a5568',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Register Another Student
                </button>
              </div>
            ) : (
              <div style={{
                background: '#ffffff',
                border: '1px solid #dce6f0',
                borderTop: '3px solid #1a4d8f',
                borderRadius: '4px',
                padding: '36px 32px',
              }}>
                <div style={{ marginBottom: '28px' }}>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0d2a4e', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>
                    Student Registration Form
                  </h2>
                  <p style={{ fontSize: '0.84rem', color: '#4a5568', lineHeight: 1.7 }}>
                    Fields marked with <span style={{ color: '#c0392b' }}>*</span> are required. This registration is completely free.
                  </p>
                </div>

                {status === 'error' && (
                  <div style={{
                    background: '#fef5f5',
                    border: '1px solid #fbc8c8',
                    borderLeft: '3px solid #c0392b',
                    borderRadius: '0 4px 4px 0',
                    padding: '12px 16px',
                    marginBottom: '24px',
                    fontSize: '0.85rem',
                    color: '#7f1d1d',
                  }}>
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 20px' }}>
                    <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
                    <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange}/>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0 20px' }}>
                    <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="@gmail.com" />
                    <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange}/>
                  </div>

                  {/* Class Dropdown */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.83rem',
                      fontWeight: 600,
                      color: '#0d2a4e',
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      Class / Grade <span style={{ color: '#c0392b' }}>*</span>
                    </label>
                    <select
                      name="class"
                      value={form.class}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        fontSize: '0.88rem',
                        border: '1px solid #dce6f0',
                        borderRadius: '4px',
                        fontFamily: 'Open Sans, sans-serif',
                        color: form.class ? '#1a1a1a' : '#9ca3af',
                        background: '#ffffff',
                        outline: 'none',
                      }}
                    >
                      <option value="">Select your class</option>
                      {CLASS_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <Field label="School Name" name="school" value={form.school} onChange={handleChange} placeholder="Optional — name of your school" />
                  <Field label="Home Address" name="address" value={form.address} onChange={handleChange} required placeholder="Village/Town, District, Pincode" />
                  <Field label="Why do you want to join?" name="reason" value={form.reason} onChange={handleChange} rows={4} required placeholder="Tell us briefly about yourself and why you'd like to attend..." />

                  <div style={{ marginTop: '8px' }}>
                    <Btn
                      type="submit"
                      variant="solid"
                      disabled={status === 'loading'}
                      style={{ minWidth: '180px' }}
                    >
                      {status === 'loading' ? 'Submitting...' : 'Submit Registration'}
                    </Btn>
                    {status === 'loading' && (
                      <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: '#4a5568' }}>
                        Please wait...
                      </span>
                    )}
                  </div>
                </form>
              </div>
            )}

            <div style={{
              background: '#ffffff',
              border: '1px solid #dce6f0',
              borderLeft: '3px solid #5da9e9',
              borderRadius: '0 4px 4px 0',
              padding: '16px 20px',
              marginTop: '20px',
            }}>
              <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.7 }}>
                <strong style={{ color: '#0d2a4e' }}>Note:</strong> All Vidhyadhara Foundation programs are completely free of charge. We will never ask for payment. If you face any issues with this form, contact us at{' '}
                <a href="tel:+917799355803" style={{ color: '#1a4d8f', fontWeight: 600 }}>+91 7799355803</a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
