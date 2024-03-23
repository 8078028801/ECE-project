import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  const handleec=()=>{
    navigate("/login")
  }
  return (
    <>
      
        
        <div className='centered-content'>
         <button className="btnstyle" onClick={handleec}>EC</button>
         <h1>Electronics Communication</h1>

          </div>

        
    </>
  )
}
