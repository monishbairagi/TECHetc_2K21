import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import boy from "../components/assets/Images/school-student.png";
import man from "../components/assets/Images/college-student.png";
import "./Styles/Main.css";
export const EventsMain = () => {
    return (
        <div className="container text-center" style={{marginTop: '10%'}}>
            <Row className="px-5 mx-5">
                <Col className="d-flex justify-content-center">
                    <Link to="/TECHetc2K21/events/school" style={{ textDecoration: 'none' }}><div className="card card-school-events" >
                        <img src={boy} alt="imgage"/>
                        <div className="card-body">
                            <h2 className="d-flex justify-content-center" >Events for School Students</h2>
                        </div>
                    </div></Link>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Link to="/TECHetc2K21/events/college" style={{ textDecoration: 'none' }}><div className="card card-college-events" >
                        <img src={man} alt="imgage"/>
                        <div className="card-body">
                            <h2 className="d-flex justify-content-center" >Events for College Students</h2>
                        </div>
                    </div></Link>
                </Col>
            </Row>
        </div>
    )
}
