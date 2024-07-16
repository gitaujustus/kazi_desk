'use client'
import React, { useState, useRef, useEffect } from 'react';
import MarkHoliday from '@/components/admin/hr/markHoliday';
import { MdChevronLeft, MdChevronRight, MdAdd, MdClose } from 'react-icons/md';
import { IoMdCheckmark } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import AddHoliday from '@/components/admin/hr/addHoliday';

const Holiday = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 1)); // July 2024
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [showSlidingPanel, setShowSlidingPanel] = useState(false);
    const popupRef = useRef(null);
    const slidingPanelRef = useRef(null);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() + 6) % 7; // Adjust to start week on Monday

    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const openPopup = (day) => {
        setSelectedDate(day);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedDate(null);
    };

    const openSlidingPanel = () => {
        setShowSlidingPanel(true);
    };

    const closeSlidingPanel = () => {
        setShowSlidingPanel(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                closePopup();
            }
            if (slidingPanelRef.current && !slidingPanelRef.current.contains(event.target)) {
                closeSlidingPanel();
            }
        };

        if (showPopup || showSlidingPanel) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPopup, showSlidingPanel]);

    return ( 
        <main className="bg-[#c7c7c7] px-4 py-2 rounded-lg relative">
            <h1 className="py-4 text-blue-theme text-2xl font-bold">Holiday</h1>

            {/* The white search field area */}
            <div className="bg-white shadow-md shadow-black flex flex-wrap items-center justify-between p-4 rounded-lg gap-3">
                <div className="bg-[#393a40] flex items-center justify-between text-white rounded-lg w-[85%]">
                    <p className="p-2"><FaSearch /></p>
                    <input type="text" placeholder="Start Typing To Search" className="bg-[#393a40] p-2 rounded-lg w-full" />
                </div>
                <div className="flex justify-center items-center gap-1 px-1 py-2 border border-black rounded-lg">
                    <FaFilter />
                    <p>Filters</p>
                </div>
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-3 my-4 text-sm">
                <button onClick={openSlidingPanel} className="flex justify-center items-center gap-1 p-2 text-nowrap text-black bg-white border border-black rounded-lg">
                    <IoIosAdd size={28} />
                    <p>Add Holiday</p>
                </button>
                <button onClick={() => openPopup(null)} className="flex justify-center items-center gap-1 p-2 text-nowrap text-black bg-white border border-black rounded-lg">
                    <IoMdCheckmark size={20} />
                    <p>Mark Default Holidays</p>
                </button>
            </div>

            {/* Scrollable container for the calendar */}
            <div className="overflow-x-auto">
                <div className="w-full min-w-[768px]">
                    <div className="w-full mx-auto p-4">
                        <div className="bg-blue-theme text-white p-4 rounded-t-lg">
                            <div className="flex justify-between gap-6 items-center mb-4">
                                <div className="flex justify-between gap-10">
                                    <div className='flex'>
                                        <button onClick={prevMonth} className="p-1 border border-blue-theme bg-white text-blue-theme rounded-l-md"><MdChevronLeft size={24} /></button>
                                        <button onClick={nextMonth} className="p-1 border border-blue-theme bg-white text-blue-theme rounded-r-md"><MdChevronRight size={24} /></button>
                                    </div>
                                    <button className="px-3 py-1 bg-white text-blue-theme rounded text-sm">Today</button>
                                </div>
                                <div className="flex">
                                    <button className="px-3 py-1 border border-blue-theme bg-white text-blue-theme text-sm rounded-l-md">Month</button>
                                    <button className="px-3 py-1 border border-blue-theme bg-white text-blue-theme text-sm">Week</button>
                                    <button className="px-3 py-1 border border-blue-theme bg-white text-blue-theme text-sm">Day</button>
                                    <button className="px-3 py-1 border border-blue-theme bg-white text-blue-theme text-sm rounded-r-md">List</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-b-lg shadow-lg">
                            <div className="grid grid-cols-7 gap-px bg-gray-200 font-semibold text-xs">
                                {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map((day) => (
                                    <div key={day} className="px-4 py-2 text-black">
                                        <p className='text-left'> {day}</p>
                                        <p className='text-red-600 text-left'>{months[currentDate.getMonth()]}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-px bg-blue-theme p-2 ">
                                {Array.from({ length: 35 }, (_, i) => {
                                    const day = i - firstDayOfMonth + 1;
                                    const isCurrentMonth = day > 0 && day <= daysInMonth;
                                    return (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-md m-1 ${isCurrentMonth ? 'bg-white' : 'bg-gray-100'} min-h-[100px]`}
                                        >
                                            {isCurrentMonth && (
                                                <div className=''>
                                                    <div className="flex flex-col justify-center gap-4 items-center">
                                                        <div className="flex justify-end w-full text-sm font-semibold"><span>{day.toString().padStart(2, '0')}</span></div>
                                                        <button onClick={() => openPopup(day)} className="text-white bg-[#772020] hover:bg-red-700 rounded-full p-1">
                                                            <MdAdd size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div ref={popupRef}>
                        <MarkHoliday />
                    </div>
                </div>
            )}

            {/* Sliding Panel */}
            <div 
                ref={slidingPanelRef}
                className={`fixed top-0 right-0 h-full w-3/4 bg-blue-theme transform transition-transform duration-300 ease-in-out ${
                    showSlidingPanel ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Placeholder div for your future component */}
                <AddHoliday />
            </div>
        </main>
    );
}

export default Holiday;