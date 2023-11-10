// Layout.jsx
import React, { useEffect } from 'react'
import SideBarComponents from './SideBar'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import PageLogin from '../pages/Login/LoginPage';

function Layout({ children }) {
    const location = useLocation();
    const NamaRoute = ["/Print_FR_KLI_PR"].includes(location.pathname)
    console.log(location);
    const pindah = useNavigate()
    function halamanpindah() {
        if (!NamaRoute) {
            notification.error({
                description: "Kembali Kehalaman Login",
                message: "error"
            })
        }

    }

    function loginpage() {
        if (location.pathname === "/login") {
            return <div className='w-screen h-screen'><PageLogin /></div>
        }

    }

    const role = localStorage.getItem("role")
    return (
        <div className='max-h-screen flex overflow-hidden flex-grow  '>
            {role === null || NamaRoute || location.key === "default" ?
                halamanpindah() : <SideBarComponents />
            }
            {role === null ?
                <div className='w-screen h-screen'><PageLogin /></div> :
                <div className={` mt-3 ml-3 mb-3 w-full  overflow-y-auto`}>
                    {children}
                </div>
            }

        </div>
    )
}

export default Layout;
