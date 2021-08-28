import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import "../pages/Styles/Main.css"
import collegeLogo from "../components/assets/Images/college-logo.jpg"

export const NavBar = () => {
    let contactBtnStyle = {
        borderRadius: '14px',
        alignContent: 'center',
        placeSelf: 'center',
        fontWeight: '400',
        fontSize: '20px',
        float: "rigth",
        padding: "0 10px 0 10px"
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

    let regLink = "https://docs.google.com/forms/d/e/1FAIpQLSeCrub0XBIhqp14z9oMctV-xeNEiyWD95ck6x7fv_MNpu7n4Q/viewform?embedded=true";

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
                        <Nav.Link eventKey="4" as={Link} to="/credits">Credits</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="register-btn mx-2 my-2" style={contactBtnStyle} eventKey="1" href={regLink} target="_blank">Register Now</Nav.Link>
                        <Nav.Link className="contact-btn" style={contactBtnStyle} eventKey="2" as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}
