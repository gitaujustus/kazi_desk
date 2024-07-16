import React from 'react'

function adddesignation() {
  return (
   <div className='w-full bg-[#172448] flex justify-center py-4 px-6 min-h-screen'>
     <div className='bg-white  rounded-lg w-[85%] h-[40vh] px-5 py-2'>
      <h1 className='text-center text-[#172448] font-semibold p-4 text-xl'>Designation</h1>
      <h2 className='text-[#172448] font-semibold'>Add Designation</h2>
      <form className='flex text-left mt-3 justify-between gap-3'>
        <div className='flex flex-col text-[#172448] w-1/2 '>
            <label>Name*</label>
            <input 
            type="text"
            placeholder='e.g TeamLead' 
            className=' border rounded-lg p-2'
            />
        </div>
        <div className='flex flex-col text-[#172448] w-1/2'>
            <label>Parent</label>
            <select className=' border rounded-lg p-2'>
              <option></option>
            </select>
        </div>
      </form>
      <div className='flex gap-3 mt-3 py-2 px-4'>
        <button className='flex items-center p-1 w-20 gap-1 rounded-lg text-white bg-[#3D50FC]'>
            <span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            Save</button>
        <button className='rounded-lg w-20 text-[#172448] bg-[#D8DCFE]'>Cancel</button>
      </div>
    </div>
   </div>
  )
}

export default adddesignation