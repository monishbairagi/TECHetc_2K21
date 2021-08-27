import React from 'react'
import collegeLogo from "../components/assets/Images/college-logo.png";
import { Link } from "react-router-dom";

export const Main = () => {
    let mainStyle = {
        textAlign: 'center',
        color: 'white',
        marginTop: '14vh',
    }
    let h1Style = {
        fontSize: '12vw',
        fontWeight: '800'
    }
    let btnStyle = {
        // backgroundColor: 'purple',
        // color: 'white',
        fontSize: '25px',
        margin: '15px',
        borderRadius: '25px',
        width: '250px',
        fontWeight: '700',
        // border: 'none',
    }

    return (
        <div style={mainStyle}>
            <center><img src={collegeLogo} /></center>
            <h1 style={h1Style}>TECHetc 2K21</h1>
            <h4>Annual Technical Festival organized by HETC</h4>
            <h1>15 AND 16 SEPTEMBER</h1>
            <Link to='/events' className='btn btn-outline-info' style={btnStyle}>EVENTS</Link>
        </div>
    )
}
