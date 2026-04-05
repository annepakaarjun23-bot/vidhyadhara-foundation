import './globals.css'

export const metadata = {
  title: 'Vidhyadhara Foundation — Education Is Our Weapon',
  description: 'A non-profit educational foundation based in Nalgonda, Telangana, providing free academic support, scholarships, and mentorship to rural children.',
  keywords: 'Vidhyadhara Foundation, education, Nalgonda, Telangana, children, scholarship, free coaching, rural education',
  openGraph: {
    title: 'Vidhyadhara Foundation',
    description: 'Empowering children through quality education in Nalgonda, Telangana.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
