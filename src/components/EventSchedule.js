import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export const EventSchedule = (obj) => {
    let pdfLink = "#";
    return (
        <div className='mx-2' style={{ color: 'white', textAlign: 'center' }}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1 style={{ textAlign: 'center' }}>Event Schedule</h1>
                    </Col>
                    <Col>
                        <a href={pdfLink} target='_blank' rel="noreferrer" className='btn btn-primary' style={{ float: 'right' }}>Download PDF</a>
                    </Col>
                </Row>
            </Container>
            <div className="table" style={{ color: 'white' }}>
                <Container>
                    <Row>
                        <Col className='text-center'><h5>{obj.events[0].event}</h5></Col>
                        <Col className='text-center'><h5>{obj.events[0].day1}</h5></Col>
                        <Col className='text-center'><h5>{obj.events[0].day2}</h5></Col>
                    </Row><hr style={{ margin: '0' }} />
                </Container>
                <Container>
                    {
                        obj.events.map((e) => {
                            return (
                                e.id !== '#' &&
                                <>
                                    <Row>
                                        <Col className='text-center'>{e.event}</Col>
                                        <Col className='text-center'>{e.day1}</Col>
                                        <Col className='text-center'>{e.day2}</Col>
                                    </Row>
                                    <hr style={{ margin: '0' }} />
                                </>
                            )
                        })
                    }
                </Container>
            </div>
        </div>
    )
}
