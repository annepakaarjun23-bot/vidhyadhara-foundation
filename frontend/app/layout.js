import './globals.css'

export const metadata = {
  title: 'Vidhyadhara Foundation — Education Is Our Weapon',
  description: 'Vidhyadhara Foundation (VD Foundation Haliya) is a free non-profit educational foundation in Nalgonda, Telangana. Free summer camps, scholarships, and mentorship for rural children in Haliya.',
  keywords: 'vdfoundationhaliya, Vidhyadhara Foundation Haliya, vdfoundationhaliya, vdfoundationNalgondahaliya, children scholarship Telangana, free coaching Haliya, rural education Nalgonda, summer camp Nalgonda',
  authors: [{ name: 'Vidhyadhara Foundation' }],
  creator: 'Vidhyadhara Foundation',
  openGraph: {
    title: 'Vidhyadhara Foundation — Free Education for Rural Children',
    description: 'Free academic support, scholarships and mentorship for children in Nalgonda, Telangana. Summer camps, winter coaching and career guidance at no cost.',
    url: 'https://www.vdfoundationhaliya.co.in/',
    siteName: 'vdfoundationhaliya',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/public/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vidhyadhara Foundation — Education Is Our Weapon',
      },
    ],
  },
  verification: {
    google: 'ebyrQ98oyR2vOr9BQIqNFfJmPl116xyKSdafbvmAZhM',
  },
  metadataBase: new URL('https://www.vdfoundationhaliya.co.in/'),
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
        <meta name="google-site-verification" content="ebyrQ98oyR2vOr9BQIqNFfJmPl116xyKSdafbvmAZhM" />
      </head>
      <body>{children}</body>
    </html>
  )
}
