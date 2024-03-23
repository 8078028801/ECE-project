import React from 'react'
import './Header.css'
import { Image } from 'react-bootstrap'
export default function Header() {
  return (
    <>
     <div class="header">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
      <Image
                            src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/grwpc.png"
                            alt="college logo"
                            rounded
                            width={70}
                            height={70}
                            />    GOVT:RESIDENTIAL WOMEN'S POLYTECHNIC COLLEGE
      </div>
      <div class="department">
        <div>ELECTRONICS AND COMMUNICATION</div>
      </div>
    </div>
  </div>
    
    </>
  )
}
