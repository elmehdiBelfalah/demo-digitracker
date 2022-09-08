import React from 'react'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div className="text-2xl font-semibold flex-1 h-screen">
         <Header/>
        </div>
        {/* <Footer/> */}
    </div>
   
  )
}

export default Layout