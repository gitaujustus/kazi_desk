'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Absent, CalendarIcon, ExportIcon, Holiday, ImportIcon, Present, SearchIcon, ShiftChange, SummaryIcon, WorkingDays } from '@/components/ui/svg/icons';
import { GiSunCloud } from 'react-icons/gi';
import AttendancePopup from '@/components/attendance/attendanceDetails';
import MarkAttendance from '@/components/attendance/markattendanceModel';
import ImportAttendance from '@/components/attendance/importAttendance';


function MembersAttendance() {
  const [showImport, setShowImport] = useState(false);
  const [showEmployeeModel, setShowEmployeeDetailsModel]=useState(false)
  const [showMarkAtttendance, setshowMarkAtttendance] = useState(false);
  const importRef = useRef(null);
  const attendanceRef = useRef(null);
  const employeeModelRef = useRef(null);


 //   for showing Show model
 useEffect(() => {
    function handleClickOutside(event) {
      if (employeeModelRef.current && !employeeModelRef.current.contains(event.target)) {
        setShowEmployeeDetailsModel(false);
      }
      if (importRef.current && !importRef.current.contains(event.target)) {
        setShowImport(false);
      }
      if (attendanceRef.current && !attendanceRef.current.contains(event.target)) {
        setshowMarkAtttendance(false);
      }
      if (employeeModelRef.current && !employeeModelRef.current.contains(event.target)) {
        setShowEmployeeDetailsModel(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  


  


    const attendance = [
        { date: '27-05-2024', day: 'Monday', status: 'absent', clockIn: '-', clockOut: '-', total: '-', other:'-' },
        { date: '28-05-2024', day: 'Tuesday', status: 'present', clockIn: '8:00 am', clockOut: '5:00 pm', total: '8:00 hr', other:'-' },
        { date: '29-05-2024', day: 'Wednesday', status: 'present', clockIn: '8:00 am', clockOut: '5:00 pm', total: '8:00 hr', other:'-' },
        { date: '30-05-2024', day: 'Thursday', status: 'present', clockIn: '8:00 am', clockOut: '5:00 pm', total: '8:00 hr', other:'details' },
        { date: '31-05-2024', day: 'Friday', status: 'present', clockIn: '8:00 am', clockOut: '5:00 pm', total: '8:00 hr', other:'-' },
        { date: '01-05-2024', day: 'Saturday', status: 'present', clockIn: '8:00 am', clockOut: '5:00 pm', total: '8:00 hr', other:'-' },
        { date: '02-05-2024', day: 'Sunday', status: 'absent', clockIn: '-', clockOut: '-', total: '-', other:'-' }
      ];
      




  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Attendance</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg '>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Employee</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >Admin (YOU)</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
            <label htmlFor="month">Month</label>
            <select id="month" name="month" className='border border-gray-300 rounded-lg p-2'>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            </div>
            <div className='flex gap-3 items-center'>
            <label htmlFor="year">Year</label>
            <select id="year" name="year" className='border border-gray-300 rounded-lg p-2'>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
            </select>
            </div>
            <div className='flex flex-col items-end  justify-end'>
            <div class="flex items-center space-x-2">
            <span class="text-gray-700">From</span>
                <select id="from-day" class="border border-gray-300 rounded-md px-3 py-1 my-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                </select>
            </div>

            <div class="flex items-center space-x-2">
                <span class="text-gray-700">To</span>
                <select id="from-day" class="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                </select>
            </div>
            </div>
          
        </section>

        {/* nav */}
        <section className=' flex items-center justify-between'>
         <header className='flex flex-wrap gap-3 py-5'>
         <button  onClick={()=> setshowMarkAtttendance(true)} className={`bg-white flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Mark Attendance
        </button>
            <button onClick={()=> setShowImport(true)} className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <ImportIcon/>
                Import
            </button>
            <button className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <ExportIcon/>
                Export
            </button>
        </header>
        
       <div className='flex gap-2'>
        <Link href={'/admin/hr/leaves'} className='flex flex-col items-center'>
            <SummaryIcon/>
            <span className='text-xs'>Summary</span>
        </Link>
        <Link href={'#'} className='flex flex-col items-center'>
            <ShiftChange/>
            <span className='text-xs text-nowrap'>Shift Change Requests</span>
        </Link>
       </div>
    </section>

    {/* employee attendance card */}
    <section className='py-4 gap-2 flex my-2 overflow-x-auto'>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white '>Working Days</p>
            <p className='flex justify-end py-3'><WorkingDays/></p>
            <p className='text-red-500'>31</p>
        </div>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white text-nowrap'>Days Present</p>
            <p className='flex justify-end py-3'><Present  color={"#3CDD64"} /></p>
            <p className='text-red-500'>3</p>
        </div>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white '>Late</p>
            <p className='flex justify-end py-3 text-lg'><Absent/></p>
            <p className='text-red-500'>1</p>
        </div>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white text-nowrap'>Half Day</p>
            <p className='flex justify-end py-3'> <GiSunCloud  className="w-7 h-7 text-[#F1C526]" /></p>
            <p className='text-red-500'>31</p>
        </div>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white '>Absent</p>
            <p className='flex justify-end py-3'><CalendarIcon color={"#3CDD64"}/></p>
            <p className='text-red-500'>1</p>
        </div>
        <div className='bg-[#172448] rounded-lg p-4  w-36 min-w-32'>
            <p className='font-semibold text-white '>Holiday</p>
            <p className='flex justify-end py-3'><Holiday color={"#F1C526"} /></p>
            <p className='text-red-500'>1</p>
        </div>
    </section>

{/* table */}
        <section className='rounded-lg overflow-x-auto'>
        <table className="w-full">
        <thead className=''>
          <tr className="bg-slate-100 ">
            <th className="p-3 text-left ">Date</th>
            <th className="p-3 text-left text-nowrap ">Status</th>
            <th className="p-3 text-left text-nowrap ">Clock In</th>
            <th className="p-3 text-left text-nowrap ">Clock Out</th>
            <th className="p-3 text-left text-nowrap ">Total</th>
            <th className="p-3 text-left ">Others</th>
          </tr>
        </thead>
        <tbody className='bg-white '>
          {attendance.map((obj) => (
            <tr key={obj.employeeId}>
             <td className="p-3">
                <p>{obj.date}</p>
                <p className='inline-block px-2  rounded-md bg-gray-700 text-white text-center'>{obj.day}</p>
                </td>
              <td className="p-3 text-nowrap"><p className={`rounded-md inline-block px-2  ${obj.status==='absent'? 'bg-red-500': 'bg-green-500'}`}>{obj.status}</p></td>
              <td className="p-3 text-nowrap">{obj.clockIn}</td>
              <td className="p-3 text-nowrap">{obj.clockOut}</td>
              <td className="p-3 text-nowrap">{obj.total}</td>
              <td className="p-3 text-nowrap">{obj.other == 'details' ? <button  onClick={() => setShowEmployeeDetailsModel(true)} className='bg-gray-600 text-white px-2 py-1 rounded-md flex gap-2 items-center'> <SearchIcon/> Details</button>: '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    {showEmployeeModel && (
        <div className='fixed inset-0 bg-black p-2 bg-opacity-50 flex justify-center items-center z-50'>
          <div ref={employeeModelRef}>
            <AttendancePopup onClose={() => setShowEmployeeDetailsModel(false)} />
          </div>
        </div>
      )}

 {/* Import attendance  Modal */}
 <section 
        ref={importRef}
        className={`flex-1 fixed z-50 top-0 right-0 h-full w-[90vw] bg-[#172448] p-2 sm:p-10 transition-transform duration-300 ease-in-out transform ${
          showImport ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
        <ImportAttendance/>
        </section>


     {/* mark attendance model   */}
     <section 
        ref={attendanceRef}
        className={`flex-1 fixed z-50 top-0 right-0 h-full w-[90vw] bg-[#172448] p-2 sm:p-10 transition-transform duration-300 ease-in-out transform ${
          showMarkAtttendance ? 'translate-x-0' : 'translate-x-full'
        }  overflow-y-auto`}
      >
          <MarkAttendance/>
        </section>
      

    </main>
  )
}

export default MembersAttendance

