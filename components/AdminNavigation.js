import React from 'react';

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-white shadow-lg">
            <div className="p-4 flex items-center">
                <img src="path-to-logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                <div>
                    <h1 className="text-lg font-semibold">KAZIDESK</h1>
                    <p className="text-xs">Innovative Success with Real Desk</p>
                </div>
            </div>
            <nav className="mt-10">
                <ul>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">dashboard</span>
                        <span className="ml-2">Dashboard</span>
                    </li>
                    <li className="pl-8 text-sm text-blue-500">
                        <a href="#">Private Dashboard</a>
                    </li>
                    <li className="pl-8 text-sm text-blue-500">
                        <a href="#">Advanced Dashboard</a>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">contacts</span>
                        <span className="ml-2">Leads</span>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Lead Contact</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Deals</a>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">people</span>
                        <span className="ml-2">Clients</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">work</span>
                        <span className="ml-2">HR</span>
                        <span className="material-icons ml-auto">expand_more</span>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Employees</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Leaves</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Shift Roaster</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Attendance</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Holiday</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Designation</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Department</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Appreciation</a>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">assignment</span>
                        <span className="ml-2">Work</span>
                        <span className="material-icons ml-auto">expand_more</span>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Contracts</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Projects</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Tasks</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Timesheet</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Project Roadmap</a>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">account_balance</span>
                        <span className="ml-2">Finance</span>
                        <span className="material-icons ml-auto">expand_more</span>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Proposal</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Estimates</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Invoices</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Payments</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Credit Note</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Expenses</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">Bank Account</a>
                    </li>
                    <li className="pl-8 text-sm">
                        <a href="#">E-Invoice</a>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">shopping_cart</span>
                        <span className="ml-2">Orders</span>
                    </li>
                    <li className="flex items-center p-2 hover:bg-gray-100">
                        <span className="material-icons">support</span>
                        <span className="ml-2">Tickets</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
