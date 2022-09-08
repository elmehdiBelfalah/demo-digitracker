import { useState,ReactNode } from "react";
import { Link } from "react-router-dom";
import { notif_icon, search_icon } from "../images/utils/Svg";
import NavigationLinks from "./Components/NavigationLinks";
import { Message, Notifications, Person, SearchOutlined } from "@mui/icons-material";
import DropDownMenu from "./Components/DropDownMenu";
import DropDownSearch from "./Components/DropDownSearch";
import DropDownList from "./Components/DropDownList";

type prop = {
children? : ReactNode ;
}

function Header( props : prop) {
  const navlinks = [
    { title: "Dashboard" ,key : "Dashboard"},
    { title: "Account" ,key : "Account" },
    { title: "Search" ,key : "Search"},
    { title: "Settings" ,key : "Settings"},
   
  ];
  const [open,setOpen]=useState('Dashboard');
  const [menuDown,setMenuDown]=useState(false)

  console.log(menuDown)

  return (
    
    <div className=" bg-slate-50 border-b border-blue-500  items-center justify-between flex w-full space-x-4 pb-[0.5px] pt-[1px] px-2">
        <div className=" w-[140%] items-center justify-center flex space-x-2">
            {navlinks.map((link)=>(
                    
                    <div onClick={()=>setOpen(link.title)}
                      className={`${open === link.title}relative items-center justify-center flex`}>
                        <div className={`${link.title===open ? 'text-white  bg-blue-500 rounded':'text-blue-500 bg-slate-50'} `}>
                        <NavigationLinks title={link.title} key={link.key} />
                        </div>
                    </div>
                
                ))}   
        </div>
        <ul className="pb-4 pt-4 hidden md:flex  items-center justify-center px-1 space-x-6 w-[60%]">
          <li>
            <DropDownSearch
            value={ <SearchOutlined className='text-withe '/>}
             />
          </li>
          <li >
          <DropDownMenu
           value={<Notifications className=" text-white"/>} 
           child1='Profile' 
           child2="My projects"
           child3="My statements"
           child4="Account settings"
           child5="Logout"/>
            </li>
          <li >
          <DropDownMenu
           value={<Message className=" text-white"/>} 
           child1='Profile' 
           child2="My projects"
           child3="My statements"
           child4="Account settings"
           child5="Logout"/>
            </li>
          <li><DropDownMenu
           value={<Person className='  text-white' />} 
           child1='Profile' 
           child2="My projects"
           child3="My statements"
           child4="Account settings"
           child5="Logout"/>
           </li>
        </ul>
      {/* <div className="pb-5 pt-4 hidden md:flex  items-center justify-center px-3 space-x-6 w-[60%] ">
        <div ><SearchOutlined className='text-purple-900'/></div>
        <div className=" px-5 text-purple-900"><Notifications/></div>
        <div className=" px-5 text-purple-900"><Message/></div>
        <div><Person className='text-purple-900' ></Person></div>
      </div> */}
    </div>
  );
}

export default Header;
