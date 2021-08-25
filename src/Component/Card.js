
import React from 'react'
import {Link} from 'react-router-dom'
import * as Go from "react-icons/go";
import * as FaIcons from 'react-icons/fa'; 
const Card = () => {
    return (
        <div className="thirdBox">
            <div className="ico">
            <Link to="#" className="li" >
                   <FaIcons.FaMapMarkerAlt />

               </Link>
               <p>Find Center</p>
               </div>
               
               <div className="ico">
            <Link to="#" className="li" >
                   <FaIcons.FaRegNewspaper />

               </Link>
               <p>Not Sure about Test</p>
               </div>
               <div className="ico">
            <Link to="#" className="li" >
                   <Go.GoGraph/>

               </Link>
               <p>Re-Order</p>
               </div>
        </div>
    )
}

export default Card

