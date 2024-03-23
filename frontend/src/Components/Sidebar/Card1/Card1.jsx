import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './Card1.css'
export default function Card1() {
  return (
    <>
    <Row>
   <Col lg={6}>
   <a class="card1 "style={{height:"90%"}} >
    <h3 className='h3'>Vission</h3>
    <p class="small p"> To mould skilled women professionals in the field of Electronics and Communication Engineering with creativity , integrity and social commitment.
      </p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
   </Col> 
   <Col lg={6}>
   <a class="card1" >
    <h3 className='h3'>Mission</h3>
    <p class="small p"> <p>
        1. Inspire the students to learn and execute challenging tasks by utilizing state of the art technology .
       </p>
       <p>
        2. Enable the diverse talent and skills of each student to bloom and make them aware of the infinite world of possibilities.
        </p>
         <p>
        3. Educate the future generation so as to inculcate problem solving skills values and ethics.
       </p>
       <p>
        4. Instigate leadership qualities and social commitment.
        </p></p>
    <div class="go-corner" href="#">
      <div class="go-arrow">
        →
      </div>
    </div>
  </a>
   </Col>
</Row>
    
    </>
  )
}
