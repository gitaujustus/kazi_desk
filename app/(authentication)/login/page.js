"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Login() {
  return (
    <section className='flex justify-center items-center min-h-screen'>
      <div className='flex mx-4'>
        <div className='w-1/2 bg-gray-200 rounded-l-lg py-8 px-4'>
            <h1 className='font-bold text-center text-3xl mb-16'>Log In</h1>
            <div className='my-2'>
            <input 
                type="email"
                placeholder='Email'
            />
            <h1>Em</h1>
            </div>
            <div className='my-2'>
            <input 
                type="password"
                placeholder='Password'
            />
            <h1>Pw</h1>
            </div>

            <div>
            <div>
                <input type="checkbox" />
                <p>Stay logged in</p>
            </div>

            <a href="#">Forgot your password</a>
            </div>

            <button>Log In</button>

            <p>Don&apos;t have an account yet?</p>
            <Link href="/signup">Sign Up</Link>


        </div>






        <div className='w-1/2 h-auto bg-gray-400 rounded-r-lg py-8 px-4'>
            <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={37}
            priority
            layout='responsive'
            
            />
        </div>
      </div>
    </section>
  )
}

export default Login