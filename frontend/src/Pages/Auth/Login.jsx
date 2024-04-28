import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Visibility} from '@mui/icons-material/';
import {VisibilityOff} from '@mui/icons-material/';


export default function Login() {
  const [showPassword, setShowPassword] =useState(false); 
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
      axios.post("http://localhost:5000/login",login).then(res=>{
       console.log(res); 
       if(res.data.message==="success"){
        toast.success(" Login successfully")
        console.log(login,"hii");
        // navigate("/home")
        setTimeout(function () {
          navigate("/home");
        }, 3000); // (3 seconds)
       
       }
       else{
        toast.error("Invalid ")
       }
      })
      
    }
    const register=()=>{
        navigate("/register")
      }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
<ToastContainer />
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
        {/* <Form.Label><b>Password</b></Form.Label>
        <Form.Control type="password" placeholder="Password"name='Password'value={login.Password}onChange={handleLoginform} /> */}
      <Form.Label><b>Password</b></Form.Label>
        <div style={{ position: 'relative' }}>
          <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" name='Password' value={login.Password} onChange={handleLoginform} />
          <span style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </span>
        </div>
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
