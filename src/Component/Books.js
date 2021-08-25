import React from 'react'
import * as FaIcon from  'react-icons/fa';
import * as FaIcons from  'react-icons/fa';
import * as Fa from 'react-icons/fa'
import * as Bi from "react-icons/bi";

import {Link, useHistory} from 'react-router-dom'
import AddCart from './AddCart';
const Books = () => {
    let history=useHistory();
    return (
        <>
          <div className="navbar">
               <Link to="#" className="menu-bars" >
                   <FaIcons.FaArrowLeft onClick={()=> {history.push("/Main");}}/>
               </Link>
               <h3 className="profile">Book A Test</h3>
               <Link to="#" className="menu-bars-h2">
                   <FaIcon.FaCartPlus/>
               </Link>
                    
         </div>
           <div className="pack">
           <h4>Health Packages </h4> <input type="radio" />
           </div>
           <div className="search">
               <div className="filt">
                   <FaIcon.FaFilter/>
               </div>
               <input type="search" placeholder="Search with test name or code " />
           </div>
           <div className="cbc">
           <div className="a1">
                    <p>Our personalized recommendation based on your selction</p>
                   
                    <a href="/BookTest" className="rf1">&lt;</a>
                        <a href="/Orders" className="rf2">&gt;</a>
                        
                        
                </div>
          <div className="a">
               
                <div className="a2">
                <Fa.FaDna/>
                </div>
                <div className="a3">
                    <h3>COMPLETE BLOOD COUNT; <br /> CBC</h3>
                    <p>26 Parameter(s) Covered</p>
                    <h3>₹ 330.00</h3>
                </div>
                <div className="a4">
                <Bi.BiCartAlt/>
                </div>
                
            </div>
           </div>
           <div className="g">
             <AddCart/>
           </div>
             
        </>
    )
}

export default Books

