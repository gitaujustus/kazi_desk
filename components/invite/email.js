import React from 'react'
import Link from "next/link";

const EmailInvite = () => {
  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg py-3 '>
        <h1 className='text-2xl text-center font-semibold pb-8'>Invite Employees to Hillgan innnovations</h1>
        <div className='flex gap-8 ml-10'>
            <Link href='#'>Invite By Email</Link>
            <Link href='#' >Invite By Link</Link>
        </div>
        
        <hr />
        <div className='flex bg-[#FEF2CC]  p-3 rounded-lg ml-10 my-4 mr-3'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_194_1580)">
            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 9C12.2652 9 12.5196 8.89464 12.7071 8.70711C12.8946 8.51957 13 8.26522 13 8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8C11 8.26522 11.1054 8.51957 11.2929 8.70711C11.4804 8.89464 11.7348 9 12 9ZM12 18C12.2449 18 12.4813 17.91 12.6644 17.7473C12.8474 17.5845 12.9643 17.3603 12.993 17.117L13 17V11C12.9997 10.7451 12.9021 10.5 12.7272 10.3146C12.5522 10.1293 12.313 10.0178 12.0586 10.0028C11.8042 9.98789 11.5536 10.0707 11.3582 10.2343C11.1627 10.3979 11.0371 10.6299 11.007 10.883L11 11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18Z" fill="#172448"/>
            </g>
            <defs>
            <clipPath id="clip0_194_1580">
            <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
            </clipPath>
            </defs>
            </svg>
            
            <p>Employees will receive an email to log in and update their profile through the self-service portal</p>
        </div>
        <div  className='flex flex-col pl-10 pr-3'>
            <label htmlFor="">Email*</label>
            <input type="email" placeholder='e.g johndoe@example.com' className='border border-gray-400 rounded-lg py-2' />
        </div>
       
        <div className='flex flex-col pl-10 py-3 pr-3'>
            <label htmlFor="">Message</label>
            <input type="email" placeholder='AddMessage(Optional)'className='h-[30vh] border border-gray-400 rounded-lg' />
        </div>
        
        <button className=' bg-[#3D50FC] flex ml-10 p-2 rounded-lg'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.32087 12L19.3209 1M8.32087 12L11.8209 19C11.8647 19.0957 11.9352 19.1769 12.0238 19.2338C12.1125 19.2906 12.2156 19.3209 12.3209 19.3209C12.4262 19.3209 12.5293 19.2906 12.6179 19.2338C12.7066 19.1769 12.777 19.0957 12.8209 19L19.3209 1M8.32087 12L1.32087 8.5C1.22513 8.45613 1.144 8.38569 1.08712 8.29705C1.03024 8.20842 1 8.10532 1 8C1 7.89468 1.03024 7.79158 1.08712 7.70295C1.144 7.61431 1.22513 7.54387 1.32087 7.5L19.3209 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            Send Invite
        </button>
    </div>
  )
}

export default EmailInvite