import React from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Layout from './src/components/Layout'
import "./src/index.css"
import PageLogin from './src/pages/Login/LoginPage'
import DashboardPage from './src/pages/Dashboard'
import FormPages from './src/pages/FormPages'
import Print_FR_KLI_PR from './src/components/Print_FR_KLI_PR'
function RoutesHalaman() {

    return (
        <div>
            <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/Print_FR_KLI_PR' element={<Print_FR_KLI_PR/>} />
                <Route path='/login' element={<PageLogin/>} />
                <Route path='/form' element={<FormPages/>} />
                <Route path='*' element={<PageLogin/>} />
            </Routes>
        </div>
    )
}

export default RoutesHalaman