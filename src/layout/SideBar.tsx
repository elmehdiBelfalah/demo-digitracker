import {useState} from 'react'
import arrow from '../images/arrow.png'
import logo from '../images/logo.png';
import dashboard from '../images/dashboard.png';
import user from '../images/account.png'
import search from '../images/search.png'
import settings from '../images/settings.png'
import Header from './Header';

function SideBar() {
    const [open,setOpen]=useState(true);
    const Menus = [
        {title : 'Dashboard' , src : {dashboard}},
        {title : 'Account' , src : {user},gap : true},
        {title : 'Search' , src : {search}},
        {title : 'Settings' , src : {settings}},
    ]
  return (
    <div className='flex'>
        <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-purple-900 relative`}>
            <img 
             src={arrow}
             className={`absolute cursor-pointer rounded-full -right-3  top-9 w-7 bg-white border-2 border-gray-900 ${!open && 'rotate-180'}` }
             onClick={()=>setOpen(!open)}
             />
             <div className="flex gap-x-4 items-center">
                <img src={logo} className={` w-8  cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`} >DigiTracker</h1>
             </div>
             <ul className='pt-10'>
                {/* {Menus.map((menu,index)=>(
                     <li key={index}  
                     className={`text-gray-300 text-sm flex items-center gap-x-3 cursor-pointer pt-10 ${index === 0 && 'bg-light-white'}`}>
                     <img className='w-6' src={`./src/images/${menu.src}.png`}/>
                      <span className={`${!open && 'scale-0'}`}>Dashboard</span>
                  </li>
                ))} */}
                    <li  className={`text-gray-300 text-lg font-mono flex items-center gap-x-3 cursor-pointer mt-10 `}>
                       <img className='w-6' src={dashboard}/>
                        <span className={`${!open && 'scale-0'}`}>Dashboard</span>
                    </li>
                    <li  className="text-gray-300 text-lg font-mono flex items-center gap-x-3 cursor-pointer mt-10">
                       <img className='w-6' src={user}/>
                        <span className={`${!open && 'scale-0'}`}>Account</span>
                    </li>
                    <li  className="text-gray-300 text-lg font-mono flex items-center gap-x-3 cursor-pointer mt-10">
                       <img className='w-6' src={search}/>
                        <span className={`${!open && 'scale-0'}`}>Search</span>
                    </li>
                    <li  className="text-gray-300 text-lg font-mono flex items-center gap-x-3 cursor-pointer mt-10">
                       <img className='w-6' src={settings}/>
                        <span className={`${!open && 'scale-0'}`}>Settings</span>
                    </li>
             </ul>
        </div>
        <div className="text-2xl font-semibold flex-1 h-screen">
            <Header/>
        </div>
    </div>
  )
}

export default SideBar