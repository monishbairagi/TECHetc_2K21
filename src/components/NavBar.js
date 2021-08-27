import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import "../pages/Styles/Main.css"

export const NavBar = () => {
    let contactBtnStyle = {
        borderRadius: '14px',
        alignContent: 'center',
        width: '100px',
        placeSelf: 'center',
        fontWeight: '400',
        fontSize: '20px',
        float: "rigth"
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
                        <Nav.Link className="contact-btn" style={contactBtnStyle} eventKey="5" as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    {/* <Link to="/contact" className="btn btn-outline-warning" style={{ float: "right" }}>Contact</Link> */}
                </Navbar.Collapse>
            </Navbar>


            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-none text-center" style={colorChange ? blurreedNav : navStyle}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ fontSize: '35px', fontWeight: '800' }}>TECHetc 2k21</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: '20px', fontWeight: '400' }}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Schedule">Schedule</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/credits">Credits</Link>
                            </li>
                        </ul>
                        <span className="nav-item">
                            <Link className="btn btn-outline-warning" style={contactBtnStyle} to="/contact">Contact</Link>
                        </span>
                    </div>
                </div>
            </nav> */}
        </>
    )
}
