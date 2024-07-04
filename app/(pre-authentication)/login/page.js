// "use client"
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// function Login() {
//   return (
//     <section className='flex justify-center items-center min-h-screen'>
//       <div className='flex mx-4'>
//         <div className='w-1/2 bg-gray-200 rounded-l-lg py-8 px-4'>
//             <h1 className='font-bold text-center text-3xl mb-16'>Log In</h1>
//             <div className='my-2'>
//             <input 
//                 type="email"
//                 placeholder='Email'
//             />
//             <h1>Em</h1>
//             </div>
//             <div className='my-2'>
//             <input 
//                 type="password"
//                 placeholder='Password'
//             />
//             <h1>Pw</h1>
//             </div>

//             <div>
//             <div>
//                 <input type="checkbox" />
//                 <p>Stay logged in</p>
//             </div>

//             <a href="#">Forgot your password</a>
//             </div>

//             <button>Log In</button>

//             <p>Don&apos;t have an account yet?</p>
//             <Link href="/signup">Sign Up</Link>


//         </div>
//         <div className='w-1/2 h-auto bg-gray-400 rounded-r-lg py-8 px-4'>
//             <Image
//             src="/next.svg"
//             alt="Next.js Logo"
//             width={100}
//             height={37}
//             priority
//             layout='responsive'
            
//             />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Login
"use client"
import Navbar from '@/components/navigations'
import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react' 

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className='flex justify-center items-center min-h-screen dark:bg-[#112C6F]'>
        <section className='bg-slate-300 mx-2  lg:w-3/4 md:w-[90vw] sm:w-[95vw] w-full flex md:mx-auto min-h-[70vh] rounded-md'>
            <form className='w-full sm:w-1/2 p-3 dark:bg-gradient-to-r from-[#080D27] to-[#141E5B]'>
                <h1 className='text-center text-xl md:text-3xl font-semibold py-3'>Log In</h1>
                <div className='my-4'>
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     name="email" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Email' id="email" />
                </div>
                <div className='my-4'>
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     name="password" className='p-2 rounded-md w-full dark:bg-gray-100 dark:text-gray-800' placeholder='Password' id="password" />
                </div>

                <div className='flex justify-between my-4 text-sm'>
                  <div className='flex gap-2'>
                    <input type="checkbox" />
                    <p className='font-semibold'>Stay logged in</p>
                  </div>
                  <a href="#" className='text-[#3D63DD] hover:underline font-semibold'>Forgot password</a>
                </div>
                
                <Button title="Log In" loading={false}/>
                <p className='my-4 text-sm font-semibold text-center'>Don&apos;t have an account yet?</p>
                <p className='text-center'><Link href={"/signup"} className='text-[#3D63DD] text-sm hover:underline font-semibold'>Sign Up</Link></p>
            </form>
            <div className='bg-[#172448] dark:bg-[#000000] w-1/2 hidden sm:flex rounded-e-md'>
                <Image width={2560} height={700} className='object-cover h-full'  src="/assets/4.png" alt="" />
            </div>
        </section>
    </main>
  )
}

export default Login