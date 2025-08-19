import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/accessibility/SkipLink'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: '55Plus - Your Go-To Resource for Inspired Living',
    template: '%s | 55Plus'
  },
  description: 'Discover inspiring articles, events, and resources designed specifically for the 55+ demographic. From home improvement to travel, we\'ve got everything you need for an enriched lifestyle.',
  keywords: ['55 plus', 'senior living', 'home improvement', 'travel', 'events', 'lifestyle', 'aging gracefully'],
  authors: [{ name: '55Plus Team' }],
  creator: '55Plus',
  publisher: '55Plus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://55plus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://55plus.com',
    title: '55Plus - Your Go-To Resource for Inspired Living',
    description: 'Discover inspiring articles, events, and resources designed specifically for the 55+ demographic.',
    siteName: '55Plus',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '55Plus - Inspired Living for the 55+ Demographic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '55Plus - Your Go-To Resource for Inspired Living',
    description: 'Discover inspiring articles, events, and resources designed specifically for the 55+ demographic.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <SkipLink />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
