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
                <a href="https://www.hetc.ac.in/" target="_blank" rel="noreferrer">
                    <img src={collegeLogo} width="120vw" alt="logo" style={{ borderRadius: "50%", marginBottom: '0' }} />
                </a>
            </center>
            <h1 style={h1Style} className="techetc-title">TECHetc 2K21</h1>
            <h4 style={{ fontFamily: "Andale Mono, monospace", color: "rgb(232, 255, 129)" }}>Annual Technical Festival organized by HETC</h4>
            <h1 style={{ fontFamily: "Blippo, fantasy", color: "rgba(0, 255, 213, 0.849)" }}>15 AND 16 SEPTEMBER</h1>
            <Link to='/TECHetc2K21/events' className='btn btn-outline-info' style={btnStyle}>EVENTS</Link>
        </div>
    )
}
