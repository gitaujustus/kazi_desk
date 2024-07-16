'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NewDepartment from '@/components/department/newdepartment';
import { MdTableChart } from "react-icons/md";



function Department() {


  const [showImport, setShowImport] = useState(false);
  const importRef = useRef(null);


  const pathname = usePathname()


  useEffect(() => {
    function handleClickOutside(event) {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setShowImport(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 


 

  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Department</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           
           <div className="relative flex gap-6 overflow-hidden flex-grow w-3/4 ">
           <input 
              type="text"
              placeholder='Start Typing To Search'
              className="w-full bg-[#343434] dark:bg-[#202020] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div>
            
            <button className='flex border border-gray-300 items-center rounded-lg p-2'>
              <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.6174 20.8027 13.5075 20.8762 13.3865 20.9264C13.2655 20.9766 13.1359 21.0024 13.0049 21.0024C12.8739 21.0024 12.7442 20.9766 12.6233 20.9264C12.5023 20.8762 12.3924 20.8027 12.2999 20.71L10.2899 18.7C10.1809 18.5933 10.098 18.4629 10.0477 18.319C9.99739 18.175 9.98103 18.0213 9.99989 17.87V12H9.96989L4.20989 4.62C4.0475 4.41153 3.97422 4.14726 4.00607 3.88493C4.03793 3.6226 4.17232 3.38355 4.37989 3.22C4.56989 3.08 4.77989 3 4.99989 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C19.8275 3.38355 19.9618 3.6226 19.9937 3.88493C20.0256 4.14726 19.9523 4.41153 19.7899 4.62L14.0299 12H13.9999Z" fill="black"/>
                </svg>
              </span>
              Filters
            </button>
        </section>



        {/* nav */}
        <section className=' flex items-center justify-between'>
         <header className='flex flex-wrap gap-3 py-5'>
         <button  onClick={()=> setShowImport(true)} className={`bg-white flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Add Department
        </button>
          
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="black"/>
                    </svg>
                </span>
                Export
            </button>
        </header>
        
       <div className='flex gap-2'>
        <Link href={'/admin/hr/department'} className='flex flex-col items-center'>
            <MdTableChart size={30} className='rounded-full bg-white border border-[#172448] py-1'/>
            <span className='text-xs'>Table&nbsp;View</span>
        </Link>
       
        <Link href={'/admin/hr/department/hierachy'} className='flex flex-col items-center' >
            <svg className='rounded-full bg-white border border-[#172448] py-1' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.3333 0C27.8913 0 27.4674 0.121566 27.1548 0.337954C26.8423 0.554342 26.6667 0.847827 26.6667 1.15385V2.30769H3.33333V1.15385C3.33333 0.847827 3.15774 0.554342 2.84518 0.337954C2.53262 0.121566 2.10869 0 1.66667 0C1.22464 0 0.800716 0.121566 0.488156 0.337954C0.175595 0.554342 0 0.847827 0 1.15385V28.8462C0 29.1522 0.175595 29.4457 0.488156 29.662C0.800716 29.8784 1.22464 30 1.66667 30C2.10869 30 2.53262 29.8784 2.84518 29.662C3.15774 29.4457 3.33333 29.1522 3.33333 28.8462V27.6923H26.6667V28.8462C26.6667 29.1522 26.8423 29.4457 27.1548 29.662C27.4674 29.8784 27.8913 30 28.3333 30C28.7754 30 29.1993 29.8784 29.5118 29.662C29.8244 29.4457 30 29.1522 30 28.8462V1.15385C30 0.847827 29.8244 0.554342 29.5118 0.337954C29.1993 0.121566 28.7754 0 28.3333 0ZM25 23.0769H5C4.55797 23.0769 4.13405 22.9554 3.82149 22.739C3.50893 22.5226 3.33333 22.2291 3.33333 21.9231C3.33333 21.6171 3.50893 21.3236 3.82149 21.1072C4.13405 20.8908 4.55797 20.7692 5 20.7692H25C25.442 20.7692 25.866 20.8908 26.1785 21.1072C26.4911 21.3236 26.6667 21.6171 26.6667 21.9231C26.6667 22.2291 26.4911 22.5226 26.1785 22.739C25.866 22.9554 25.442 23.0769 25 23.0769ZM25 16.1538H5C4.55797 16.1538 4.13405 16.0323 3.82149 15.8159C3.50893 15.5995 3.33333 15.306 3.33333 15C3.33333 14.694 3.50893 14.4005 3.82149 14.1841C4.13405 13.9677 4.55797 13.8462 5 13.8462H25C25.442 13.8462 25.866 13.9677 26.1785 14.1841C26.4911 14.4005 26.6667 14.694 26.6667 15C26.6667 15.306 26.4911 15.5995 26.1785 15.8159C25.866 16.0323 25.442 16.1538 25 16.1538ZM25 9.23077H5C4.55797 9.23077 4.13405 9.1092 3.82149 8.89282C3.50893 8.67643 3.33333 8.38294 3.33333 8.07692C3.33333 7.7709 3.50893 7.47742 3.82149 7.26103C4.13405 7.04464 4.55797 6.92308 5 6.92308H25C25.442 6.92308 25.866 7.04464 26.1785 7.26103C26.4911 7.47742 26.6667 7.7709 26.6667 8.07692C26.6667 8.38294 26.4911 8.67643 26.1785 8.89282C25.866 9.1092 25.442 9.23077 25 9.23077Z" fill="#172448"/>
            </svg>


            <span className='text-xs'>Hierarchy</span>
        </Link>
       </div>
    </section>

{/* table */}
        <section className='rounded-t-lg overflow-x-auto'>
      <table className='w-full'>
        <thead className='bg-white p-4'>
          <tr>
            <td className='text-left px-4 py-4'><input type="checkbox" /></td>
            <th className='text-left px-4 py-2'>Name</th>
            <th className='text-left px-4 py-2'>Parent Department</th>
            <th className='text-left px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody className='bg-[#172448] text-white'>
          <tr>
            <td colSpan={8} className='text-center py-4'></td>
          </tr>
          <tr>
            <td colSpan={8} className='text-center py-10 bg-[#393A40] border border-white'>No data available in table</td>
          </tr>
          <tr>
            <td colSpan={8} className='text-center py-4'></td>
          </tr>
        </tbody>
      </table>
    </section>

        {/* footers */}
       <section className="flex flex-wrap bg-[#172448] text-white p-4 justify-between items-center rounded-b-lg">
          <div className="flex items-center space-x-2">
            <p>Show</p>
            <select className="border border-white rounded bg-[#172448] px-2 py-1">
              <option>10</option>
            </select>
            <span>Entries</span>
          </div>
          <div className='flex flex-wrap gap-2 items-center'>
          <p>Showing 0 to 0 of 0 entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-white rounded ">Previous</button>
            
            <button className="px-3 py-1 border border-white rounded ">Next</button>
          </div>
          </div>
        </section>


{/* New Department */}
        <section 
        ref={importRef}
        className={`flex-1 fixed z-50 top-0 right-0 h-full w-[90vw] bg-[#172448] p-2 sm:p-10 transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <NewDepartment/>
        </section>

    </main>
  )
}

export default Department