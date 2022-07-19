import React from 'react'
import { ArrayKey } from 'react-hook-form/dist/types/path/common'


type propp={
    title :string,
    key : string
}


function NavigationLinks (props:propp) {
  return (
    <div 
    className='text-md text-purple-900 md:px-5 md:pt-3 md:pb-3 items-center justify-center flex cursor-pointer
     hover:bg-purple-900 hover:text-white rounded  '
    ><span>{props.title}</span>
    </div>
  )
}

export default NavigationLinks