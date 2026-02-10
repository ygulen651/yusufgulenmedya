'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import SocialSignUp from '../SocialSignUp'
import Logo from '@/app/components/Layout/Header/Logo'
import { useState } from 'react'
import Loader from '@/app/components/Common/Loader'
const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setLoading(true)
    const data = new FormData(e.currentTarget)
    const value = Object.fromEntries(data.entries())
    const finalData = { ...value }

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success('Başarıyla kayıt olundu')
        setLoading(false)
        router.push('/signin')
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      })
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-darkmode'>
          VEYA
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='text'
            placeholder='İsim'
            name='name'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='E-posta'
            name='email'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Şifre'
            name='password'
            required
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-darkmode placeholder:text-darkmode focus:border-darkmode focus-visible:shadow-none text-darkmode dark:focus:border-darkmode'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-18 font-medium justify-center rounded-md bg-darkmode px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-darkmode border-darkmode border '>
            Kayıt Ol {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className='text-body-secondary mb-4 text-black text-base'>
        Hesap oluşturarak şunları kabul etmiş olursunuz:{' '}
        <a href='/#' className='text-primary hover:underline'>
          Gizlilik
        </a>{' '}
        ve{' '}
        <a href='/#' className='text-primary hover:underline'>
          Politika
        </a>
      </p>

      <p className='text-body-secondary text-black text-base'>
        Zaten bir hesabınız var mı?
        <Link href='/' className='pl-2 text-primary hover:underline'>
          Giriş Yap
        </Link>
      </p>
    </>
  )
}

export default SignUp
