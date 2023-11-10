// Layout.jsx
import React, { useEffect } from 'react'
import SideBarComponents from './SideBar'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { notification } from 'antd';

function Layout({ children }) {
    const location = useLocation();
    const NamaRoute = ["/"].includes(location.pathname)
    console.log(location);
    const pindah = useNavigate()
    function halamanpindah() {
        notification.error({
            description: "Kembali Kehalaman Login",
            message: "error"
        })
    }

    const role = localStorage.getItem("role")
    return (
        <div className='max-h-screen flex overflow-hidden flex-grow'>
            {role === null || location.key === "default"?
                halamanpindah() : <SideBarComponents />
            }
            <div className=' mt-4 ml-4  min-h-screen  overflow-y-auto'>
                {children}
            </div>
        </div>
    )
}

export default Layout;
