import AdminBar from '@/components/adminBar'
import Image from 'next/image'
import React from 'react'
import { CiSettings } from "react-icons/ci";

function Dashbaord() {
  return (
    <main className='dark:bg-[#3B3B3B] min-h-screen pt-5'>
      <section className='mx-6 rounded-md '>
        <div className='flex bg-[#076B6D] items-center justify-between rounded-t-lg h-64 '>
          <div className='p-4 w-1/2 text-white'>
            <h1 className='text-3xl  font-semibold'>Welcome back Admin</h1>
            <p className='text-md mt-5'>What do you have in mind</p>
          </div>
          <div className='h-full  '>
              <Image src={"/assets/6.png"} className='object-cover h-full w-full' alt="kazi" width={2560} height={700}/>
          </div>
        </div>
         {/* clock in */}
      <div className='flex justify-end items-center gap-2 py-4'>
        <button className='bg-[#1D1D1D] dark:bg-[#172448] rounded-md px-5 py-2 text-white flex gap-2 items-center'>
        <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8.99917V50.9991C0 51.7948 0.421428 52.5579 1.17157 53.1205C1.92172 53.6831 2.93913 53.9991 4 53.9991H16V47.9991H8V11.9992H16V5.99917H4C2.93913 5.99917 1.92172 6.31524 1.17157 6.87785C0.421428 7.44046 0 8.20352 0 8.99917ZM56.968 6.08917L24.968 0.0891714C24.3785 -0.0211063 23.7632 -0.0292097 23.1689 0.0654764C22.5745 0.160162 22.0168 0.35515 21.5379 0.635638C21.0591 0.916126 20.6717 1.27474 20.4052 1.68427C20.1388 2.0938 20.0002 2.54348 20 2.99917V56.9991C19.9986 57.4552 20.1362 57.9055 20.4022 58.3156C20.6682 58.7258 21.0556 59.0849 21.5348 59.3656C22.0141 59.6464 22.5725 59.8413 23.1675 59.9355C23.7625 60.0296 24.3783 60.0206 24.968 59.9091L56.968 53.9091C57.8337 53.7472 58.6024 53.3728 59.1518 52.8455C59.7012 52.3182 59.9998 51.6683 60 50.9991V8.99917C59.9998 8.32998 59.7012 7.68007 59.1518 7.15278C58.6024 6.62549 57.8337 6.25111 56.968 6.08917ZM40 30.5632C39.9539 31.3356 39.5124 32.0649 38.7673 32.5993C38.0222 33.1337 37.0309 33.432 36 33.432C34.9691 33.432 33.9778 33.1337 33.2327 32.5993C32.4876 32.0649 32.0461 31.3356 32 30.5632V29.4322C32.0005 28.6365 32.4225 27.8736 33.173 27.3113C33.9235 26.7489 34.9411 26.4333 36.002 26.4337C37.0629 26.4341 38.0801 26.7505 38.8298 27.3134C39.5796 27.8763 40.0005 28.6395 40 29.4352V30.5632Z" fill="white"/>
      </svg>

          Clock In
        </button>
        <CiSettings size={26}/>
      </div>
      </section>
     
    </main>
  )
}

export default Dashbaord