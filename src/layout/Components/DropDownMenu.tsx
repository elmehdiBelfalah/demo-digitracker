
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import {CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle,} from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.png'
type props = {
  value : any;
  child1 : string;
  child2 ?: string;
  child3 ?: string;
  child4 ?: string;
  child5 ?: string;

}
export default function DropDownMenu(props : props) {
  return (
    // <MDBDropdown className='block'>
    //   <img src="" alt="" />
    //   <MDBDropdownToggle>{props.value}</MDBDropdownToggle>
    //   <div className="flex flex-col rounded bg-slate-900">
    //      <MDBDropdownMenu>
    //     <div className="w-full mx-auto p-8 bg-gray-100 border border-purple-900 rounded">
    //     <MDBDropdownItem className='mb-5 px-5'>
    //       <MDBDropdownLink className=' text-gray-900 hover:text-purple-700' href="#">{props.child1}</MDBDropdownLink>
    //     </MDBDropdownItem>
    //     <MDBDropdownItem className='mb-5 px-5'>
    //       <MDBDropdownLink className=' text-gray-900 hover:text-purple-700' href="#">{props.child2}</MDBDropdownLink>
    //     </MDBDropdownItem>
    //     <MDBDropdownItem className='mb-5 px-5'>
    //       <MDBDropdownLink className=' text-gray-900 hover:text-purple-700' href="#">{props.child3}</MDBDropdownLink>
    //     </MDBDropdownItem>
    //     <MDBDropdownItem className='mb-5 px-5'>
    //       <MDBDropdownLink className=' text-gray-900 hover:text-purple-700' href="#">{props.child4}</MDBDropdownLink>
    //     </MDBDropdownItem>
    //     <MDBDropdownItem className='px-5'>
    //       <MDBDropdownLink className=' text-gray-900 hover:text-purple-700' href="#">{props.child5}</MDBDropdownLink>
    //     </MDBDropdownItem>
    //     </div>
    //   </MDBDropdownMenu>
    //   </div>
     
    // </MDBDropdown>
   <CDropdown>
    
  <CDropdownToggle className=' bg-blue-500 border-blue-500 rounded hover:text-white '>{props.value}</CDropdownToggle>
  <CDropdownMenu>
  {/* <img  className=' w-10 items-center justify-center' src={logo}></img> */}
    <CDropdownItem component="button">{props.child1}</CDropdownItem>
    <CDropdownItem component="button">{props.child2}</CDropdownItem>
    <CDropdownItem component="button">{props.child3}</CDropdownItem>
    <CDropdownItem component="button">{props.child4}</CDropdownItem>
    <CDropdownDivider />
    <CDropdownItem component="button">{props.child5}</CDropdownItem>
  </CDropdownMenu>
</CDropdown>
  );
}