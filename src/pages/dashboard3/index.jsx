import React from 'react'
import ProfessionalSidebar from '../../components/sidebar3'
import Head from '../../components/head'
import { Outlet } from 'react-router-dom'

const ProfessionalDashboard = () => {
  return (
    <div>
        <div className='flex'>
        <ProfessionalSidebar/>
        <div className='w-full ml-16 md:ml-56'>
            <Head/>
            <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default ProfessionalDashboard