'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-20 relative overflow-hidden transition-all duration-500">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-12 lg:pt-24 px-6 lg:pl-24'>
              <p className='text-base lg:text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                BİZ KİMİZ
              </p>
              <h2 className='text-white mb-8 leading-tight text-center lg:text-start text-3xl lg:text-5xl font-bold'>
                Harika ürünler geliştiren dijital bir ajansız.
              </h2>
              <div className='text-center lg:text-start'>
                <Link
                  href='#Contact'
                  className='inline-block text-lg lg:text-xl font-semibold text-white bg-deep-slate/80 hover:bg-white hover:text-primary py-3 lg:py-4 px-10 lg:px-12 rounded-full transition-all duration-300 shadow-lg'>
                  Hemen başlayın
                </Link>
              </div>
            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute -bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
