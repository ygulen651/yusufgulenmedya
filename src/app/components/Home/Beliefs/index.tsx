'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div className="bg-purple pt-10 sm:pt-12 px-6 sm:px-24 pb-24 md:pb-70 rounded-3xl bg-[url('/images/beliefs/swirls.svg')] bg-no-repeat bg-right-bottom">
            <p className='text-base sm:text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              DEĞERLERİMİZ
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start text-2xl sm:text-3xl lg:text-4xl leading-tight'>
              Şeffaflık ve yenilikçi bakış açısıyla geleceği şekillendiriyoruz.
            </h3>
            <div className='text-center sm:text-start'>
              <Link
                href='#Contact'
                className='inline-block text-lg sm:text-xl py-4 sm:py-5 px-10 sm:px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode transition-all duration-300 shadow-lg hover:shadow-primary/30'>
                Hemen Başlayın
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-10 sm:pt-12 px-6 sm:px-24 pb-24 md:pb-70 rounded-3xl bg-[url('/images/beliefs/bg.svg')] bg-no-repeat bg-bottom">
              <p className='text-base sm:text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                ÇÖZÜM ÜRET
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start text-2xl sm:text-3xl lg:text-4xl leading-tight'>
                Aklınızdaki o harika fikri <span className='text-primary'>inşa edin</span>.
              </h3>
              <p className='pt-2 mb-10 sm:mb-16 text-center sm:text-start text-black/75 text-base sm:text-lg'>
                Tasarımdan kodlamaya, stratejiden yayına kadar her aşamada yanınızdayız. Modern araçlarımız ve uzman kadromuzla fikrinizi dünya standartlarına taşıyın.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#Contact'
                  className='inline-block text-lg sm:text-xl py-4 sm:py-5 px-10 sm:px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode transition-all duration-300 shadow-lg hover:shadow-primary/30'>
                  Daha fazla bilgi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
