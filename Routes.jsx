import React from 'react'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Layout from './src/components/Layout'
import "./src/index.css"
import PageLogin from './src/pages/Login/LoginPage'
import DashboardPage from './src/pages/Dashboard'
import FormPages from './src/pages/FormPages'
import Print_FR_KLI_PR from './src/components/Print_FR_KLI_PR'
import Print_FR_SPOT_CHECK from './src/components/Print_FR_SPOT_CHECK'
import Print_FR_PK from './src/components/Print_FR_PK'
function RoutesHalaman() {

    return (
        <div>
            <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/Print_FR_KLI_PR' element={<Print_FR_KLI_PR/>} />
                <Route path='/Print_FR_SPOT_CHECK' element={<Print_FR_SPOT_CHECK/>} />
                <Route path='/Print_FR_PK' element={<Print_FR_PK/>} />
                <Route path='/login' element={<PageLogin/>} />
                <Route path='/form' element={<FormPages/>} />
                <Route path='*' element={<PageLogin/>} />
            </Routes>
        </div>
    )
}

export default RoutesHalaman