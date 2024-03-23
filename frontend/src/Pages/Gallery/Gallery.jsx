import React from 'react'
import './gallery.css'
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Gallery() {
  return (
    <>
    <Sidebar>
      <Header/>
<div>
  <center>
  <Carousel className='carousel' >
      <Carousel.Item>
        <img
          className="img1"
          src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/5-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Digital Lab</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2"
          src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/8.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Electronics Circuit Lab</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img3"
          src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/9.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Electronics Workshop</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img4"
          src="https://grwpcpnr.ac.in/wp-content/uploads/2022/03/12.jpg"
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h1>Spice Lab</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </center>
</div>
    <div className='mt-5'>
      <Footer/>
    </div>
     
    </Sidebar>
    </>
  )
}
