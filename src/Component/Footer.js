import React from 'react'


import {Link, useHistory} from 'react-router-dom'
const Footer = () => {
    let history=useHistory();
    return (
        <>
        <div>
             <div className="navbarf">
               <Link to="#" className="menu-bars-h" >
                   <img src="Images/pic16.png" alt="" onClick={()=> {history.push("/Main");}} />
               </Link>
               
               <Link to="#" className="menu-bars-h">
                   <img src="Images/pic17.png" alt="" />
               </Link>
               <Link to="#" className="menu-bars-h">
                  <img src="Images/pic18.png" alt="" />
               </Link>
               <Link to="#" className="menu-bars-h">
                   <img src="Images/pic19.png" alt="" onClick={()=> {history.push("/Profile");}} />
               </Link> 
           
           </div>
            
        </div>
        </>
    )
}

export default Footer
