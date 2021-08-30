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
import { ImageView } from '../components/ImageView'

export const Gallery = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col><ImageView img={g1} id={'1'}/></Col>
                <Col><ImageView img={g2} id={'2'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g3} id={'3'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g4} id={'4'}/></Col>
                <Col><ImageView img={g5} id={'5'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g6} id={'6'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g7} id={'7'}/></Col>
                <Col><ImageView img={g8} id={'8'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g9} id={'9'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g10} id={'10'}/></Col>
                <Col><ImageView img={g11} id={'11'}/></Col>
            </Row><br/>
            <Row>
                <Col><ImageView img={g12} id={'12'}/></Col>
            </Row><br/>
        </Container >
    )
}
