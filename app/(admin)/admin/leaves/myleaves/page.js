import React from 'react'
import { MdTableChart } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

function myleaves() {
  return (
    <main className='min-h-screen py-3 mx-3 px-4 rounded-lg bg-[#C7C7C7]'>
        <h2 className='text-3xl font-semiold my-4'>My Leaves</h2>
        <div className='flex text-[#172448] font-semibold gap-4 justify-end items-center text-sm mb-6 py-2 '>
            <button><MdTableChart size={30} className='rounded-full bg-white border border-[#172448] py-1'/> Table&nbsp;View</button>
            <button><FaCalendarAlt size={30} className='rounded-full border border-[#172448] bg-white py-1' /> Calender</button>
            <button>
              <span>
              <svg className='bg-[#172448] rounded-full' width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.6536 29.7667C35.0061 29.1292 27.1598 26.0942 25.7361 25.5217C24.3198 24.9592 23.7548 23.4005 23.7548 23.4005C23.7548 23.4005 23.1173 23.753 23.1173 22.763C23.1173 21.7717 23.7548 23.4005 24.3923 19.578C24.3923 19.578 26.1611 19.0817 25.8098 14.978H25.3848C25.3848 14.978 26.4473 10.5905 25.3848 9.10547C24.3186 7.62047 23.9011 6.63047 21.5598 5.92047C19.2223 5.21172 20.0723 5.35297 18.3748 5.42547C16.6748 5.49672 15.2598 6.41672 15.2598 6.91047C15.2598 6.91047 14.1973 6.98172 13.7748 7.40672C13.3498 7.83172 12.6423 9.81172 12.6423 10.3067C12.6423 10.8017 12.9961 14.1317 13.3498 14.8367L12.9286 14.9742C12.5748 19.0792 14.3436 19.5767 14.3436 19.5767C14.9811 23.3992 15.6186 21.7705 15.6186 22.7617C15.6186 23.7517 14.9811 23.3992 14.9811 23.3992C14.9811 23.3992 14.4148 24.9567 12.9998 25.5205C11.5848 26.0867 3.72984 29.1292 3.09109 29.7655C2.45359 30.4155 2.52484 33.3855 2.52484 33.3855H17.5698L18.6673 29.0605L17.6923 28.0855L19.3711 26.4042L21.0498 28.0842L20.0748 29.0592L21.1723 33.3842H36.2173C36.2173 33.3842 36.2961 30.4117 35.6511 29.763L35.6536 29.7667Z" fill="white"/>
                </svg>
              </span>
              My&nbsp;Leaves
            </button>
        </div>
        <section className=' justify-between gap-5 flex mt-5 h-[30vh] '>
          <div className='bg-[#172448] w-1/2 text-white flex gap-3 px-6 py-10 rounded-lg'>
           <div className='h-14 w-14 rounded-full bg-white'></div>
           <h1>Admin</h1>
            <p className='text-sm text-[#3CDD64]  py-10'>Last login at 11-06-2024 09:36 am</p>
          </div>
          <div className='bg-white w-1/2  rounded-lg'>
            <div className='flex justify-between px-4 py-8 items-center'>
            <h1 className='font-semibold text-[#172448]'>RemainingLeaves</h1>
            <span>
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.16699 12.5L4.16699 13.3333C5.52533 7.07168 9.47033 5.00585 13.3337 5.00002C15.8312 4.99585 18.2937 5.85502 20.0003 6.66668C21.707 5.85502 24.167 5.00002 26.667 5.00002C30.5095 5.00002 34.4753 7.07168 35.8337 13.3333L30.8337 12.5C31.2995 14.25 32.3237 17.3267 30.8337 20C28.3503 17.7725 22.6087 14.4092 20.0003 12.5C17.392 14.4092 11.6503 17.7725 9.16699 20C7.67699 17.3275 8.70116 14.25 9.16699 12.5Z" stroke="#172448" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.0004 12.5C19.3712 15.7408 18.4912 23.7775 20.0004 30" stroke="#172448" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 35H30C26.0108 31.1792 24.1667 30.0042 20 30C15.8333 29.9958 11.5767 32.8183 10 35Z" stroke="#172448" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            </div>
            <p className='text-[#FF0000] px-4 text-xl'>o</p>
          </div>
        </section>
        <div className='bg-[#172448] px-4 py-3 text-white mt-4 rounded-lg h-[30vh]'>
          <h1>LeavesQuota</h1>
        </div>
       
    </main>
  )
}

export default myleaves