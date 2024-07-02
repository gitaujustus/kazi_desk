"use client"
import { useState } from "react";
import NavPills from "@/components/advancedNavigation";
import LowerPills from "@/components/overviewLowerNav";

const Overview = () => {
    const [activeItem, setActiveItem] = useState('Income');
    const navItems = ['Income', 'Timesheet', 'Pending Leaves', 'Open Tickets', 'Pending Tasks', 'Pending FollowUp'];

    return ( 
        <main className="bg-[#c7c7c7] dark:bg-dark-background">
            <section className="max-w-4xl mx-auto px-4 py-8">
                {/* Navigation pills */}
                <NavPills />

                {/* Common width class for all outer divs */}
                <div className="mt-8">
                    {/* Row 1 */}
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="flex-1 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-red-600 font-bold mt-2">20</p>
                        </div>
                        <div className="flex-1 bg-white dark:bg-[#1d1d1d] p-4 rounded-md border border-blue-theme text-center">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-red-600 font-bold mt-2">20</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bg-blue-theme text-white rounded-lg p-4 mb-8">
                        <div className="flex justify-between">
                            <div className="flex-1 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients</p>
                                <p>icon</p>
                                <p className="text-red-600 font-bold">20</p>
                            </div>
                            <div className="flex-1 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients</p>
                                <p>icon</p>
                                <p className="text-red-600 font-bold">20</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="bg-white rounded-lg p-4 mb-8">
                        <div className="flex justify-between">
                            <div className="flex-1 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients</p>
                                <p>icon</p>
                                <p className="text-red-600 font-bold">20</p>
                            </div>
                            <div className="flex-1 text-center">
                                <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients</p>
                                <p>icon</p>
                                <p className="text-red-600 font-bold">20</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 4 */}
                    <div className="flex justify-between gap-4 mb-8">
                        <div className="flex-1 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-green-600 font-bold mt-2">20</p>
                        </div>
                        <div className="flex-1 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-green-600 font-bold mt-2">20</p>
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="bg-white rounded-lg shadow-lg mb-8">
                        <LowerPills 
                            items={navItems} 
                            activeItem={activeItem} 
                            onItemClick={setActiveItem} 
                        />
                        <div className="p-4 flex justify-center items-center h-64 bg-gray-100 rounded-lg">
                            <div className="text-center">
                                <div className="bg-gray-300 rounded-full p-4 inline-block mb-2">
                                    <svg className="w-8 h-8 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                                <p className="text-gray-600 font-medium">Not Enough Data</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 6 */}
                    <div className="flex justify-between gap-4 mb-4">
                        <div className="flex-1 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-green-600 font-bold mt-2">20</p>
                        </div>
                        <div className="flex-1 bg-blue-theme text-white text-center p-4 rounded-md">
                            <p className="font-bold text-sm sm:text-md md:text-lg">Total Clients <span>icon</span></p>
                            <p className="text-green-600 font-bold mt-2">20</p>
                        </div>
                    </div>
                </div>
            </section>  
        </main>
    );
}
 
export default Overview;
