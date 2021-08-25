import React from 'react'
import { useHistory } from 'react-router-dom';




const Box = (props) => {
   
    let history= useHistory();
    return (
        <>
        
        <div class="box-mid">
         <h3 onClick={()=> {history.push("/Books");}}>BOOK A TEST</h3>
         <p>CLICK HERE -&gt;</p>
        </div>
         <div class="box-mid2 ">
         <h3>VIEW REPORTS</h3>
         <p>CLICK HERE -&gt;</p>
        </div>
        </>
    )
}

export default Box
