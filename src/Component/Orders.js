import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import {Link, useHistory} from 'react-router-dom'
const Orders = () => {
    let history= useHistory();
    return (
        <> <div className="or">
               <div className="navbar">
               <Link to="#" className="menu-bars" >
                   <FaArrowLeft onClick={()=> {history.push("/Main");}} />
               </Link>
               <h3 className="profile">Order</h3>
               <Link to="#" className="menu-bars-h1">
                  <h6>Refunds &gt;</h6>
               </Link>
                    
           
           </div>
           <div className="RA">
               <h1>RA</h1>
           </div>
           <div className="open">
               <button>Open</button>
               <button>Open</button>
               <button>Open</button>
           </div>
           </div>
           <div className="parag">
           <p>No order available</p>
           </div>
         
         
        </>
    )
}

export default Orders
