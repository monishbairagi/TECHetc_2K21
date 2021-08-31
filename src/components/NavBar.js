import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import "../pages/Styles/Main.css"

export const NavBar = () => {
    let contactBtnStyle = {
        alignContent: "center",
        placeSelf: "center"
    }
    let navStyle = { position: 'sticky', top: '0', zIndex: '1', backdropFilter: 'blur(0px)' }
    let blurreedNav = { position: 'sticky', top: '0', zIndex: '1', backdropFilter: 'blur(60px)' }


    const [colorChange, setColorChange] = useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 10) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    });

    let CregLink = "https://forms.gle/6ypXRTMvXR7avzzv8";
    let SregLink = "https://forms.gle/jxhMqN7E7RjS3FEbA";

    return (
        <>
            <Navbar className="text-center px-2 py-0 mb-3" collapseOnSelect expand="lg" bg="none" variant="dark" style={colorChange ? blurreedNav : navStyle}>
                <Navbar.Brand as={Link} to="/TECHetc2K21" className="brand-style">TECHetc 2K21</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav></Nav>
                    <Nav className="me-auto" style={{ fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans, sans-serif" }}>
                        <Nav.Link eventKey="1" as={Link} to="/TECHetc2K21">Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to="/TECHetc2K21/events">Events</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to="/TECHetc2K21/schedule">Schedule</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to="/TECHetc2K21/rules">Rules</Nav.Link>
                        <Nav.Link eventKey="5" as={Link} to="/TECHetc2K21/gallery">Gallery</Nav.Link>
                        <Nav.Link eventKey="6" as={Link} to="/TECHetc2K21/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className>
                        <Nav.Link className="register-btn mx-2 my-2" style={contactBtnStyle} active href={SregLink} target="_blank">Register Now <p style={{fontSize: '14px', fontWeight: 'normal'}}>(For School Students)</p></Nav.Link>
                        <Nav.Link className="contact-btn mx-2 my-2" style={contactBtnStyle} active href={CregLink} target="_blank">Register Now <p style={{fontSize: '14px', fontWeight: 'normal'}}>(For College Students)</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}
