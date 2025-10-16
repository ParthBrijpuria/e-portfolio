import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parth Brijpuria - IIT Roorkee Student & Developer',
  description: 'Personal portfolio of Parth Brijpuria, a first-year undergraduate student at IIT Roorkee with expertise in programming, machine learning, and competitive coding.',
  keywords: ['Parth Brijpuria', 'IIT Roorkee', 'Developer', 'Machine Learning', 'Portfolio', 'Computer Science', 'JEE Advanced'],
  authors: [{ name: 'Parth Brijpuria' }],
  creator: 'Parth Brijpuria',
  publisher: 'Parth Brijpuria',
  robots: 'index, follow',
  metadataBase: new URL('https://parth-brijpuria.vercel.app'),
  openGraph: {
    title: 'Parth Brijpuria - IIT Roorkee Student & Developer',
    description: 'Personal portfolio showcasing academic achievements, projects, and experiences at IIT Roorkee.',
    type: 'website',
    url: 'https://parth-brijpuria.vercel.app',
    siteName: 'Parth Brijpuria Portfolio',
    images: [
      {
        url: '/images/iitr image.jpg',
        width: 1200,
        height: 630,
        alt: 'Parth Brijpuria - IIT Roorkee Student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Brijpuria - IIT Roorkee Student & Developer',
    description: 'Personal portfolio showcasing academic achievements, projects, and experiences at IIT Roorkee.',
    images: ['/images/iitr image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white transition-colors duration-300">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}