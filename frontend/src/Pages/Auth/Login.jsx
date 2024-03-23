import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [login, setLogin] = useState({
        Email: '',
        Password: ''
       
      });
      const navigate=useNavigate()
      
      const handleLoginform = (e) => {
        const { name, value } = e.target;
        setLogin((prevLogin) => ({
          ...prevLogin,
          [name]: value,
        }));
        console.log(login);
      };
    const confirmlogin=(e)=>{
      e.preventDefault()
      axios.post("http://localhost:3000/login",login).then(res=>{
       console.log(res); 
       if(res.data.message==="success"){
        console.log(login,"hii");
        navigate("/about")
       }
      })
      
    }
    const register=()=>{
        navigate("/register")
      }
  return (
    <>
    <Row>
<Col>
<center>
<Form className="whole mt-5">
        <h1>Log In</h1>

      <Form.Group className="login"style={{ textAlign: "left" }} controlId="formlogin">
        <Form.Label><b>Email</b></Form.Label>
        <Form.Control type="email" placeholder="Enter Email id" name='Email' value={login.Email}onChange={handleLoginform}/>
      </Form.Group>

      <Form.Group className="login"style={{ textAlign: "left" }} controlId="formBasicPassword">
        <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password"name='Password'value={login.Password}onChange={handleLoginform} />
      </Form.Group>

     
      <div style={{ display: "flex", justifyContent: "center" }}className='button-container'>
  <Button variant="primary" type="Login" onClick={confirmlogin} style={{ width: "150px" }}>
    Login
  </Button>
  <Button variant="primary" type="button" style={{ width: "150px" }}onClick={register}>
    Register
  </Button>
</div>
     
    </Form>
     </center>

</Col>
    </Row>
   
    
    
    </>
  )
}
