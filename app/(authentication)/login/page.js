"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Login() {
  return (
    <section className='flex justify-center items-center min-h-screen'>
      <div className='flex mx-4'>
        <div className='w-1/2 bg-[#D9D9D9] rounded-l-lg py-8 px-4'>
            <h1 className='font-bold text-center text-3xl mb-16'>Log In</h1>
            <div className='my-2 flex mb-8'>
              <input 
                  type="email"
                  placeholder='Email'
                   className='py-2 pl-2 rounded-md w-full'
              />
              <h1>Em</h1>
            </div>
            <div className='my-2  flex text-base '>
              <input 
                  type="password"
                  placeholder='Password'
                  className='py-2 pl-2 rounded-md w-full'
              />
              <h1>Pw</h1>
            </div>

            <div className='flex justify-between my-4'>
              <div className='flex text-sm font-semibold gap-2'>
                  <input type="checkbox" />
                  <p>Stay logged in</p>
              </div>

              <a href="#" className='text-sm text-[#3D63DD] hover:underline font-semibold'>Forgot your password</a>
            </div>

            <button className='text-white text-semibold text-base bg-[#3D63DD] text-center w-full py-2 rounded-lg' >Log In</button>

            <p className='my-3 text-center text-sm font-semibold'>Don&apos;t have an account yet?</p>
            <p className='text-center'><Link href="/signup" className='text-sm text-center w-full  text-[#3D63DD] hover:underline font-semibold'>Sign Up</Link></p>

        </div>
        <div className='w-1/2 bg-[#172448] rounded-r-lg'>
            <Image
            src="/assets/4.png"
            alt="Next.js Logo"
            width={2560}
            height={700}
            priority
            // layout='responsive'
            // objectFit='cover'
            className='bg-red-100 h-full object-cover '

            />
        </div>  
      </div>
    </section>
  )
}

export default Login