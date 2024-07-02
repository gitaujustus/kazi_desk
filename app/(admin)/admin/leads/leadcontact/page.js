'use client'
import React, {useState} from 'react'
import { SlOptionsVertical } from "react-icons/sl";


function leadcontact() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 2, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 3, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 4, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 5, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 6, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 7, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 8, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    { id: 9, name: 'Abraham Ryle', company: 'Company X', email: 'example@example.com', addedBy: 'Amon Were', created: '20-05-2024', status: 'inactive' },
    
  ]);

  return (
    <div className='bg-[#C7C7C7] rounded-lg mx-5 px-3 h-[190vh]'>
        <p className='font-bold text-2xl text-left py-5'>Lead Contact</p>
        <div className='flex bg-white gap-3 w-full p-4 rounded-lg justify-between'>
           <div className='flex gap-3 items-center'>
            <label htmlFor="">Duration</label>
              <input 
              type="text"
              placeholder='StartDateToEndDate'
              className='border border-gray-300 rounded-lg p-2'
              />
           </div>

           <div className='flex gap-3 items-center'>
              <label htmlFor="">Type</label>
              <select className='border border-gray-300 rounded-lg p-2'>
                  <option value="All" >All</option>
              </select>
           </div>

            <div className=' flex items-center bg-[#393A40] rounded-lg  gap-2 text-white '>
              <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3333 17.5L11.0833 12.25C10.6667 12.5833 10.1875 12.8472 9.64583 13.0417C9.10417 13.2361 8.52778 13.3333 7.91667 13.3333C6.40278 13.3333 5.12167 12.8089 4.07333 11.76C3.025 10.7111 2.50056 9.43 2.5 7.91667C2.49944 6.40333 3.02389 5.12222 4.07333 4.07333C5.12278 3.02444 6.40389 2.5 7.91667 2.5C9.42944 2.5 10.7108 3.02444 11.7608 4.07333C12.8108 5.12222 13.335 6.40333 13.3333 7.91667C13.3333 8.52778 13.2361 9.10417 13.0417 9.64583C12.8472 10.1875 12.5833 10.6667 12.25 11.0833L17.5 16.3333L16.3333 17.5ZM7.91667 11.6667C8.95833 11.6667 9.84389 11.3022 10.5733 10.5733C11.3028 9.84444 11.6672 8.95889 11.6667 7.91667C11.6661 6.87444 11.3017 5.98917 10.5733 5.26083C9.845 4.5325 8.95944 4.16778 7.91667 4.16667C6.87389 4.16556 5.98861 4.53028 5.26083 5.26083C4.53306 5.99139 4.16833 6.87667 4.16667 7.91667C4.165 8.95667 4.52972 9.84222 5.26083 10.5733C5.99195 11.3044 6.87722 11.6689 7.91667 11.6667Z" fill="white"/>
                  </svg>
              </span>
              <input 
              type="text"
              placeholder='StartTypingToSearch'
              className='bg-[#393A40]'
              />
            </div>

            <button className='flex border border-gray-300 items-center rounded-lg p-2'>
              <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.6174 20.8027 13.5075 20.8762 13.3865 20.9264C13.2655 20.9766 13.1359 21.0024 13.0049 21.0024C12.8739 21.0024 12.7442 20.9766 12.6233 20.9264C12.5023 20.8762 12.3924 20.8027 12.2999 20.71L10.2899 18.7C10.1809 18.5933 10.098 18.4629 10.0477 18.319C9.99739 18.175 9.98103 18.0213 9.99989 17.87V12H9.96989L4.20989 4.62C4.0475 4.41153 3.97422 4.14726 4.00607 3.88493C4.03793 3.6226 4.17232 3.38355 4.37989 3.22C4.56989 3.08 4.77989 3 4.99989 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C19.8275 3.38355 19.9618 3.6226 19.9937 3.88493C20.0256 4.14726 19.9523 4.41153 19.7899 4.62L14.0299 12H13.9999Z" fill="black"/>
                </svg>
              </span>
              Filters
            </button>
        </div>
       <div className=' flex items-center justify-between'>
         <div  className='flex gap-3 py-5'>
         <button className='flex gap-2 text-white bg-[#3D50FC] items-center rounded-lg p-2'>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z" fill="white"/>
              </svg>
            </span>
            AddLeadContact
          </button>

          <button className='flex gap-2 items-center bg-white rounded-lg p-2'>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.71 7.04055C21.1 6.65055 21.1 6.00055 20.71 5.63055L18.37 3.29055C18 2.90055 17.35 2.90055 16.96 3.29055L15.12 5.12055L18.87 8.87055M3 17.2505V21.0005H6.75L17.81 9.93055L14.06 6.18055L3 17.2505Z" fill="#172448"/>
              </svg>
            </span>
            LeadForm
          </button>

          <button className='flex gap-2 items-center bg-white rounded-lg p-2'>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.293 9.707L11.293 14.707L12 15.414L12.707 14.707L17.707 9.707L16.293 8.293L13 11.586V4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H11V11.586L7.707 8.293L6.293 9.707Z" fill="#172448"/>
              </svg>
            </span>
            Import
          </button>

          <button className='flex gap-2 items-center bg-white rounded-lg p-2'>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2M13 3.5L18.5 9H13M8.93 12.22H16V19.29L13.88 17.17L11.05 20L8.22 17.17L11.05 14.35" fill="black"/>
              </svg>
            </span>
            Export
          </button>
         </div>

        <div>
        <button>
            <svg width="38" height="38" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="23.5" fill="white" stroke="black" stroke-width="3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.3437 7.41401C27.6483 7.14258 26.7648 7.14258 24.9998 7.14258C23.2348 7.14258 22.3533 7.14258 21.6559 7.41401C20.7301 7.7751 19.9932 8.47073 19.6071 9.34794C19.4304 9.74615 19.3628 10.2122 19.3346 10.889C19.322 11.3794 19.1781 11.8586 18.9162 12.2814C18.6544 12.7041 18.2835 13.0565 17.8384 13.3051C17.3849 13.5445 16.8751 13.6714 16.3563 13.6739C15.8375 13.6764 15.3264 13.5545 14.8704 13.3194C14.2351 13.0015 13.7746 12.8265 13.3197 12.7694C12.3245 12.6452 11.318 12.8994 10.519 13.4765C9.92129 13.9086 9.47957 14.6301 8.59802 16.0711C7.71458 17.5122 7.27475 18.2319 7.17513 18.9372C7.04355 19.8765 7.31422 20.8265 7.92698 21.5783C8.20517 21.9212 8.59802 22.2087 9.20515 22.5694C10.1017 23.0997 10.6769 24.0033 10.6769 24.9997C10.6769 25.9962 10.1017 26.8997 9.20702 27.4283C8.59802 27.7908 8.20517 28.0783 7.9251 28.4212C7.62264 28.7925 7.40063 29.2171 7.2719 29.6704C7.14317 30.1237 7.11028 30.5968 7.17513 31.0622C7.27475 31.7658 7.71458 32.4872 8.59802 33.9283C9.48145 35.3694 9.92129 36.089 10.519 36.5229C11.316 37.0997 12.3235 37.3533 13.3197 37.2301C13.7746 37.1729 14.2351 36.9979 14.8704 36.6801C15.3266 36.4447 15.8381 36.3225 16.3573 36.325C16.8764 36.3275 17.3865 36.4546 17.8402 36.6944C18.7538 37.1944 19.2951 38.114 19.3346 39.1104C19.3628 39.789 19.4304 40.2533 19.6071 40.6515C19.9906 41.5265 20.7274 42.2229 21.6559 42.5854C22.3514 42.8569 23.2348 42.8569 24.9998 42.8569C26.7648 42.8569 27.6483 42.8569 28.3437 42.5854C29.2695 42.2243 30.0065 41.5287 30.3925 40.6515C30.5692 40.2533 30.6369 39.789 30.6651 39.1104C30.7027 38.114 31.2459 37.1926 32.1613 36.6944C32.6148 36.4549 33.1245 36.328 33.6433 36.3255C34.1622 36.323 34.6732 36.445 35.1292 36.6801C35.7646 36.9979 36.2251 37.1729 36.68 37.2301C37.6762 37.3551 38.6837 37.0997 39.4806 36.5229C40.0784 36.0908 40.5201 35.3694 41.4016 33.9283C42.2851 32.4872 42.7249 31.7676 42.8245 31.0622C42.8891 30.5966 42.8559 30.1235 42.7269 29.6702C42.5978 29.2169 42.3755 28.7923 42.0727 28.4212C41.7945 28.0783 41.4016 27.7908 40.7945 27.4301C39.8979 26.8997 39.3227 25.9962 39.3227 24.9997C39.3227 24.0033 39.8979 23.0997 40.7926 22.5712C41.4016 22.2087 41.7945 21.9212 42.0745 21.5783C42.377 21.207 42.599 20.7824 42.7278 20.3291C42.8565 19.8757 42.8894 19.4027 42.8245 18.9372C42.7249 18.2336 42.2851 17.5122 41.4016 16.0711C40.5182 14.6301 40.0784 13.9104 39.4806 13.4765C38.6816 12.8994 37.6751 12.6452 36.68 12.7694C36.2251 12.8265 35.7646 13.0015 35.1292 13.3194C34.673 13.5548 34.1616 13.6769 33.6424 13.6744C33.1232 13.6719 32.6131 13.5449 32.1594 13.3051C31.7147 13.0563 31.3441 12.7038 31.0826 12.2811C30.8211 11.8583 30.6774 11.3792 30.6651 10.889C30.6369 10.2104 30.5692 9.74615 30.3925 9.34794C30.2015 8.91353 29.9222 8.51915 29.5707 8.18732C29.2191 7.85549 28.8022 7.59272 28.3437 7.41401ZM24.9998 30.3569C28.1388 30.3569 30.682 27.9587 30.682 24.9997C30.682 22.0408 28.137 19.6426 24.9998 19.6426C21.8608 19.6426 19.3177 22.0408 19.3177 24.9997C19.3177 27.9587 21.8627 30.3569 24.9998 30.3569Z" fill="black"/>
            </svg>
         </button>
        </div>
       </div>
       <div className='rounded-lg'>
          <table className='w-full  '>
            <thead className='bg-white p-4'>
              <tr>
                <th className='text-left px-4 py-2'><input type='checkbox'/></th>
                <th className='text-left px-4 py-2'>ContactName</th>
                <th className='text-left px-4 py-2'>CompanyName</th>
                <th className='text-left px-4 py-2'>Email</th>
                <th className='text-left px-4 py-2'>AddedBy</th>
                <th className='text-left px-4 py-2'>Created</th>
                <th className='text-left px-4 py-2'>Action</th>
              </tr>
            </thead>
            <tbody className='bg-[#172448] text-white '>
                {contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className='px-4 py-4'><input type="checkbox" /></td>
                    <td className="px-4 py-4 ">{contact.name} <p className='bg-[#3CDD64] w-10 rounded-md text-xs text-center'>client</p></td>
                    <td className="px-4 py-4">{contact.company}</td>
                    <td className="px-4 py-4">{contact.email}</td>
                    <td className="px-4 py-4">{contact.addedBy}</td>
                    <td className="px-4 py-4">{contact.created}</td>
                    <td className="px-4 py-4"><button className='bg-white text-black p-1 rounded-md'><SlOptionsVertical /></button></td>
                  </tr>
                ))}
              </tbody>
          </table>
       </div>
       <div className="flex bg-white p-4 justify-between items-center rounded-b-lg">
          <div className="flex items-center space-x-2">
            <p>Show</p>
            <select className="border rounded px-2 py-1">
              <option>10</option>
            </select>
            <span>Entries</span>
          </div>
          <div className='flex gap-2 items-center'>
          <p>Showing 1 to 9 of 9 entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-red-500 text-white rounded">1</button>
            <button className="px-3 py-1 border rounded text-gray-600">Next</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default leadcontact