import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Hakkımızda', href: '#About' },
  { label: 'Ekibimiz', href: '#Team' },
  { label: 'SSS', href: '#FAQ' },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Hakkımızda.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      'Geleceği bugünden inşa eden vizyonumuzla, dijital dönüşüm yolculuğunuzda size eşlik ediyoruz. Deneyimli ekibimiz ve inovatif bakış açımızla sektörde fark yaratıyoruz.',
    link: 'Daha fazla bilgi',
  },
  {
    heading: 'Hizmetler.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'Markanızın ihtiyaçlarına özel stratejik çözümler sunuyoruz. Yazılımdan tasarıma, danışmanlıktan dijital pazarlamaya kadar geniş bir yelpazede yanınızdayız.',
    link: 'Daha fazla bilgi',
  },
  {
    heading: 'Çalışmalarımız.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'Bugüne kadar imza attığımız projelerle başarıyı somutlaştırıyoruz. Yaratıcılığı teknik uzmanlıkla birleştirerek hayata geçirdiğimiz portfolyomuza göz atın.',
    link: 'Daha fazla bilgi',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Full Stack Developer ',
    name: 'Yusuf Gülen',
    imgSrc: '/images/yusuf.png',
  },
  {
    profession: 'Full Stack Developer',
    name: 'İlyas Tümay Durmaz',
    imgSrc: '/images/wework/ilyas.png',
  },
  {
    profession: 'Full Stack Developer',
    name: 'Görkem Er',
    imgSrc: '/images/wework/görkems.png',
  },
  {
    profession: 'Videographer',
    name: 'Süleyman Özdemir',
    imgSrc: '/images/suleman.png',
  },
  {
    profession: 'SEO Uzmanı',
    name: 'Mustafa Demirci',
    imgSrc: '/images/wework/mustafa.png',
  },

]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Bir bilgisayar markası için marka tasarımı.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobil uygulama 3d duvar kağıdı.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Bir bilgisayar markası için marka tasarımı.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobil uygulama 3d duvar kağıdı.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Başlangıç (Dijital Temel)',
    price: {
      monthly: '25.000 + KDV',
      yearly: '250.000 + KDV',
    },
    user: 'paket başlangıcı',
    features: {
      logo: 'Logo & Kimlik: Profesyonel logo tasarımı ve temel kurumsal kimlik öğeleri (kartvizit, antetli kağıt).',
      web: 'Web Tasarım: Modern, mobil uyumlu (responsive) 5 sayfalık kurumsal web sitesi.',
      panel: 'Yönetim Paneli: İçeriklerinizi kendinizin güncelleyebileceği kolay arayüz.',
      hosting: 'Hosting: 1 yıllık ücretsiz hosting ve SSL sertifikası.',
      support: 'Destek: Teslim sonrası 1 ay ücretsiz teknik destek.',
    },
  },
  {
    heading: 'Dijital Büyüme',
    price: {
      monthly: '50.000 + KDV',
      yearly: '500.000 + KDV',
    },
    user: 'paket başlangıcı',
    features: {
      logo: 'Kapsamlı Kimlik: Detaylı marka rehberi ve sosyal medya tasarım kitleri.',
      web: 'Gelişmiş Web: SEO odaklı, blog altyapılı ve yüksek performanslı özel web yazılımı.',
      app: 'Mobil Uygulama (Giriş): Web sitenizle senkronize çalışan hibrit (Android & iOS) mobil uygulama.',
      integration: 'Entegrasyon: WhatsApp hattı, e-bülten ve gelişmiş iletişim formları.',
      support: 'Destek: 6 ay VIP teknik destek ve bakım.',
    },
  },
  {
    heading: 'Tam Çözüm',
    price: {
      monthly: '85.000\'den Başlayan',
      yearly: '850.000\'den Başlayan',
    },
    user: 'Fiyatlarla',
    features: {
      logo: 'Premium Kimlik: 360 derece kurumsal kimlik (katalog, araç giydirme, ofis içi görseller).',
      web: 'Özel Yazılım: İhtiyaca özel, sıfırdan kodlanmış (Native) web ve mobil ekosistem.',
      app: 'Mobil Uygulama (Native): App Store ve Play Store için yüksek performanslı özgün uygulamalar.',
      ecommerce: 'E-Ticaret & API: Ödeme sistemleri ve dış servis (CRM, ERP) entegrasyonları.',
      support: 'Destek: 7/24 Kesintisiz öncelikli destek hattı.',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Ahmet Yılmaz',
    profession: 'İşletme Sahibi',
    comment:
      'Web sitemizin yenilenme sürecinde Yusuf Gülen Medya ile çalışmak işimize büyük değer kattı. Modern ve hızlı bir arayüzle satışlarımız arttı.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Selim Aydın',
    profession: 'Pazarlama Direktörü',
    comment:
      'Dijital pazarlama stratejilerimiz için aldığımız profesyonel destek sayesinde marka bilinirliğimiz beklediğimizden çok daha kısa sürede yükseldi.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Can Kasapoğlu',
    profession: 'E-Ticaret Yöneticisi',
    comment:
      'Mobil uygulama projemizi tam zamanında ve kusursuz bir şekilde teslim ettiler. Teknik destekleri ve ilgileri gerçekten takdire şayan.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 5,
  },
  {
    name: 'Zeynep Kaya',
    profession: 'Kurumsal İletişim Uzmanı',
    comment:
      'Logomuz ve kurumsal kimlik çalışmalarımız ekibimiz tarafından çok beğenildi. Sade ama akılda kalıcı bir tasarım dili yakaladılar.',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Murat Demir',
    profession: 'Teknoloji Girişimcisi',
    comment:
      'Yazılım tarafındaki uzmanlıkları sayesinde karmaşık bir iş akışını çok basit ve yönetilebilir bir hale getirdiler. Kesinlikle tavsiye ediyorum.',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 5,
  },
  {
    name: 'Elif Şahin',
    profession: 'Dijital İçerik Üreticisi',
    comment:
      'Videonuz ve sosyal medya içerikleriniz için harika bir ekip. Yaratıcı fikirleriyle projelerimize her zaman can suyu oluyorlar.',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 dk',
    heading: 'Delia\'yı Yayına Alıyoruz',
    heading2: 'Bu Hafta Webflow!',
    name: 'Startupon\'da Yayınlandı',
    date: '19 Şubat 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menü',
    links: [
      { label: 'Hakkımızda', href: '#About' },
      { label: 'Ekibimiz', href: '#Team' },
      { label: 'SSS', href: '#FAQ' },
      { label: 'Fiyatlandırma', href: '#Plans' },
    ],
  },
  {
    section: 'Hizmetlerimiz',
    links: [
      { label: 'Web Tasarım', href: '/' },
      { label: 'Mobil Uygulama', href: '/' },
      { label: 'Yazılım Çözümleri', href: '/' },
      { label: 'Sosyal Medya', href: '/' },
    ],
  },
  {
    section: 'Kurumsal',
    links: [
      { label: 'Vizyonumuz', href: '/' },
      { label: 'Misyonumuz', href: '/' },
      { label: 'Referanslar', href: '/' },
      { label: 'İletişim', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
