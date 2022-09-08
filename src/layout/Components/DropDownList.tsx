import React, { useState } from 'react'

type props ={
    value : any;
}

const DropDownList = (props: props) => {
    const [isopen,setIsopen]=useState(false)
  return (
    <div className=''>
        <div 
        onClick={()=>setIsopen(!isopen)} >
            {props.value}
        </div>
       {isopen && (<div className=''>
       <div className=' transition-all cursor-pointer hover:bg-slate-100'>
        Something
        </div>
        <div className='transition-all cursor-pointer hover:bg-slate-100'>
         Something
        </div>
       </div>)}
    </div>
  )
}

export default DropDownList