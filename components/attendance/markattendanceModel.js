// import React from 'react'

// function MarkAttendance() {
//   return (
//     <main>
//          <div className='bg-white w-full mx-4 min-h-[70vh] rounded-lg px-10 py-5'>
//             <h1 className='text-center text-2xl font-semibold py-2'>Mark Attendance</h1>
//             <p className='py-2 font-semibold text-xl'>Attendance details</p>

       
//       </div>
//     </main>
//   )
// }

// export default MarkAttendance

import React from 'react';
import { useForm } from 'react-hook-form';

export default function MarkAttendanceForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
    <div className="bg-white rounded-lg shadow-md p-6 w-full ">
      <h2 className="text-xl font-bold mb-4 text-blue-900">Mark Attendance</h2>
      <h3 className="text-md font-semibold mb-4 text-gray-700">Attendance Details</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <select {...register("department")} className="w-full p-2 border rounded-md text-sm">
              <option value="">Select department</option>
            </select>
          </div>
          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-1">Employees *</label>
            <select {...register("employees", { required: true })} className="w-full p-2 border rounded-md text-sm">
              <option value="">Select employee</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select {...register("location")} className="w-full p-2 border rounded-md text-sm">
              <option>Hillgan Innovations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mark Attendance By</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("attendanceType")}
                  value="month"
                  className="mr-1"
                  defaultChecked
                />
                <span className="text-sm">Month</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  {...register("attendanceType")}
                  value="date"
                  className="mr-1"
                />
                <span className="text-sm">Date</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
            <select {...register("year", { required: true })} className="w-full p-2 border rounded-md text-sm">
              <option>2024</option>
            </select>
          </div>

          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700 mb-1">Month *</label>
            <select {...register("month", { required: true })} className="w-full p-2 border rounded-md text-sm">
              <option>July</option>
            </select>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 py-3 gap-4">
          <div>
            <label htmlFor="clockIn" className="block text-sm font-medium text-gray-700 mb-1">Clock In *</label>
            <input
              type="time"
              {...register("clockIn", { required: true })}
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>
          <div>
            <label htmlFor="clockOut" className="block text-sm font-medium text-gray-700 mb-1">Clock Out</label>
            <input
              type="time"
              {...register("clockOut")}
              className="w-full p-2 border rounded-md text-sm"
            />
          </div>

          <div className='flex gap-2'>
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Late</label>
                <div className="flex items-center space-x-4">
                <label className="flex items-center">
                    <input
                    type="radio"
                    {...register("late")}
                    value="yes"
                    className="mr-1"
                    />
                    <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center">
                    <input
                    type="radio"
                    {...register("late")}
                    value="no"
                    className="mr-1 text-red-500"
                    />
                    <span className="text-sm">No</span>
                </label>
                </div>
           </div>
           
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Half Day</label>
                <div className="flex items-center space-x-4">
                <label className="flex items-center">
                    <input
                    type="radio"
                    {...register("halfDay")}
                    value="yes"
                    className="mr-1"
                    />
                    <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center">
                    <input
                    type="radio"
                    {...register("halfDay")}
                    value="no"
                    className="mr-1 text-red-500"
                    />
                    <span className="text-sm">No</span>
                </label>
                </div>
           </div>
          </div>
        </div>
        
        

       <div className='flex gap-2 md:gap-6 items-center'>
        <div>
            <label htmlFor="workingFrom" className="block text-sm font-medium text-gray-700 mb-1">Working From *</label>
            <select {...register("workingFrom", { required: true })} className="w-full p-2 border rounded-md text-sm">
                <option>Office</option>
            </select>
            </div>
            <div className="flex items-center">
            <input
                type="checkbox"
                {...register("attendanceOverview")}
                className="mr-2"
            />
            <label htmlFor="attendanceOverview" className="text-sm text-gray-700">Attendance Overview</label>
            </div>
       </div>
        <div className="flex justify-end space-x-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">Save</button>
          <button type="button" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm">Cancel</button>
        </div>
      </form>
    </div>
    </main>
  );
}