import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
export default function Secondyear() {
    const type = "second"
  return (
    <>
    <Sidebar >
      <div className='row'>

    <div className='col-sm-6'>
     
    <h4>
            THIRD SEMESTER
        </h4>
        <Table className='clubs' striped bordered hover size="sm">
        
        <thead>
          <tr>
            <th>CODE</th>
            <th>SUBJECT</th>
          </tr>
          </thead>
          <tbody>   
    <tr>
        <td>3041</td>
        <td>Electric Circuits and Networks</td>
    </tr>
    <tr>
        <td>3042</td>
        <td>Principles of Electronics Communication</td>
    </tr>
    <tr>
        <td>3043</td>
        <td>Electronic Circuits</td>
    </tr>
    <tr>
        <td>3044</td>
        <td>Digital Electronics</td>
    </tr>
    <tr>
        <td>3045</td>
        <td>Fundamentals of C Programming</td>
    </tr>
    <tr>
        <td>3046</td>
        <td>Principles of Electronic Communication Lab</td>
    </tr>
    <tr>
        <td>3047</td>
        <td>Electronics Circuits Lab</td>
    </tr>
    <tr>
        <td>3048</td>
        <td>Digital Electronics Lab</td>
    </tr>
    <tr>
        <td>3049</td>
        <td>Fundamentals of C Programming Lab</td>
    </tr>
    </tbody>   
</Table>
</div> 
<div className='col-sm-6'>


<h4>
            FOURTH SEMESTER
        </h4>
        <Table className='clubs' striped bordered hover size="sm">
        
        <thead>
       
          <tr>
            <th>CODE</th>
            <th>SUBJECT</th>
          </tr>
          </thead>
          <tbody>
    
    <tr>
        <td>4001</td>
        <td>Community Skills In Knowledge System</td>
    </tr>
    <tr>
        <td>4009</td>
        <td>Minor Project</td>
    </tr>
    <tr>
        <td>4041</td>
        <td>Microcontroller And Applications</td>
    </tr>
    <tr>
        <td>4042</td>
        <td>Electronic Measurements Instrumentation</td>
    </tr>
    <tr>
        <td>4043</td>
        <td>Linear Integrated Circuits</td>
    </tr>
    <tr>
        <td>4046</td>
        <td>Microcontroller And Applications Lab</td>
    </tr>
    <tr>
        <td>4047</td>
        <td>Linear Integrated Circuits Lab</td>
    </tr>
    <tr>
        <td>4048</td>
        <td>PCB And Prototyping Workshop</td>
    </tr>
    <tr>
        <td>4049</td>
        <td>Python Programming Lab</td>
    </tr>
    </tbody>
</Table>
</div>
</div>
    </Sidebar>
   
    </>
    
  )
}
