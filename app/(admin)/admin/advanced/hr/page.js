// "use client"
// import { useState } from "react";
import NavPills from "@/components/advancedNavigation";
import HrTabs from "@/components/hrTabs";
import LowerPills from "@/components/overviewLowerNav";
import { BsPersonFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLeaf, FaBirthdayCake } from 'react-icons/fa';
import { FaClock } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbBriefcaseFilled } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { IoTicket } from "react-icons/io5";
import { TbWaveSawTool } from "react-icons/tb";
import ClientTabs from "@/components/clientTabs";

const HR = () => {
    // const [activeItem, setActiveItem] = useState('Income');
    // const navItems = ['Income', 'Timesheet', 'Pending Leaves', 'Open Tickets', 'Pending Tasks', 'Pending FollowUp'];
    let leavesApproved = 20;
    let totalEmployees = 20;
    let newEmployees = 20;
    let employeesExits = 0;
    let todaysAttendance = 0;
    let totalAttendance = 4;
    let averageAttendance = 0;

    return ( 
        <main className="bg-[#c7c7c7] dark:bg-dark-background">
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation pills */}
                <NavPills />

                {/* Common width class for all outer divs */}
                <div className="mt-8">
                    {/* Row 1 */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                        <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center">Leaves Approved <span><BsPersonFill size={24} /></span></p>
                            <p className="text-red-600 font-bold mt-2">{leavesApproved}</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg flex gap-4 items-center justify-center"> Employees <span><FaPeopleGroup size={24} /></span></p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div>
                                    <p className="text-red-600 font-bold mt-2">{totalEmployees}</p>
                                    <p className="font-semibold">Total Employees</p>
                                </div>
                                <div>
                                    <p className="text-red-600 font-bold mt-2">{totalEmployees}</p>
                                    <p className="font-semibold">New Employees</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8">
                        <div className="flex justify-start text-left">
                            {/* <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">New Employees</p>
                                <p><FaClock size={24} /></p>
                                <p className="text-red-600 font-bold">{newEmployees} hrs</p>
                            </div> */}
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Employees Exits</p>
                                <p><MdOutlinePendingActions size={24} /></p>
                                <p className="text-red-600 font-bold">{employeesExits}</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="bg-white rounded-lg p-4 mb-8">
                        <div className="flex justify-between">
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Today&apos;s Attendance</p>
                                <p><TbBriefcaseFilled size={24} /></p>
                                <p className="text-red-600 font-bold">{todaysAttendance}/{totalAttendance}</p>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Average Attendance</p>
                                <p><FaFileInvoice size={24} /></p>
                                <p className="text-red-600 font-bold">{averageAttendance}%</p>
                            </div>
                        </div>
                    </div>

                   

                    {/* Row 4 */}
                    <HrTabs />
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-9 ">
                         <div className="bg-blue-theme rounded-lg w-1/2 h-44">
                            <div className="border-b border-gray-200"><h1 className="text-white text-center my-4 font-semibold text-md">Leaves Taken <span className="mx-1">icon</span></h1></div>
                                <div className="h-36">
                                    <h3 className="bg-gray-300 text-blue-theme text-center  w-24 sm:w-44 h-16 sm:h-24 rounded-lg mx-auto my-5">No Records Found</h3>
                                </div>
                        </div>
                        <div className="bg-blue-theme rounded-lg w-1/2 h-44">
                            <div className="border-b border-gray-200"><h1 className="text-white text-center my-4 font-semibold text-md">Birthdays<span className="mx-1">icon</span></h1></div>
                                <div className="h-36">
                                    <h3 className="bg-gray-300 text-blue-theme text-center  w-24 sm:w-44 h-16 sm:h-24 rounded-lg mx-auto my-5">No Records Found</h3>
                                </div>
                        </div>
                    </div>

                    <div className="bg-blue-theme rounded-lg ">
                        <div className="flex justify-between border-b border-gray-300 px-4 py-4 my-4 text-white font-semibold">
                            <h1>Late Attendance</h1>
                            <p>Calendar icon</p>
                        </div>
                        <div className="h-36">
                                    <h3 className="bg-gray-300 text-blue-theme text-center w-24 sm:w-44 h-16 sm:h-24 rounded-lg mx-auto my-5">No Records Found</h3>
                                </div>
                    </div>


                 
                </div>
            </section>  
        </main>
    );
}
 
export default HR;
