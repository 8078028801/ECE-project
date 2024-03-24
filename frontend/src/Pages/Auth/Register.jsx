import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [login, setLogin] = useState({
        Name: '',
        Registernumber: '',
        Mobilenumber:'',
        Email:'',
        Password:'',
        
      });
      const handleLoginform = (e) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
          ...prevLogin,
          [name]: value,
        }));
        console.log(login);
      };
      const navigate=useNavigate()
     
    const confirmlogin=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:5000/sinup",login).then(res=>{
       console.log(res); 
       if(res.data.message==="User created successfully"){
        console.log(login,"hii");
        navigate("/login")
       }
      })
      
    }
   
  return (
    <>
    <Row>
        <Col>
        <center>
        <Form className="reg mt-5">
            <h1>Register</h1>
            <Form.Group className="mail"style={{ textAlign: "left" }} controlId="formBasicEmail">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name='Name' value={login.Name}onChange={handleLoginform}/>
            
          </Form.Group>
          <Form.Group className="log-1"style={{ textAlign: "left" }} controlId="formlogin">
        <Form.Label><b>Register number</b></Form.Label>
        <Form.Control type="Register number" placeholder="Enter Register number"name='Registernumber' value={login.Registernumber}onChange={handleLoginform} />
      </Form.Group>

          
          <Form.Group className="mail"style={{ textAlign: "left" }} controlId="formBasicEmail">
            <Form.Label><b>Mobile no</b></Form.Label>
            <Form.Control type="number" placeholder="Enter mobile number"name='Mobilenumber' value={login.Mobilenumber}onChange={handleLoginform}  />
            
          </Form.Group>
          <Form.Group className="mail"style={{ textAlign: "left" }} controlId="formBasicEmail">
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='Email' value={login.Email}onChange={handleLoginform} />
            
          </Form.Group>

      <Form.Group className="pass-1"style={{ textAlign: "left" }} controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password" name='Password' value={login.Password}onChange={handleLoginform} />
      </Form.Group>
    
         
          <Form.Group className="ck" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit"onClick={confirmlogin}>
            Submit
          </Button>
        </Form>
        </center>
        </Col>
    </Row>
     
    
    </>
  )
}
