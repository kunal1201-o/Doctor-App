import React from 'react'
import {useHistory} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  let history= useHistory();
  return (
    <div className="Logo">
      <img src="Images/pic24.jpg" alt="logo" onClick={()=> {history.push("/Front");}} />
      <div className="logo-name">
      <p>INDIA'S NO.1 HEALTHCARE APP</p>
      <h1>Dr. Abhijeet Kr</h1>
      </div>
    </div>
  )
}

export default Navbar
