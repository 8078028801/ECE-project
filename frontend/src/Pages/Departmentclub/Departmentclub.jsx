import React from 'react'
import Table from 'react-bootstrap/Table';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Departmentclub() {
  return (
    <>
    <Sidebar>
<Header/>
   
    <div className='container'>

  
      <h3>
            DEPARTMENT CLUB
        </h3>
    <Table className='clubs' striped bordered hover size="sm">
        
      <thead>
        <tr>
          <th>slno</th>
          <th>Clubs</th>
          <th> Staff</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>PROGRAMME COORDINATION COMMITTEE (PCC) MEMBERS</td>
          <td>...</td>
        </tr>
        <tr>
          <td>2</td>
          <td>INTERNAL QUALITY ASSURANCE CELL (IQAC) MEMBERS</td>
          <td>...</td>
        </tr>
        <tr>
          <td>3</td>
          <td> TUTORS</td>
          <td>...</td>
        </tr>
        <tr>
          <td>4</td>
          <td>DEPARTMENT ADMISSION COMMITTEE COORDINATOR</td>
          <td>...</td>
        </tr>
        <tr>
          <td>5</td>
          <td>DEPARTMENT STAFF SECRETARY </td>
          <td>...</td>
        </tr>
        <tr>
          <td>6</td>
          <td>IEDC AND STARTUPS COORDINATORS</td>
          <td>...</td>
        </tr>
        <tr>
          <td>7</td>
          <td>DEPT. NOTICE BOARDS IN-CHARGE </td>
          <td>...</td>
        </tr>
        <tr>
          <td>8</td>
          <td>DEPT. LIBRARY IN-CHARGE</td>
          <td>...</td>
        </tr>
        <tr>
          <td>9</td>
          <td>ARTS CLUB-CT COORDINATORS </td>
          <td>...</td>
        </tr>
        <tr>
          <td>10</td>
          <td>WEBSITE COORDINATOR</td>
          <td>...</td>
        </tr>
        <tr>
          <td>11</td>
          <td>NBA COORDINATORS </td>
          <td>...</td>
        </tr>
        <tr>
          <td>12</td>
          <td>ECSA COORDINATOR</td>
          <td>...</td>
        </tr>
        <tr>
          <td>13</td>
          <td>ROBOTICS CLUB COORDINATOR </td>
          <td>...</td>
        </tr>

      </tbody>
    </Table>
    <div className='mt-3'>
    <Footer/>
    </div>
   
    </div>
   
    </Sidebar>
    
    </>
  )
}
