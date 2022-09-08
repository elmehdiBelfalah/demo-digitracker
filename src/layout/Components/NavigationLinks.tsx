import React from 'react'
import { ArrayKey } from 'react-hook-form/dist/types/path/common'


type propp={
    title :string,
    key : string,
    className?:string
}


function NavigationLinks (props:propp) {
  return (
    <div 
    className=' text-lg md:px-8 md:pt-3 md:pb-3 items-center justify-center flex cursor-pointer
     hover:bg-blue-500 hover:text-white rounded  '
    ><span>{props.title}</span>
    </div>
  )
}

export default NavigationLinks