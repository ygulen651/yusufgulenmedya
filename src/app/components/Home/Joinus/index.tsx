'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section id='Contact' className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            BİZE KATILIN
          </p>
          <h2 className='my-6'>İşinizi yeni bir seviyeye taşıyın.</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            Projelerinizi birlikte hayata geçirmek ve dijital dünyada fark yaratmak için buradayız. Hemen bize ulaşın ve dijital dönüşüm yolculuğunuza bugün başlayın.
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-5'>
          <div className='sm:flex items-center mx-2 sm:mx-5 p-4 sm:p-0 rounded-xl justify-between bg-grey sm:rounded-full shadow-inner'>
            <div className='w-full'>
              <input
                type='name'
                className='w-full my-2 sm:my-4 py-3 sm:py-4 sm:pl-6 text-lg lg:text-xl text-black sm:rounded-full bg-transparent pl-4 focus:outline-hidden bg-emailbg focus:text-black placeholder:text-gray-400'
                placeholder='Adınız'
                autoComplete='off'
              />
            </div>
            <div className='w-full'>
              <input
                type='email'
                className='w-full my-2 sm:my-4 py-3 sm:py-4 sm:pl-6 text-lg lg:text-xl text-black sm:border-l border-linegrey bg-transparent focus:outline-hidden bg-emailbg focus:text-black placeholder:text-gray-400 pl-4'
                placeholder='E-postanız'
                autoComplete='off'
              />
            </div>
            <div className='sm:mr-3 w-full sm:w-auto mt-4 sm:mt-0'>
              <Link
                href='#'
                className='block w-full sm:inline-block text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-primary py-4 sm:py-5 px-6 sm:px-12 hover:bg-darkmode duration-300 transition-all shadow-lg hover:shadow-primary/20'>
                Katıl!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Join
