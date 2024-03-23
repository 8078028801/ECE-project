import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Firstyear from './Firstyear';
import Secondyear from './Secondyear';
import Thirdyear from './Thirdyear';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function Semester() {
    const [selectedSemester, setSelectedSemester] = useState('First Year');

    const handleSemesterChange = (semester) => {
      setSelectedSemester(semester);
      };
  return (
    <>
    <Sidebar>
<Header/>
<div className='mt-3'>
<DropdownButton id="dropdown-basic-button" title="Semester">
        <Dropdown.Item onClick={() => handleSemesterChange('First Year')}>First Year</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSemesterChange('Second Year')}>Second Year</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSemesterChange('Third Year')}>Third Year</Dropdown.Item>
      </DropdownButton>

      {/* Render components based on selected semester */}
      {selectedSemester === 'First Year' && <Firstyear/>}
      {selectedSemester === 'Second Year' && <Secondyear/>}
      {selectedSemester === 'Third Year' && <Thirdyear />}
     
</div>
<div className='mt-5'>
<Footer/>
</div>

    </Sidebar>
    </>
  )
}
