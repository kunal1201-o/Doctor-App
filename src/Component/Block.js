import React from 'react'
import { useHistory } from 'react-router';
import './Navbar.css'
const Block = () => {
    let history= useHistory();
    return (
        <>
        <div className="Otp">
        <div className="name">
            <p>Welcome to </p>
            <h2>Dr. Abhijeet Kr</h2>
            
            </div>
            <div className="Big-Box">
                <div className="box" id="box-1"></div>
                <div className="box" id="box-2"></div>
                <div className="box" id="box-3"></div>
                <div className="box" id="box-4"></div>
            </div>
            <button className="btn" onClick={()=> {history.push("/Main");}}>Resend OTP</button>
        </div>
        </>
    )
}

export default Block
