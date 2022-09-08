import React from "react";
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchOutlined } from "@mui/icons-material";


type props ={
    value : any;
}

const DropDownSearch = (props:props) => {
  return (
    <div>
      <CDropdown autoClose='outside'>
        <CDropdownToggle className=" bg-blue-500 border-blue-500 rounded hover:text-white ">
          {props.value}
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>
            <SearchOutlined/>
            <input className=" border-x-0" type="text" placeholder="Search..." />
            </CDropdownItem>
          <CDropdownItem component="button">Something</CDropdownItem>
          <CDropdownItem component="button">Something</CDropdownItem>
          <CDropdownItem component="button">Something</CDropdownItem>
          <CDropdownItem component="button">Something</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

export default DropDownSearch;
