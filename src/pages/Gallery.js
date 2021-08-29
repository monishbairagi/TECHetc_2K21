import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import g1 from '../components/assets/Images/g1.JPG'
import g2 from '../components/assets/Images/g2.JPG'
import g3 from '../components/assets/Images/g3.JPG'
import g4 from '../components/assets/Images/g4.JPG'
import g5 from '../components/assets/Images/g5.JPG'
import g6 from '../components/assets/Images/g6.JPG'
import g7 from '../components/assets/Images/g7.JPG'
import g8 from '../components/assets/Images/g8.JPG'
import g9 from '../components/assets/Images/g9.JPG'
import g10 from '../components/assets/Images/g10.JPG'
import g11 from '../components/assets/Images/g11.JPG'
import g12 from '../components/assets/Images/g12.JPG'

export const Gallery = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col><img src={g1} width="100%" /></Col>
                <Col><img src={g2} width="100%" /></Col>
                <Col><img src={g3} width="100%" /></Col>
            </Row><br />
            <Row>
                <Col><img src={g4} width="100%" /></Col>
            </Row><br />
            <Row>
                <Col><img src={g5} width="100%" /></Col>
                <Col><img src={g6} width="100%" /></Col>
            </Row><br />
            <Row>
                <Col><img src={g7} width="100%" /></Col>
                <Col><img src={g8} width="100%" /></Col>
                <Col><img src={g9} width="100%" /></Col>
            </Row><br />
            <Row>
                <Col><img src={g10} width="100%" /></Col>
                <Col><img src={g11} width="100%" /></Col>
            </Row><br />
            <Row>
                <Col><img src={g12} width="100%" /></Col>
            </Row>
        </Container >
    )
}
