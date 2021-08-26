import React from 'react';
import { Card, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import boy from "../components/assets/Images/school-student.png";
import man from "../components/assets/Images/college-student.png";
export const EventsMain = () => {

    return (
        <div className="container align-items-center">
            <Row className="">
                <Col className="d-flex justify-content-center">
                    <Card style={{ width: "18rem", marginBottom: "5px" }} onMouseOver="hoverEffect">
                        <Card.Img variant="top" src={boy} height="300px" width="200px" />
                        <Card.Body className="d-flex justify-content-center">
                            <Link className="btn btn-primary" to="/events/school">Events for School</Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                    <Card style={{ width: "18rem", marginBottom: "5px" }}>
                        <Card.Img variant="top" src={man} height="300px" width="200px" />
                        <Card.Body className="d-flex justify-content-center">
                            <Link className="btn btn-primary" to="/events/college">Events for College</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
