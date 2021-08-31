import React, { useState} from 'react'
import { CardGroup, Card, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom"
import chess_img from "../../components/assets/Images/chess.jpg";
import MathMania_img from "../../components/assets/Images/MathMania.jpg";
import { KnowMore } from '../../components/KnowMore';


export const SchoolEvents = (obj) => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }

    let event = [
        "",
        "MATHMANIA",
        "CHESS",
    ]

    const [fullscreen, setFullscreen] = useState(true);
    const [show1, setShow1] = useState(false);
    function handleShow1(breakpoint) { setFullscreen(breakpoint); setShow1(true); }

    const [show2, setShow2] = useState(false);
    function handleShow2(breakpoint) { setFullscreen(breakpoint); setShow2(true); }

    return (
        <div style={color}>
            <CardGroup style={{ margin: '20px 100px 0 100px' }}>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={MathMania_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[1]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow1(true)}>
                            Know More
                        </Link>
                        <Modal show={show1} fullscreen={fullscreen} onHide={() => setShow1(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[1]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={13} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={chess_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[2]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow2(true)}>
                            Know More
                        </Link>
                        <Modal show={show2} fullscreen={fullscreen} onHide={() => setShow2(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[2]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={14} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
