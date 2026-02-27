'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqData = [
  {
    question: 'Web sitemi veya logomu tasarlayabilir misiniz?',
    answer: 'Evet, markanızın hikayesini en iyi yansıtacak modern web tasarımları, kullanıcı deneyimi (UX) odaklı arayüzler ve profesyonel kurumsal kimlik çalışmaları gerçekleştiriyoruz.'
  },
  {
    question: 'Özel yazılım veya mobil uygulama geliştiriyor musunuz?',
    answer: 'Evet, ihtiyacınıza özel web tabanlı otomasyon sistemleri ve hem iOS hem Android platformlarında yüksek performansla çalışan native/hybrid mobil uygulamalar geliştiriyoruz.'
  },
  {
    question: 'Bir projenin tamamlanma süreci ne kadar sürer?',
    answer: 'Projenin kapsamına göre değişiklik göstermekle birlikte; tasarım süreci ortalama 1-2 hafta, geliştirme ve test süreci ise projenin karmaşıklığına bağlı olarak 3-6 hafta sürmektedir.'
  },
  {
    question: 'Projeden sonra teknik destek sağlıyor musunuz?',
    answer: 'Elbette. Projeyi teslim ettikten sonra da bakım, güvenlik güncellemeleri ve yaşanabilecek teknik sorunlar için 7/24 yanınızdayız. Sizinle uzun vadeli bir çözüm ortağı olmayı hedefliyoruz.'
  }
];

const FAQ = () => {
  return (
    <section
      id='FAQ'
      className='relative py-1 bg-cover bg-center overflow-hidden dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-3xl py-24 bg-faq-bg bg-no-repeat bg-cover bg-primary shadow-2xl overflow-hidden'>
          <p className='text-lg font-medium text-white/80 text-center mb-6 tracking-widest uppercase'>SSS</p>
          <h2 className='text-white text-center max-w-3xl mx-auto leading-tight'>
            Sıkça Sorulan Sorular
          </h2>
          <div className='w-full px-4 pt-16 flex flex-col gap-6'>
            {faqData.map((item, index) => (
              <div key={index} className='mx-auto w-full max-w-5xl rounded-2xl p-2 bg-white/5 backdrop-blur-sm border border-white/10'>
                <div className='bg-white rounded-xl p-4 sm:p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl'>
                  <Disclosure>
                    {({ open }) => (
                      <div className='group'>
                        <DisclosureButton className='flex w-full justify-between items-center text-left focus:outline-hidden hover:cursor-pointer'>
                          <span className='text-lg md:text-2xl font-bold text-black group-hover:text-primary transition-colors pr-4'>
                            {item.question}
                          </span>
                          <div
                            className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary transform transition-transform duration-300 ${open ? 'rotate-180 bg-primary text-white' : ''
                              }`}>
                            <Icon icon='lucide:chevron-down' width='24' height='24' />
                          </div>
                        </DisclosureButton>
                        <DisclosurePanel className='text-base sm:text-lg text-black/60 font-medium text-left pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-100 leading-relaxed'>
                          <div className='max-w-full lg:max-w-[90%]'>
                            {item.answer}
                          </div>
                        </DisclosurePanel>
                      </div>
                    )}
                  </Disclosure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
