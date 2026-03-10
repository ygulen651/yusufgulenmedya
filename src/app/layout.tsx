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
  metadataBase: new URL('https://www.yusufgulenmedya.com.tr'),
  verification: {
    google: 'googlec6f3609bc3b74ee4',
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
