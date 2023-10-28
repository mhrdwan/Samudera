import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesHalaman from '../Routes.jsx'
import Layout from './components/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <Layout>
        <RoutesHalaman />
      </Layout>
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
