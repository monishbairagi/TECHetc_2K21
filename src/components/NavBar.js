import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import "../pages/Styles/Main.css"
import collegeLogo from "../components/assets/Images/college-logo.jpg"

export const NavBar = () => {
    let contactBtnStyle = {
        alignContent: "center",
        placeSelf: "center"
    }
    let navStyle = { position: '-webkit-sticky', position: 'sticky', top: '0', zIndex: '1', backdropFilter: 'blur(0px)' }
    let blurreedNav = { position: '-webkit-sticky', position: 'sticky', top: '0', zIndex: '1', backdropFilter: 'blur(60px)' }


    const [colorChange, setColorChange] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    });

    let regLink = "https://forms.gle/6ypXRTMvXR7avzzv8";

    return (
        <>
            <Navbar className="text-center px-2 py-0 mb-3" collapseOnSelect expand="lg" bg="none" variant="dark" style={colorChange ? blurreedNav : navStyle}>
                <Navbar.Brand as={Link} to="/" style={{ fontSize: '35px', fontWeight: '800' }}>TECHetc 2k21</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav></Nav>
                    <Nav className="me-auto" style={{ fontSize: '20px', fontWeight: '400' }}>
                        <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/schedule">Schedule</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/gallery">Gallery</Nav.Link>
                        <Nav.Link eventKey="5" as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className>
                        <Nav.Link className="register-btn mx-2 my-2" style={contactBtnStyle} active href={regLink} target="_blank">Register Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}
