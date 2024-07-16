'use client'
import React, { useState, useRef, useEffect } from 'react'
import { FaCalendarWeek, FaSearch } from 'react-icons/fa';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NewLeave from '@/components/leaves/newleave';
import { Absent, CalendarIcon, DayOff, ExportIcon, Holiday, ImportIcon, OnLeave, Present, ShiftChange, SummaryIcon } from '@/components/ui/svg/icons';
import { FaPlane } from 'react-icons/fa6';
import { CiSun } from 'react-icons/ci';
import { GiSunCloud } from 'react-icons/gi';
import ImportAttendance from '@/components/attendance/importAttendance';
import MarkAttendance from '@/components/attendance/markattendanceModel';


function Attendance() {
  const [showImport, setShowImport] = useState(false);
  const [showMarkAtttendance, setshowMarkAtttendance] = useState(false);
  const importRef = useRef(null);
  const attendanceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (importRef.current && !importRef.current.contains(event.target)) {
        setShowImport(false);
      }
      if (attendanceRef.current && !attendanceRef.current.contains(event.target)) {
        setshowMarkAtttendance(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const notes = [
    { label: 'Holiday', icon: <Holiday color={"#F1C526"}/> },
    { label: 'Day Off', icon: <DayOff color={"#3CDD64"}/> },
    { label: 'Present', icon: <Present color={"#3CDD64"}/> },
    { label: 'Half Day', icon: <GiSunCloud  className="w-5 h-5 text-[#F1C526]" />},
    { label: 'Late', icon:  <Absent/> },
    { label: 'Absent', icon: <CalendarIcon color={"#3CDD64"}/> },
    { label: 'On Leave', icon: <OnLeave color={"white"}/> },
  ];


  const attendanceData = [
    {
      employeeId: 1,
      name: "Admin(YOU)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      attendance: [
        { day: "Monday", status: "present" },
        { day: "Tuesday", status: "present" },
        { day: "Wednesday", status: "absent" },
        { day: "Thursday", status: "present" },
        { day: "Friday", status: "holiday" },
        { day: "Saturday", status: "dayOff" },
        { day: "Sunday", status: "weekend" }
      ]
    },
    {
      employeeId: 2,
      name: "Amon Were",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      attendance: [
        { day: "Monday", status: "present" },
        { day: "Tuesday", status: "present" },
        { day: "Wednesday", status: "present" },
        { day: "Thursday", status: "present" },
        { day: "Friday", status: "holiday" },
        { day: "Saturday", status: "dayOff" },
        { day: "Sunday", status: "weekend" }
      ]
    },
    {
      employeeId: 1,
      name: "Timothy Luambo",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      attendance: [
        { day: "Monday", status: "present" },
        { day: "Tuesday", status: "present" },
        { day: "Wednesday", status: "halfday" },
        { day: "Thursday", status: "present" },
        { day: "Friday", status: "holiday" },
        { day: "Saturday", status: "dayOff" },
        { day: "Sunday", status: "weekend" }
      ]
    },
    {
      employeeId: 1,
      name: "Olunda Deborah",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      attendance: [
        { day: "Monday", status: "holiday" },
        { day: "Tuesday", status: "holiday" },
        { day: "Wednesday", status: "holiday" },
        { day: "Thursday", status: "holiday" },
        { day: "Friday", status: "holiday" },
        { day: "Saturday", status: "dayOff" },
        { day: "Sunday", status: "weekend" }
      ]
    }
  ];


  const getStatusIcon = (status) => {
    switch (status) {
      case 'present': return <Present  color={"#172448"} />;
      case 'absent': return <Absent  />;
      case 'holiday': return <Holiday color={"#172448"} />;
      case 'dayOff': return <DayOff  color={"#172448"} />;
      case 'onLeave': return <OnLeave  color={"#172448"} />;
      case 'halfday': return <GiSunCloud  color={"#172448"} />;
      case 'weekend': return <CalendarIcon color={"#172448"} />
      default: return null;
    }
  };

  


  return (
    <main className='bg-[#C7C7C7] rounded-lg mx-5 px-3 py-3 '>
        <p className='font-bold text-2xl text-left py-5'>Attendance</p>
        {/* search and filters */}
        <section className='flex flex-wrap bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Employee</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Department</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>
           <div className='flex gap-3 items-center'>
              <label htmlFor="">Designation</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
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
         <button  onClick={()=> showMarkAtttendance(true)} className={`bg-white flex gap-2   items-center rounded-lg p-2`}>
            <span>
                <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="black"/>
                </svg>
            </span>
            Mark Attendance
        </button>
            <button onClick={()=> setShowImport(true)} className={`text-black bg-white flex gap-2 items-center rounded-lg p-2`}>
                <ImportIcon/>
                import
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

{/* tabkle */}
        <section className='rounded-lg overflow-x-auto'>
        <table className="w-full">
        <thead className=''>
          <tr className="bg-slate-100 ">
            <th className="p-3 text-left ">Employee</th>
            {attendanceData[0].attendance.map((day, index) => (
              <th key={day.day} className="p-3 text-center">{index + 1}<br/>{day.day}</th>
            ))}
          </tr>
        </thead>
        <tbody className='bg-white '>
          {attendanceData.map((employee) => (
            <tr key={employee.employeeId}>
              <td className="p-3 flex items-center">
                <img src={employee.image} alt={employee.name} className="w-8 h-8 rounded-full mr-2" />
                {employee.name}
              </td>
              {employee.attendance.map((day, index) => (
                <td key={`${employee.employeeId}-${day.day}`} className="p-3 text-center text-gray-900">
                  {getStatusIcon(day.status)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>



    <section className="bg-[#172448] my-10 text-white p-6 rounded-xl shadow-lg max-w-sm">
      <h2 className="text-xl font-bold mb-4">Note</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index} className="flex items-center justify-between py-2">
            <span>{note.label}</span>
            <div className="flex items-center">
              <span className="mr-2">→</span>
              {typeof note.icon === 'string' ? (
                <span className="text-xl">{note.icon}</span>
              ) : (
                note.icon
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>

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

export default Attendance

