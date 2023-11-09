// SideBarComponents.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function SideBarComponents() {
    function logout() {
        localStorage.clear("role")
    }

    return (
        <div className='bg-red-600 w-0 md:w-52 min-h-screen flex-none'>
            <div className='flex justify-center font-bold uppercase mt-3 opacity-0 md:opacity-100'> Samudera</div>
            <Link to="/dashboard">
                <div className="flex gap-2 ml-3 mt-4 cursor-pointer opacity-0 md:opacity-100 hover:bg-white items-center h-9 group rounded-lg rounded-r-none">
                    <div className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z" /></svg>
                    </div>
                    <p className={`overflow-hidden transition-all `}>Dashboard</p>
                    {/* {expanded && (
                        <div className="absolute left-10">
                        </div>
                    )} */}
                </div>
            </Link>
            <Link to="/form">
                <div className="flex gap-2 ml-3 mt-4 cursor-pointer opacity-0 md:opacity-100 hover:bg-white items-center h-9 group rounded-lg rounded-r-none">
                    <div className="ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                    </div>
                    <p className={`overflow-hidden transition-all `}>Form Data</p>

                </div>
            </Link>
            <div onClick={logout} className='absolute bottom-3 w-full '>
                <Link to="/login">
                    <div className="flex gap-2 ml-3 mt-4 cursor-pointer opacity-0 md:opacity-100 hover:bg-white items-center h-9 group rounded-lg rounded-r-none">
                        <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                        </div>
                        <p className={`overflow-hidden transition-all `}>Log Out</p>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideBarComponents;
