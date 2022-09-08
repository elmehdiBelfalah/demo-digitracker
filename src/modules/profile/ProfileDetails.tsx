import React, { useState } from "react";
import profile from "../../images/profile.png";
import Layout from "../../layout/Layout";
const ProfileDetails = () => {
    const [isActive,setIsActive]=useState(false)
    const profileLinks=[
        {title : 'Overview'},
        {title : 'Projects'},
        {title : 'Campaigns'},
        {title : 'Documents'},
        {title : 'Connections'},
]
  return (
    <div className="flex items-center justify-center">
        <Layout/>
        <div className="flex items-center justify-center">
      <div className="bg-slate-50 w-1/2 mt-10 rounded-lg">
        <div className="flex items-center justify-center pt-10">
          <img
            src={profile}
            alt="profile photo"
            className=" rounded-full w-32 m-4"
          />
          <div className=" flex items-start justify-start flex-col">
            <h1 className="text-s font-bold text-gray-600 block">Elmehdi Belfallah</h1>
            <div className="flex items-start justify-start flex-row">
            <h1 className="text-sm font-bold text-gray-400 ">Web Developer</h1>
            <h1 className="text-sm font-bold text-gray-400 px-2 ">elmehdibelfalah@gmail.com</h1>
            </div>

          </div>
        </div>
        <div className=" mb-3 items-center justify-center flex space-x-2">
            {profileLinks.map((link:any)=>(
                    
                    <div onClick={()=>setIsActive(link.title)}
                      className={`${isActive === link.title}relative items-center justify-center flex`}>
                        <div className={`${link.title===isActive ? 'border-b text-blue-500 ':'  text-gray-400 '} `}>
                        <span>{link.title}</span>
                        </div>
                    </div>
                
                ))}   
        </div>
      </div>
    </div>

    </div>
  );
};

export default ProfileDetails;
