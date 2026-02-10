'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { workdata } from '@/app/types/workdata'
import WorkSkeleton from '../../Skeleton/Work'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
}

const Work = () => {
  // fetch work data
  const [work, setWork] = useState<workdata[]>([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setWork(data.WorkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section
      id='Team'
      className="relative dark:bg-darkmode py-4 bg-cover bg-center overflow-hidden before:absolute before:w-full before:h-full before:bg-[url('/images/wework/elipse.svg')] before:bg-no-repeat before:bg-center after:absolute after:w-1/3 after:h-1/3 after:bg-[url('/images/wework/vector.svg')] after:bg-no-repeat after:top-28 after:-right-12 after:-z-10">
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center overflow-hidden'>
          <h3 className='text-black my-5'>
            Birçok farklı sektörde çalışıyoruz.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => <WorkSkeleton key={i} />)
          : work.map((items, i) => (
            <div key={i} className='group'>
              <div className='bg-white dark:bg-darkHeroBg m-3 py-14 my-10 text-center shadow-xl rounded-3xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 border border-transparent hover:border-blue-100 dark:hover:border-blue-900'>
                <div className='relative w-fit mx-auto'>
                  <div className='w-[182px] h-[182px] rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto transition-transform duration-300 group-hover:scale-110'>
                    <Image
                      src={items.imgSrc}
                      alt={items.name}
                      width={182}
                      height={182}
                      className='object-cover w-full h-full transform transition-transform duration-500 group-hover:rotate-3'
                    />
                  </div>
                  <div className='absolute right-2 bottom-2 bg-blue-600 shadow-linckedin p-3 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-700'>
                    <Image
                      src={'/images/wework/linkedin.svg'}
                      alt='linkedin'
                      width={20}
                      height={20}
                      className='brightness-0 invert'
                    />
                  </div>
                </div>
                <h6 className='text-xl text-black dark:text-white font-bold pt-14 group-hover:text-blue-600 transition-colors'>
                  {items.name}
                </h6>
                <p className='text-base text-black/50 dark:text-white/50 font-medium pt-4 pb-2'>
                  {items.profession}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </section>
  )
}
export default Work
