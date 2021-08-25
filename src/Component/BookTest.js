import React from 'react'
import * as Bi from "react-icons/bi";
import * as Fa from 'react-icons/fa';
const BookTest = () => {
    return (
        <>
         <div className="a1">
                    <p>Our personalized recommendation based on your selction</p>
                    
                       
                
                </div>
          <div className="a">
               
                <div className="a2">
                <Fa.FaDna/>
                </div>
                <div className="a3">
                    <h3>COMPLETE BLOOD COUNT; <br /> CBC</h3>
                    <p>26 Parameter(s) Covered</p>
                    <h3>$330.00</h3>
                </div>
                <div className="a4">
                <Bi.BiCartAlt/>
                </div>
                
            </div>
            <div className="b">
            <div className="b1">
                
                </div>
                <div className="b2">
                  <h2>Find some tests</h2>
                  <p>Looks like there is no test in your cart.</p>
                </div>
                <div className="b3">
                  <p>Please try some of our tests exclusively recommended for you.</p>
                </div>
            </div>
            <div className="c">
                <button className="BTN">BOOK A TEST</button>
            </div>
           
        
        </>
    )
}

export default BookTest
