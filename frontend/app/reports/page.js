import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { SectionLabel, SectionTitle } from '../../components/ui'

export const metadata = {
  title: 'Reports — Vidhyadhara Foundation',
  description: 'Annual reports, camp reports, and event summaries from Vidhyadhara Foundation.',
}

const reports = [
  {
    title: '2024 Dasara Camp',
    description: 'Full report on the Dasara Alumni Meet held in 2024, covering event proceedings, attendee details, and key takeaways.',
    filename: 'dasara_alumni_meet_2024.pdf',
    size: 'PDF',
  },
  {
    title: '2025 Summer Camp',
    description: 'Comprehensive documentation of the Summer Camp 2025 including schedules, subjects taught, volunteer contributions, and student outcomes.',
    filename: 'summer_camp_2025_report.pdf',
    size: 'PDF',
  },
  {
    title: '2025 Dasara Camp',
    description: 'Detailed report on the Dasara Holiday Camp 2025, covering revision sessions, board preparation workshops, and student feedback.',
    filename: 'dasara_report_2025.pdf',
    size: 'PDF',
  },
  {
    title: '2026 Summer Camp',
    description: 'Complete report on Summer Camp 2026 including academic sessions, guest interactions, the Osmania University visit, and camp outcomes.',
    filename: 'summer_camp_2026_report.pdf',
    size: 'PDF',
  },
  {
    title: '2026 Osmania University Visit - Summer Camp',
    description: 'Report documenting the educational visit conducted in 2026, including itinerary, learning objectives, and participant experiences.',
    filename: 'ou_visit_2026_report.pdf',
    size: 'PDF',
  },
]

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a4d8f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Page Header */}
        <div style={{ background: '#0d2a4e', padding: '52px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Documents</SectionLabel>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '12px',
            }}>
              Reports
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '0.95rem',
              maxWidth: '540px',
            }}>
              Download official reports, camp summaries, and event documentation from Vidhyadhara Foundation.
            </p>
          </div>
        </div>

        {/* Reports List */}
        <section style={{ background: '#f0f5fc', padding: '64px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
            <SectionLabel>Available Reports</SectionLabel>
            <SectionTitle>Download Documents</SectionTitle>

            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {reports.map((report, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #dce6f0',
                    borderRadius: '4px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    flexWrap: 'wrap',
                  }}
                >
                  {/* File Icon */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '4px',
                    background: '#f0f5fc',
                    border: '1px solid #dce6f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FileIcon />
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h3 style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: '#0d2a4e',
                      marginBottom: '6px',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: 1.3,
                    }}>
                      {report.title}
                    </h3>
                    <p style={{
                      fontSize: '0.84rem',
                      color: '#4a5568',
                      lineHeight: 1.7,
                      marginBottom: '4px',
                    }}>
                      {report.description}
                    </p>
                    <span style={{
                      fontSize: '0.72rem',
                      color: '#1a4d8f',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                      {report.size}
                    </span>
                  </div>

                  {/* Download Button */}
                  <a
                    href={`/reports/${report.filename}`}
                    download={report.filename}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: '#15407a',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      fontFamily: 'Inter, sans-serif',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    <DownloadIcon />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Note */}
        <section style={{ background: '#ffffff', padding: '48px 0', borderBottom: '1px solid #dce6f0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <p style={{
              fontSize: '0.85rem',
              color: '#4a5568',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              All reports are in PDF format and can be downloaded directly. If you face any issues downloading a document, please <a href="/contact" style={{ color: '#1a4d8f', fontWeight: 600, textDecoration: 'none' }}>contact us</a>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}