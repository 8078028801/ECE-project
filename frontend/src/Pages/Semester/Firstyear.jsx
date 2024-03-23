import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Table from 'react-bootstrap/Table';
export default function Firstyear() {
    const type="first"
  return (
    <>
     <Sidebar type = {type}>
     <div className='row'>
     <div className='col-sm-6'>
      <h4>
            FIRST SEMESTER
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
          <td>1001</td>
          <td>Communication skills in Englis</td>
        </tr>
        <tr>
          <td>1002</td>
          <td>Mathematics 1</td>
          
        </tr>
        <tr>
          <td>1003</td>
          <td>Applied Physics 1</td>
          
        </tr>
        <tr>
          <td>1004</td>
          <td>Applied Chemistry</td>
        </tr>
        <tr>
          <td>1005</td>
          <td>Engeneering Graphics </td>
          
        </tr>
        <tr>
          <td>1007</td>
          <td>Applied Chemistry Lab</td>
          
        </tr>
        <tr>
          <td>1008</td>
          <td>Introduction to IT Systems Lab </td>
          
        </tr>
        <tr>
          <td>1009</td>
          <td>Sports and Yoga</td>
          
        </tr>
       

      </tbody>
    </Table>
    </div>
    <div className='col-sm-6'>

    
    <h4>
            SECOND SEMESTER
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
          <td>2001</td>
          <td>Enviornmental Science</td>
        </tr>
        <tr>
          <td>2041</td>
          <td>Basic Electronics</td>
          
        </tr>
        <tr>
          <td>2039</td>
          <td>Fundamentals of Electrical and Elecatronics Engineering Lab</td>
          
        </tr>
        <tr>
          <td>2031</td>
          <td>Fundamentals of Electrical and Electronics Engineering</td>
        </tr>
        <tr>
          <td>2009B</td>
          <td>Communication Skills in English Lab</td>
           </tr>
           <tr>
          <td>2009B</td>
          <td>Communication Skills in English Lab</td>
           </tr>
        <tr>
          <td>2008</td>
          <td>Communication Skills in English Lab</td>
          
        </tr>
        <tr>
          <td>2008  </td>
          <td>Introduction to IT Systems Lab </td>
          
        </tr>
        <tr>
          <td>2006B </td>
          <td>Applied Physics Lab</td>
          
        </tr>
        <tr>
          <td></td>
          <td>Applied Physics 2</td>
          
        </tr>
      
        <tr>
          <td>2002</td>
          <td>Mathematics 2</td>
          
        </tr>
        <tr>
          <td>2049</td>
          <td>Electronics Tinkering Workshop</td>
          
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
    </Sidebar>
    </>
   
  )
}
