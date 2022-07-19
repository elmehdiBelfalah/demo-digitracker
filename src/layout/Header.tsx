import React from "react";
import { NavLink } from "react-router-dom";
import { notif_icon, search_icon } from "../images/utils/Svg";
import NavigationLinks from "./Components/NavigationLinks";
import user from '../images/account.png'

function Header() {
  const navlinks = [
    { title: "Dashboard" },
    { title: "Account" },
    { title: "Search" },
    { title: "Settings" },
  ];

  return (
    <div className="border-b border-purple-900  items-center justify-between flex w-full space-x-4 pb-3 pt-3 px-3">
        <div className=" w-[140%] items-center justify-center flex space-x-2">
            {navlinks.map((link)=>(
                    
                    <div className="relative items-center justify-center flex">
                        <NavigationLinks title={link.title} key={link.title} />
                    </div>
                
                ))}   
        </div>
      <div className="pb-5 pt-4 hidden md:flex  items-center justify-center px-3 space-x-6 w-[60%] ">
        <div >{search_icon}</div>
        <div className=" pl-10 pr-10">{notif_icon}</div>
        <img src={user} alt="logo-user" className="w-7 h-7 rounded-full object-center object-cover" />
      </div>
    </div>
  );
}

export default Header;
