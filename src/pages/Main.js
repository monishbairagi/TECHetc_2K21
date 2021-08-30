import React from 'react'
import collegeLogo from "../components/assets/Images/college-logo.jpg";
import { Link } from "react-router-dom";

export const Main = () => {

    let mainStyle = {
        textAlign: 'center',
        color: 'white',
        marginTop: '9vh',
    }
    let h1Style = {
        fontSize: '12vw',
        margin: '0',
    }
    let btnStyle = {
        fontSize: '25px',
        margin: '15px',
        borderRadius: '25px',
        width: '250px',
        fontWeight: '700',
    }

    return (
        <div style={mainStyle}>
            <center>
                <a href="https://www.hetc.ac.in/" target="_blank">
                    <img src={collegeLogo} width="120vw" style={{ borderRadius: "50%", marginBottom: '0' }} />
                </a>
            </center>
            <h1 style={h1Style} className="techetc-title">TECHetc 2K21</h1>
            <h4>Annual Technical Festival organized by HETC</h4>
            <h1>15 AND 16 SEPTEMBER</h1>
            <Link to='/events' className='btn btn-outline-info' style={btnStyle}>EVENTS</Link>
        </div>
    )
}
