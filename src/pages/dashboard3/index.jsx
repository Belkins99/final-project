import React from 'react'
import ProfessionalSidebar from '../../components/sidebar3'
import Head from '../../components/head'
import { Outlet } from 'react-router-dom'

const ProfessionalDashboard = () => {
  const userName = "Mabel"; // This should be dynamically set after login
  const dataToSearch = ["New appointment request", "Session with John", "Client message"];
  return (
    <div>
        <div className='flex'>
        <ProfessionalSidebar/>
        <div className='w-full ml-16 md:ml-56'>
            <Head  userName={userName} dataToSearch={dataToSearch}/>
            <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default ProfessionalDashboard