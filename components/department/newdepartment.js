'use client'
import React from 'react'

const NewDepartment = () => {
  return (
    <div className="bg-[#172448] px-4 py-8 z-50" >
        <form action='' className='p-3 bg-white max-w-5xl mx-auto text-sm rounded-lg'>
        <p className='font-bold text-2xl text-center py-5'>Department</p>
        <p className='font-semibold text-2xl text-left py-5 mb-4'>Add Department</p>
        <div className='flex justify-around'>
          <div className='w-[48%]'>
            <label>Name*</label>
            <input className='border border-gray-400 rounded-lg p-2 w-full' placeholder='e.g. HumanResource'/>
          </div>
          <div className='w-[48%]'>
              <label>Parent*</label>
              <select className='border border-gray-400 rounded-lg p-2 w-full'>
                  <option value=" " > </option>
              </select>
          </div>
        </div>
        <div className='text-xs pt-8 flex'>
                <button type='submit' className='bg-[#3D50FC] text-white px-8 py-2 rounded-md flex justify-center items-center'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.125 13.125L9.375 18.375L19.875 7.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                    Save
                </button>
                <button className='bg-gray-300 px-8 py-2 rounded-md ml-4'>Cancel</button>
            </div>
        </form>
        </div>
  )
}

export default NewDepartment