"use client"
import React, { useState } from 'react';
import TypeWiseTicket from './typeWiseTicket';
import StatusWiseTicket from './statusWiseTicket';
import ChannelWiseTicket from './admin/advanced/ticket/channelWiseTicket';
import OpenTickets from './openTickets';
// import NotEnoughData from './notEnoughData';

const ClientLowerPills = () => {
    const [activePill, setActivePill] = useState('TypeWiseTicket');

    const pillItems = [
        { id: 'TypeWiseTicket', label: "Type Wise Ticket" },
        { id: 'StatusWiseTicket', label: "Status Wise Ticket" },
        { id: 'ChannelWiseTicket', label: "Channel Wise Ticket" },
        { id: 'OpenTickets', label: "Open Tickets" },
    ];

    const renderContent = () => {
        switch (activePill) {
            case 'TypeWiseTicket':
                return <TypeWiseTicketContent />;
            case 'StatusWiseTicket':
                return <StatusWiseTicketContent />;
            case 'ChannelWiseTicket':
                return <ChannelWiseTicketContent />;
            case 'OpenTickets':
                return <OpenTicketsContent />;
            default:
                return <NotEnoughData />;
        }
    };

    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="flex flex-wrap justify-center gap-2 bg-blue-theme p-2 rounded-t-lg">
                {pillItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActivePill(item.id)}
                        className={`${
                            activePill === item.id
                                ? 'bg-[#3d50fc] text-white'
                                : 'bg-white text-blue-theme'
                        }  basis-1/3 sm:basis-auto rounded-full border-blue-theme border px-3 py-1 text-center text-xs `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                {renderContent()}
            </div>
        </div>
    );
};

// Placeholder components for each content type
const TypeWiseTicketContent = () => <div><TypeWiseTicket /></div>;
const StatusWiseTicketContent = () => <div><StatusWiseTicket /></div>;
const ChannelWiseTicketContent = () => <div><ChannelWiseTicket /> </div>;
const OpenTicketsContent = () => <div><OpenTickets /></div>;
const NotEnoughData = () => (
    <div className="text-center py-8">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        </div>
        <p className="text-gray-600">Not Enough Data</p>
    </div>
);

export default ClientLowerPills;