import React from 'react'
import * as FaIcons from 'react-icons/fa';

import {Link, useHistory} from 'react-router-dom'

import "./Navbar.css"
const Profile = () => {
 let history= useHistory();
    return (
       <>
       <div className="navbar">
               <Link to="#" className="menu-bars" >
                <FaIcons.FaArrowLeft onClick={()=> {history.push("/Main");}} />
               </Link>
               <h1 className="profile">Profile</h1>
               
     </div>
     <div className="profileicon">
                <div>
                <i class="fas fa-clipboard fa-2x"></i>
                <h3>Reports</h3>
                </div>
                <div>
                <div className="dp">
                    <div className="dpinn">
                    <i class="fas fa-user fa-6x"></i>
                    </div>
                    </div>
                <h3>Raj</h3>
                </div>
                <div>
                <i class="fas fa-pencil-alt fa-2x"></i>
                <h3>Edit</h3>
                </div>
            </div>
            <div id="heading">
                <h2>Family Members</h2>
            </div>
</>
    )
}

export default Profile
