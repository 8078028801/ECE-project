import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../Header/Header'
import About from '../About/About'
import Card1 from '../../Components/Sidebar/Card1/Card1'
import Footer from '../Footer/Footer'

export default function Home1() {
  return (
    <Sidebar>
        <Header/>
        <div className='mt-2'>
        <center>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/12.jpg"style={{height:"80vh"}} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/8.jpg"style={{height:"80vh"}} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/9.jpg"style={{height:"80vh"}} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </center>
        </div>
       
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
  )
}
