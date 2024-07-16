'use client'
import React from 'react'
import { MdTableChart } from "react-icons/md";
import { PiLadderSimpleFill } from "react-icons/pi";

function tableview() {
  return (
    <div className="p-6 bg-[#C7C7C7] min-h-screen rounded-lg">
            <h2 className="text-2xl font-bold text-[#172448] mb-6">Designation</h2>
            <div className="flex items-center bg-white rounded-lg mb-4 gap-4">
              <div className='flex items-center gap-2  px-4 py-2'> 
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z" fill="white"/>
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Start typing to search"
                        className="border rounded-lg px-4 py-2 w-[55vw] bg-[#393A40] flex-1"
                    />
              </div>
                <button className="border rounded-lg gap-2 flex items-center px-4 py-2">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9992 12V19.88C14.0392 20.18 13.9392 20.5 13.7092 20.71C13.6166 20.8027 13.5068 20.8762 13.3858 20.9264C13.2648 20.9766 13.1351 21.0024 13.0042 21.0024C12.8732 21.0024 12.7435 20.9766 12.6225 20.9264C12.5016 20.8762 12.3917 20.8027 12.2992 20.71L10.2892 18.7C10.1802 18.5933 10.0973 18.4629 10.047 18.319C9.99666 18.175 9.9803 18.0213 9.99915 17.87V12H9.96915L4.20915 4.62C4.04676 4.41153 3.97349 4.14726 4.00534 3.88493C4.0372 3.6226 4.17159 3.38355 4.37915 3.22C4.56915 3.08 4.77915 3 4.99915 3H18.9992C19.2192 3 19.4292 3.08 19.6192 3.22C19.8267 3.38355 19.9611 3.6226 19.993 3.88493C20.0248 4.14726 19.9515 4.41153 19.7892 4.62L14.0292 12H13.9992Z" fill="black"/>
                        </svg>
                    </span>
                    Filters</button>
            </div>
            <div className="flex items-center justify-between mb-4 gap-4">
                <div className='flex gap-3'>
                  <button className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2">
                      <span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="#172448"/>
                          </svg>
                      </span>
                      Add Designation
                    </button>
                  <button className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2">
                      <span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="#172448"/>
                          </svg>
                      </span>
                      Export
                    </button>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <button><MdTableChart size={30} className=' border bg-white rounded-full '/>Tableview</button>
                  <button><PiLadderSimpleFill size={30} className='bg-[#172448] border text-white rounded-full'/>Hierachy</button>
                </div>
            </div>
            <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="w-full text-[#172448] uppercase text-sm  rounded-t-lg">
                <th className="py-3 px-6 text-left">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Parent Designation</th>
                <th className="py-3 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#393A40] text-white h-[30vh] text-sm font-light">
              <tr className=" ">
                <td className="py-3 px-6 text-left">
                  <input type="checkbox" />
                </td>
                <td className="py-3 px-6 text-left">No data available in table</td>
                <td className="py-3 px-6 text-left"></td>
                <td className="py-3 px-6 text-left"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center bg-[#172448] rounded-lg p-2 justify-between">
          <div className="flex  text-white items-center gap-2">
            <label>Show</label>
            <select className="border text-black rounded-lg px-2 py-1">
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <span>Entries</span>
          </div>
          <div className="flex items-center text-white gap-2">
            <p>showing 0 to 0 of 0 entries</p>
            <button className="border rounded-lg px-4 py-2">Previous</button>
            <button className="rounded-lg px-4 py-2">Next</button>
          </div>
          </div>
        
    </div>
  )
}

export default tableview