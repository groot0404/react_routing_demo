import React from 'react'
import Navbar from './Navbar'
import Footer  from './Footer'
import {Outlet} from 'react-router-dom'


function RootLayout() {

  return (
    <div>
      <Navbar/>
      {/* palceholder to load components dynamically*/}
      <div style={{minHeight:"70vh"}} className='p-5'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default RootLayout