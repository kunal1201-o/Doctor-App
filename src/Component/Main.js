import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';

import * as FaIcon from  'react-icons/fa';
import {Link, useHistory} from 'react-router-dom'
import { SidebarData } from './SidebarData';


import Footer from './Footer';

import Box from './Box';

import Slider1 from './Slider1';
import Sliders from './Sliders';
import Card from './Card';

const Main = () => {
   let history= useHistory();
    const [sidebar , setSidebar] = useState(false);
    const showSidebar =()=>setSidebar(!sidebar);
    

    return (
        <>
           <div className="navbar">
               <Link to="#" className="menu-bars" >
                   <FaIcons.FaBars onClick={showSidebar}/>
               </Link>
               
               <Link to="#" className="menu-bars-h2">
                   <FaIcon.FaCartPlus onClick={()=> {history.push("/Orders");}}/>
               </Link>
                    
           
           </div>
           <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
               <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                      
                      <div className="pro">
                      <i className="fas fa-user fa-6x user"  onClick={()=> {history.push("/Profile");}}> </i> 
                      <h5 className="Raj">Raj <br /> View and Edit Profile</h5>
                      </div>
                     
                      
                  </li>

                 {SidebarData.map((item,index)=>{
                     return(
                         <li key={index} className={item.cName}>
                             <Link to={item.path}  >
                                 {item.icon}
                                 <span>{item.title}</span>
                             </Link>
                         
                         </li>
                     )
                 })}
                     <button className="btno">Emergency Help</button>
                     <div className="call">
                         <div className="call1">
                           <img src="Images/pic17.png" alt="" />
                           <p>Whatsapp</p>
                         </div>
                         <div className="call1">
                             <img src="images/pic21.png" alt="" />
                             <p>Call</p>
                             </div>
                             <div className="call1">
                             <img src="Images/pic20.png" alt="" />
                             <p>Reports Pdf</p>
                             </div>
                     </div>
                     <button className="bkp">Logout</button>
               </ul>
         
       
           </nav>
           <h2>Dr Abhijeet Kr</h2>
           <div className="slider">
               <Sliders/>
           </div>
           <div className="box_t">
              <Box/>
         </div>
           <div className="  ">
              <Slider1/>
           </div>
           <div>
               <Card/>
           </div>
           <div className="slider slider2">  
               <Sliders />
           </div>
           <div className="footers">
               <Footer/>
           </div>
         
        </>
    )
}

export default Main
