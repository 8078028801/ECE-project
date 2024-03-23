import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Edit,Delete,Close} from '@mui/icons-material/';
import axios from 'axios'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import Header from '../Header/Header';
import './Students.css'
export default function Students() {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [state,setState]=useState({
 Mobilenumber:"", 
Name:"",
Registernumber: "",

 })
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedOption, setSelectedOption] = useState(''); // const handleDropdownChange = (option) => setSelectedOption(option);
  const handleDropdownChange = (option) => {
    console.log(option);
    setSelectedOption(option);
    setState((prevState) => ({
      ...prevState,Year: option 
    }));
  };

  const [year,setYear]=useState()
  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  useEffect(() => {
    fetch('http://localhost:5000/getallstudents')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
       
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
      
  }, []);
  useEffect(()=>{
    const firstYearStudents = students?.filter(student => student.Year === 'Firstyear');
    setYear(firstYearStudents);
  },[students])
  console.log(students);
  const handleSemesterChange = (semester) => {
    const filteredStudents = students.filter(student => student.Year === semester);
        console.log(filteredStudents);
    setYear(filteredStudents);

    };
    console.log(year);

    const deletestudent = async (id) => {
      try {
          const response = await axios.delete(`http://localhost:5000/deletestudent/${id}`);
          console.log(response.data);
          const value = year.filter(data => data._id !== id);
          setYear(value)
      } catch (error) {
          console.error('Error deleting student:', error);
      }
      console.log(id);
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(state);
  
    try {
      const response = await axios.post("http://localhost:5000/addstudent", state);
      console.log(response.data);
      
      setState("")
      setSelectedOption("")
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <>
   <Sidebar>
<Header/>
<div className='mt-5'>
<DropdownButton id="dropdown-basic-button" title="STUDENTS">
        <Dropdown.Item onClick={() => handleSemesterChange('Firstyear')}>First Year</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSemesterChange('Secondyear')}>Second Year</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSemesterChange('Thirdyear')}>Third Year</Dropdown.Item>
      </DropdownButton>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant="success" onClick={handleOpen}>ADD</Button>{' '}
    </div>
<div className='mt-2'>


      {year?.length > 0 && (
          <h4 style={{ textTransform: 'uppercase' }}>{year[0].Year}</h4>
        )}

      <Table className='clubs mt-1' striped bordered hover size="sm" >
        
        <thead>
          <tr>
            <th>Sl no</th>
            <th>REGISTER NUMBER</th>
            <th>NAME</th>
            <th>MOBILE NUMBER</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {year?.map((data,index)=>(
 <tr>
  <td>{index+1}</td>
 <td>{data?.Registernumber}</td>
 <td>{data?.Name}</td>
 <td>{data?.Mobilenumber}</td>
 <td><Edit/></td>
 <td><Delete onClick={()=>{deletestudent(data._id)}}/></td>
 
   </tr>
          ))}
         
          </tbody>
          </Table>
          </div>
</div>
  


<div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         
        <Box sx={style}>
        <Button onClick={handleClose} variant='white' style={{position:"absolute",top:"0",right:"0"}}>
          <Close />
        </Button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        <h3> Add Students </h3>  
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Form onSubmit={handleSubmit}>
      <FormGroup className='mt-2'>
        <Form.Label><b>NAME</b></Form.Label>
        <FormControl type="text" name='Name'value={state.Name}onChange={handlechange}/>
      </FormGroup>

      <FormGroup className='mt-2'>
        <Form.Label><b>REGISTER NUMBER</b></Form.Label>
        <FormControl type="text" name='Registernumber'value={state.Registernumber}onChange={handlechange} />
      </FormGroup>

      <FormGroup className='mt-2'>
        <Form.Label><b>MOBILE NUMBER</b></Form.Label>
        <FormControl type="number"name='Mobilenumber'value={state.Mobilenumber}onChange={handlechange}/>
      </FormGroup>

      <FormGroup className='mt-2'>
        <Form.Label><b>Year</b></Form.Label>
        <DropdownButton
          title={selectedOption || 'Select Option'}
          variant="light"
        >
          <Dropdown.Item onClick={() => handleDropdownChange('Firstyear')}>First year</Dropdown.Item>
          <Dropdown.Item onClick={() => handleDropdownChange('Secondyear')}>Second year</Dropdown.Item>
          <Dropdown.Item onClick={() => handleDropdownChange('Thirdyear')}>Third year</Dropdown.Item>
        </DropdownButton>
      </FormGroup>

      <Button variant="primary" type="submit"className='mt-4'>
        Submit
      </Button>
    </Form>
          </Typography>
        </Box>
      </Modal>
    </div>
   </Sidebar>
    
    </>
  )
}
