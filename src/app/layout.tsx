import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Analytics } from '@vercel/analytics/react'

const font = Manrope({ subsets: ['latin'] })

import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://yusufgulenmedya.com.tr'),
  title: {
    default: 'Yusuf Gülen Medya | Web ve Dijital Çözümler',
    template: '%s | Yusuf Gülen Medya',
  },
  description: 'Yusuf Gülen Medya ile markanızı dijitalde büyütün! Modern web tasarımları, SEO altyapısı ve yenilikçi dijital çözümler için alanında uzman ekibimizle çalışın.',
  keywords: [
    'Yusuf Gülen Medya',
    'Karaman Medya',
    'Karaman Yazılım',
    'Karaman Sosyal Medya',
    'Karaman Web Tasarım',
    'Karaman SEO',
    'Kurumsal Web Sitesi',
    'Dijital Pazarlama'
  ],
  authors: [{ name: 'Yusuf Gülen' }],
  creator: 'Yusuf Gülen Medya',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yusufgulenmedya.com.tr',
    title: 'Yusuf Gülen Medya | Web ve Dijital Çözümler',
    description: 'Yusuf Gülen Medya ile markanızı dijitalde büyütün! Modern web tasarımları, SEO altyapısı ve yenilikçi dijital çözümler.',
    siteName: 'Yusuf Gülen Medya',
    images: [
      {
        url: '/images/og-image.jpg', // Recommend creating an og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Yusuf Gülen Medya Görsel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yusuf Gülen Medya | Web ve Dijital Çözümler',
    description: 'Yusuf Gülen Medya ile markanızı dijitalde büyütün! Modern web tasarımları, SEO altyapısı ve yenilikçi dijital çözümler.',
    creator: '@yusufgulen', // Gerekirse değiştirilebilir
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
    google: 'googlec6f3609bc3b74ee4', // Mevcut google verification tag tutuldu
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='tr' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
