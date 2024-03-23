import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
export default function Thirdyear() {
     
  return (
    <>
    <Sidebar>
      <div className='row'>

     <div className='col-sm-6'>

    
    <h4>
            FIFTH SEMESTER
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
        <td>5001</td>
        <td>Industrial Management and Safety</td>
    </tr>
    <tr>
        <td>5043D</td>
        <td>Digital Communication</td>
    </tr>
    <tr>
        <td>5201</td>
        <td>Signals and Systems</td>
    </tr>
    <tr>
        <td>5042</td>
        <td>Industrial Automation</td>
    </tr>
    <tr>
        <td>5043A</td>
        <td>Optical Communication and Networking</td>
    </tr>
    <tr>
        <td>5043B</td>
        <td>Microwave Devices and Radar</td>
    </tr>
    <tr>
        <td>5202</td>
        <td>Mobile and Wireless Communication</td>
    </tr>
    <tr>
        <td>5049B</td>
        <td>Digital Communication Lab</td>
    </tr>
    <tr>
        <td>5209</td>
        <td>Verilog HDL & PLD Lab</td>
    </tr>
    <tr>
        <td>5048</td>
        <td>Industrial Automation Lab</td>
    </tr>
    <tr>
        <td>5049A</td>
        <td>Microwave Engineering Lab</td>
    </tr>
    <tr>
        <td>5008</td>
        <td>Seminar</td>
    </tr>
    <tr>
        <td>6009</td>
        <td>Major Project</td>
    </tr>
    </tbody>
</Table>
</div>
<div className='col-sm-6'>


<h4>
            SIXTH SEMESTER
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
        <td>6001</td>
        <td>Entrepreneurship and Startup</td>
    </tr>
    <tr>
        <td>6041A</td>
        <td>Medical Electronics</td>
    </tr>
    <tr>
        <td>6201A</td>
        <td>Antenna and Wave Propagation</td>
    </tr>
    <tr>
        <td>6201B</td>
        <td>Embedded Systems</td>
    </tr>
    <tr>
        <td>6042A</td>
        <td>Concepts of IoT</td>
    </tr>
    <tr>
        <td>6042B</td>
        <td>Contemporary Electronics</td>
    </tr>
    <tr>
        <td>6042C</td>
        <td>Introduction to Hybrid and Electric Vehicles</td>
    </tr>
    <tr>
        <td>6042D</td>
        <td>Introduction to Multimedia</td>
    </tr>
    <tr>
        <td>6002</td>
        <td>Indian Constitution</td>
    </tr>
    <tr>
        <td>6047</td>
        <td>Simulation Lab with Numerical Software</td>
    </tr>
    <tr>
        <td>6048</td>
        <td>Computer Hardware and Data Communication Lab</td>
    </tr>
    <tr>
        <td>6049A</td>
        <td>Medical Electronics Lab</td>
    </tr>
    <tr>
        <td>6209A</td>
        <td>Embedded System Lab</td>
    </tr>
    <tr>
        <td>6009</td>
        <td>Major Project</td>
    </tr>
    </tbody>
</Table>
</div>
</div>

    </Sidebar>
    </>
    
  )
}
