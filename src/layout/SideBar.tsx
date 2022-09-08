import {useState} from 'react'
import logo from '../images/logo.png';
import dashboard from '../images/dashboard.png';
import user from '../images/account.png'
import search from '../images/search.png'
import settings from '../images/settings.png'
import Header from './Header';
import {ArrowCircleLeft} from '@mui/icons-material';

function SideBar() {
    const [open,setOpen]=useState(true); 
    const Menus = [
        {title : 'Dashboard' , src : {dashboard}},
        {title : 'Account' , src : {user},gap : true},
        {title : 'Search' , src : {search}},
        {title : 'Settings' , src : {settings}},
    ]
  return (
    
        <div className={`${open ? "w-60" : " w-28"} duration-300 h-screen  p-3  pt-8 bg-blue-500 relative`}>
            <ArrowCircleLeft
             className={` text-blue-500 absolute cursor-pointer rounded-full -right-2 top-9 w-7 bg-white border-2 border-gray-900
               ${!open && 'rotate-180'}` }
             onClick={()=>setOpen(!open)}
             />
             <div className="flex gap-x-4 items-center ml-6 mt-3 mb-3">
                <img src={logo} className={` w-8 cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} />
                <h1 className={`text-white origin-left  font-medium text-xl duration-300 ${!open && 'scale-0'}`} >DigiTracker</h1>
             </div>
             <ul className='pt-10 pl-7'>
                {/* {Menus.map((menu,index)=>(
                     <li key={index}  
                     className={`text-gray-300 text-sm flex items-center gap-x-3 cursor-pointer pt-10 ${index === 0 && 'bg-light-white'}`}>
                     <img className='w-6' src={`../src/images/${menu.src}.png`}/>
                      <span className={`${!open && 'scale-0'}`}>{menu.title}</span>
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
    
  )
}

export default SideBar