'use client'
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import PlansSkeleton from '../../Skeleton/Plans'
import Link from 'next/link'

const Manage = () => {
  const [plans, setPlans] = useState<any[]>([])
  const [loading, setLoding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlans(data.PlansData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoding(false)
      }
    }
    fetchData()
  }, [])

  const [enabled, setEnabled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<
    'yearly' | 'monthly'
  >('monthly')

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled)

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) =>
      prevCategory === 'yearly' ? 'monthly' : 'yearly'
    )
  }

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory],
  }))

  return (
    <section id='services-section'>
      <div className='container mx-auto max-w-7xl px-4'>
        <h2 className='text-center '>
          Tüm Sosyal Medya Profillerinizi Tek Yerden Yönetin.
        </h2>
        {/*  */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 lg:gap-14 manage'>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <PlansSkeleton key={i} />)
            : filteredData.map((items, i) => (
              <div
                className='shadow-manage-shadow border border-border text-center p-6 md:p-10 rounded-3xl group hover:border-primary transition-all duration-300'
                key={i}>
                <h5 className='mb-3 text-xl md:text-2xl'>{items.heading}</h5>
                <p className='text-3xl md:text-4xl font-extrabold mb-3 text-darkmode'>₺{items.price}</p>
                <p className='text-sm font-medium mb-6 text-black/50'>{items.user}</p>
                <Link href={'#Contact'}>
                  <button className='text-sm font-bold text-primary bg-transparent hover:bg-primary hover:text-white border-2 border-primary rounded-full py-3 md:py-4 px-8 md:px-12 mb-6 hover:cursor-pointer transition-all duration-300'>
                    Teklif Alın
                  </button>
                </Link>
                {/* Map through the features object and render each key-value pair dynamically */}
                {Object.entries(items.features).map(([key, feature], index) => (
                  <p
                    className='text-sm font-medium text-darkgrey mb-3 opacity-70 group-hover:opacity-100'
                    key={index}>
                    {feature as string}
                  </p>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Manage
