'use client'
import React from 'react'
import Image from 'next/image'

const Companies = () => {
    const logos = [
        { src: '/images/logolar/YENİ LOGO SİYAH PNG.png', alt: 'Yeni Logo Siyah', isLarge: true },
        { src: '/images/logolar/360.png', alt: '360' },
        { src: '/images/logolar/ANI.png', alt: 'ANI' },
        { src: '/images/logolar/Detay Sigorta.png', alt: 'Detay Sigorta' },
        { src: '/images/logolar/LOGO chubby.png', alt: 'Chubby' },
        { src: '/images/logolar/LOGO kopya.png', alt: 'Logo Kopya' },
        { src: '/images/logolar/Oslo.png', alt: 'Oslo' },
        { src: '/images/logolar/Sıla Evde Bakım 4.png', alt: 'Sıla Evde Bakım' },
        { src: '/images/logolar/karadag onur  logo.png', alt: 'Karadağ Onur' },
        { src: '/images/logolar/kartap logo.png', alt: 'Kartap' },
        { src: '/images/logolar/kültür.png', alt: 'Kültür' },
        { src: '/images/logolar/logo.png', alt: 'Logo General' },
        { src: '/images/logolar/ulak logo.png', alt: 'Ulak' },
        { src: '/images/logolar/Çalışma Yüzeyi 1@4x.png', alt: 'Çalışma Yüzeyi' },
        { src: '/images/logolar/İkev logo.png', alt: 'İkev' },
    ]

    // Double the logos for infinite effect
    const extendedLogos = [...logos, ...logos]

    return (
        <section className='bg-white py-20 overflow-hidden'>
            <div className='container mx-auto max-w-7xl px-4'>
                <div className='text-center mb-20'>
                    <p className='text-[#2E4E92] text-xl font-medium mb-4 uppercase tracking-[0.25em]'>
                        REFERANSLARIMIZ
                    </p>
                    <h2 className='text-4xl md:text-6xl font-black text-[#111827]'>
                        Bize Güvenen Markalar
                    </h2>
                </div>
            </div>

            <div className='relative flex overflow-x-hidden group'>
                <div className='flex animate-marquee whitespace-nowrap gap-16 md:gap-28 items-center py-8'>
                    {extendedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 transform hover:scale-125 mx-4 ${logo.isLarge ? 'scale-150' : ''}`}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.isLarge ? 300 : 200}
                                height={logo.isLarge ? 150 : 100}
                                className={`object-contain w-auto ${logo.isLarge ? 'max-h-[140px] max-w-[300px]' : 'max-h-[90px] max-w-[200px]'}`}
                                priority={index < 8}
                            />
                        </div>
                    ))}
                </div>

                {/* CSS for marquee animation */}
                <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
            display: flex;
            width: fit-content;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
            </div>

            {/* Decorative gradient masks for soft edges */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 hidden lg:block"></div>
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden lg:block"></div>
        </section>
    )
}

export default Companies
