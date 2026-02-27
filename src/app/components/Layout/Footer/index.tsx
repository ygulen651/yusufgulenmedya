'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { footerlinks } from '@/app/types/footerlinks'

const Footer = () => {
  // fetch data

  const [links, setLinks] = useState<footerlinks[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setLinks(data.FooterLinksData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-black' id='first-section'>
      <div className='container mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h4 className='text-white text-3xl leading-9 mb-4 lg:mb-20'>
              Yusuf Gülen
            </h4>
            <div className='flex items-center gap-4'>
              <div className='footer-icons'>
                <Link
                  href='https://www.facebook.com/profile.php?id=61578329736009'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src={'/images/footer/vec.svg'}
                    alt='facebook'
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link href='https://www.linkedin.com/in/yusuf-g%C3%BClen-01455b1a9/' target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={'/images/wework/linkedin.svg'}
                    alt='linkedin'
                    width={20}
                    height={20}
                    className='brightness-0 invert'
                  />
                </Link>
              </div>
              <div className='footer-icons'>
                <Link
                  href='https://www.instagram.com/yusufgulen.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Image
                    src={'/images/footer/instagram.svg'}
                    alt='instagram'
                    width={25}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          {links.map((item, i) => (
            <div key={i} className='group relative col-span-2'>
              <p className='text-white text-xl font-extrabold mb-9'>
                {item.section}
              </p>
              <ul>
                {item.links.map((linkItem, idx) => (
                  <li key={idx} className='mb-5'>
                    <Link
                      href={`${linkItem.href}`}
                      className='text-white text-lg font-normal mb-6 space-links hover:text-white/60 hover:underline'>
                      {linkItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className='mx-auto max-w-2xl lg:max-w-7xl'>
        <div className='pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-t border-white/30'>
          <div className='mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8'>
            <div>
              <p className='text-center md:text-start text-white text-lg'>
                @2025 - Yusuf Gülen Medya Tüm Hakları Saklıdır.{' '}
              </p>
            </div>
            <div className='flex justify-center md:justify-end'>
              <Link href='/'>
                <p className='text-base text-white pr-6 hover:text-white/60 hover:underline'>
                  Gizlilik Politikası
                </p>
              </Link>
              <Link href='/'>
                <p className='text-base text-white pl-6 border-solid border-l border-footer hover:text-white/60 hover:underline'>
                  Şartlar ve Koşullar
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
