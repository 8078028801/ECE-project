import { Container } from '@mui/material';
import React from 'react'
import './About.css'

import Sidebar from '../../Components/Sidebar/Sidebar';
import Card1 from '../../Components/Sidebar/Card1/Card1';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
export default function About() {
  return (
    <>
    
    <Sidebar sidebar-container>
<Header/>
    <div style={{padding:"3%"}}>
    <h1 className="aboutus">About Us</h1>
    <p className="abc" >
        The department of Electronics Communication Engineering provides in depth knowledge to the students about basic principles of Electronics, Communication systems, Electronic circuits,Digital Electronics , Microcontroller Electronics Workshop etc.developed in response to the needs of industry . This course gives advanced level knowledge and skills in the design of Electronics circuits and communication systems.Theory combined with Practical and project work about advanced technology helps students to work at forefront in any of the major areas of Electronics Engineering or to pursue Higher studies with confidence .The Department has a Library ,Student Activity cell and Robotic Club to develop multidimensional personality of students. A blend of committed , highly qualified and experienced academic faculty contribute to achieve academic excellence by providing the best possible education and training to the students.
    </p>
<div className='mt-5'>
<Card1/>
</div>

   </div>
   <div className='mt-5'>
   <Footer/>
   </div>
  

    </Sidebar>
    
   
    
    
    </>
  )
}
