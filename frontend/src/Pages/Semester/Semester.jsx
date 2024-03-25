import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Firstyear from './Firstyear';
import Secondyear from './Secondyear';
import Thirdyear from './Thirdyear';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import html2pdf from "html2pdf.js";
import { Button, Col } from 'react-bootstrap';
export default function Semester() {
    const [selectedSemester, setSelectedSemester] = useState('First Year');

    const handleSemesterChange = (semester) => {
      setSelectedSemester(semester);
      };
      const handleDownload = () => {
        const element = document.getElementById("page-to-download");
        html2pdf(element);
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
      <div id="page-to-download">
      {selectedSemester === 'First Year' && <Firstyear/>}
      {selectedSemester === 'Second Year' && <Secondyear/>}
      {selectedSemester === 'Third Year' && <Thirdyear />}
      </div>
      <Col lg={2}  md={3} sm={6} xs={12}>
      <Button
                  variant="white"
                  className="custom-button"
                  onClick={handleDownload}
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    // borderRadius: "25px",
                    // width: "145px",
                    width: "100%",
                  }}
                >
                  Download
                </Button>
                </Col>
</div>
<div className='mt-5'>
<Footer/>
</div>

    </Sidebar>
    </>
  )
}
