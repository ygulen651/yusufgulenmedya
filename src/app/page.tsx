import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Companies from '@/app/components/Home/Companies'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yusuf Gülen Medya | Web Tasarım ve Dijital Çözümler',
  description: 'Yusuf Gülen Medya; Karaman yazılım, web tasarım, sosyal medya yönetimi, mobil programlama, logo ve içerik üretimi alanlarında profesyonel çözümler sunar.',
  keywords: ['Yusuf Gülen Medya', 'Karaman Medya', 'Karaman Yazılım', 'Karaman Sosyal Medya', 'Karaman Mobil Programlama', 'Karaman Web Tasarım', 'Karaman SEO', 'Yusuf Gülen', 'Yusuf Gülen Yazılım', 'Kurumsal Kimlik', 'E-Ticaret'],
  openGraph: {
    title: 'Yusuf Gülen Medya | Web ve Dijital Çözümler',
    description: 'Yusuf Gülen Medya ile markanızı dijitalde büyütün! Modern web tasarımları, SEO altyapısı ve yenilikçi dijital çözümler için alanında uzman ekibimizle profesyonel hizmet sunuyoruz.',
    url: 'https://www.yusufgulenmedya.com.tr',
    siteName: 'Yusuf Gülen Medya',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yusuf Gülen Medya | Profesyonel Yazılım ve Medya',
    description: 'Markanızı dijitalde büyütüyoruz. Profesyonel web tasarım, yazılım, SEO ve medya hizmetleri.',
  },
  alternates: {
    canonical: 'https://www.yusufgulenmedya.com.tr',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Aboutus />
      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <Manage />
      <FAQ />
      <Testimonial />
      <Join />
      <Insta />
    </main>
  )
}
