import React from 'react'
import { CFooter} from '@coreui/react'
import { CLink } from '@coreui/react'
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <CFooter>
  <div>
    <CLink href="https://coreui.io">CoreUI</CLink>
    <span>&copy; 2021 creativeLabs.</span>
  </div>
  <div>
    <span>Powered by</span>
    <CLink href="https://coreui.io">CoreUI</CLink>
  </div>
</CFooter>
  )
}

export default Footer