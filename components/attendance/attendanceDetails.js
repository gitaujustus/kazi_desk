import React from 'react';
import { BsClock } from 'react-icons/bs';
import { ClockIcon } from '../ui/svg/icons';

const AttendancePopup = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 mx-auto md:p-4 ">
      <h2 className="text-lg font-semibold mb-4">Attendance Details</h2>
      <div className="flex items-center mb-4 shadow-lg rounded p-2">
        <div className='w-12 h-12'><img src="https://avatars.githubusercontent.com/u/113968776?v=4" alt="Admin" className="rounded-full mr-2" /></div>
        <span>Admin<span className="text-green-500">(YOU)</span></span>
      </div>
      
      <div className="flex space-x-4">
        <div className="bg-navy-800 bg-[#172448] text-white p-4 rounded-lg w-1/2">
          <p className="text-sm mb-2">Date - 02-07-2024 (Tuesday)</p>
          <div className=" text-gray-800 bg-white p-2 rounded-md">
            <p className="font-semibold">Clock In</p>
            <p className="">09:00am</p>
          </div>
          <div className="my-4 ">
            <div className="inset-0 flex items-center justify-center outline-offset-4  ">
            <div className="bg-white shadow-lg shadow-[#3B82F6]  text-gray-900 rounded-full w-24 h-24 flex items-center justify-center transform scale-110">
                 <span className="text-lg font-bold">8Hrs</span>
            </div>

            </div>
            </div>
          <div className="text-gray-800 bg-white p-2 rounded-md">
            <p className="font-semibold">Clock Out</p>
            <p className="">05:00pm</p>
          </div>
        </div>
        
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Activity</h3>
            <button className="bg-red-500 text-white px-3 py-1 rounded">Add</button>
          </div>
          <div className="relative pl-6 border-l-2 border-gray-300">
            <div className="mb-4">
              <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -ml-[7px]"></div>
              <p className="font-semibold">Clock In <span className="text-white px-2 bg-[#3D63DD] py-1 rounded-md text-nowrap">General Shift</span></p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 py-3">
                <ClockIcon />
                <span className='text-nowrap ml-2'>04-07-2024 09:00 am</span>
                <span className="ml-2 font-semibold text-white px-2 bg-[#3D63DD] py-1 rounded-md">Late</span>
              </div>
            </div>
            <div>
              <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -ml-[7px]"></div>
              <p className="font-semibold">Clock Out</p>
              <div className="flex items-center text-sm text-gray-500">
              <ClockIcon />
                <span  className='text-nowrap ml-2'>04-07-2024 05:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePopup;