import React from 'react'
import {useHistory} from "react-router-dom"

import {Link} from 'react-router-dom'
import "./Navbar.css";


const Form = () => {
  
 let history= useHistory();
 
  

    return (
      <>
        <div className="form">
            <div className="first">
            <button className="btn-h ">Help</button>
           <div className="media">
           <Link to="#" className="menu-bars-h1" >
           <img src="Images/pic23.png" alt="" />
               </Link>
               
               <Link to="#" className="menu-bars-h1">
                   <img src="Images/pic17.png" alt="" />
               </Link>
               <Link to="#" className="menu-bars-h1">
               <img src="Images/pic22.png" alt="" />
               </Link>
           </div>
            <div className="name">
            <p>Welcome to </p>
            <h2>Dr. Abhijeet Kr</h2>
            <p>Please enter your mobile and password</p>
            </div>
         
             <form className="Form">
  <div className="mb-3">
   
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mobile Number"/>
   
  </div>
  <div className="mb-3">
   
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
<div className="button">


  <button type="submit" class="btn " onClick={()=> {history.push("/Second");}} >LOGIN</button>
  <p className="p">or</p>
  <button type="submit" class="btn ">LOGIN WITH OTP</button>
  <p className="p">Forget Password ?</p>
  </div>
</form>
</div>
        </div>
        </>
    )
}

export default Form
