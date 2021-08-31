import React, { useState } from 'react'
import { CardGroup, Card, Modal } from 'react-bootstrap'
import { Link } from "react-router-dom"
import code2duo_img from '../../components/assets/Images/code2duo.jfif';
import codeRestyle_img from '../../components/assets/Images/coderestyle.jfif';
import crossword_img from "../../components/assets/Images/crossWord.jpg";
import circuitrix_img from "../../components/assets/Images/circuitrix.webp";
import civilOpedia_img from "../../components/assets/Images/civil_o_pedia.jfif";
import instaPlan_img from "../../components/assets/Images/insta_plan.jpg";
import uMAT_img from "../../components/assets/Images/uMAT.jpg";
import circuitech_img from "../../components/assets/Images/circuitech.jpg";
import huntForFun_img from "../../components/assets/Images/hunt_for_fun.jpg";
import MathMania_img from "../../components/assets/Images/MathMania.jpg";
import logiCAD_img from "../../components/assets/Images/logi_CAD.jpg";
import eightBP_img from "../../components/assets/Images/8bp.png";
import chess_img from "../../components/assets/Images/chess.jpg";
import { KnowMore } from '../../components/KnowMore';

export const CollegeEvents = (obj) => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }

    let event = [
        "",
        "CODE-RESTYLE",
        "CODE-2-DUO",
        "CROSS-WORD",
        "CIRCUI-T-RICKS",
        "CIVIL-O-PEDIA",
        "INSTA-PLAN",
        "μ-MAT",
        "CIRCUITECH",
        "HUNT-FOR-FUN",
        "MATHMANIA",
        "LOGI-CAD",
        "8-BALL-POOL",
        "CHESS"
    ]

    const [fullscreen, setFullscreen] = useState(true);
    const [show1, setShow1] = useState(false);
    function handleShow1(breakpoint) { setFullscreen(breakpoint); setShow1(true); }

    const [show2, setShow2] = useState(false);
    function handleShow2(breakpoint) { setFullscreen(breakpoint); setShow2(true); }

    const [show3, setShow3] = useState(false);
    function handleShow3(breakpoint) { setFullscreen(breakpoint); setShow3(true); }

    const [show4, setShow4] = useState(false);
    function handleShow4(breakpoint) { setFullscreen(breakpoint); setShow4(true); }

    const [show5, setShow5] = useState(false);
    function handleShow5(breakpoint) { setFullscreen(breakpoint); setShow5(true); }

    const [show6, setShow6] = useState(false);
    function handleShow6(breakpoint) { setFullscreen(breakpoint); setShow6(true); }

    const [show7, setShow7] = useState(false);
    function handleShow7(breakpoint) { setFullscreen(breakpoint); setShow7(true); }

    const [show8, setShow8] = useState(false);
    function handleShow8(breakpoint) { setFullscreen(breakpoint); setShow8(true); }

    const [show9, setShow9] = useState(false);
    function handleShow9(breakpoint) { setFullscreen(breakpoint); setShow9(true); }

    const [show10, setShow10] = useState(false);
    function handleShow10(breakpoint) { setFullscreen(breakpoint); setShow10(true); }

    const [show11, setShow11] = useState(false);
    function handleShow11(breakpoint) { setFullscreen(breakpoint); setShow11(true); }

    const [show12, setShow12] = useState(false);
    function handleShow12(breakpoint) { setFullscreen(breakpoint); setShow12(true); }

    const [show13, setShow13] = useState(false);
    function handleShow13(breakpoint) { setFullscreen(breakpoint); setShow13(true); }

    return (
        <div style={color}>
            <CardGroup style={{ margin: '20px 100px 0 100px' }}>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={codeRestyle_img} />
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
                                <KnowMore id={0} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={code2duo_img} />
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
                                <KnowMore id={1} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={crossword_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[3]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow3(true)}>
                            Know More
                        </Link>
                        <Modal show={show3} fullscreen={fullscreen} onHide={() => setShow3(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[3]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={2} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={circuitrix_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[4]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow4(true)}>
                            Know More
                        </Link>
                        <Modal show={show4} fullscreen={fullscreen} onHide={() => setShow4(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[4]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={3} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: '20px 100px 0 100px' }}>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={civilOpedia_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[5]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow5(true)}>
                            Know More
                        </Link>
                        <Modal show={show5} fullscreen={fullscreen} onHide={() => setShow5(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[5]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={4} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={instaPlan_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[6]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow6(true)}>
                            Know More
                        </Link>
                        <Modal show={show6} fullscreen={fullscreen} onHide={() => setShow6(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[6]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={5} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={uMAT_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[7]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow7(true)}>
                            Know More
                        </Link>
                        <Modal show={show7} fullscreen={fullscreen} onHide={() => setShow7(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[7]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={6} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={circuitech_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[8]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow8(true)}>
                            Know More
                        </Link>
                        <Modal show={show8} fullscreen={fullscreen} onHide={() => setShow8(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[8]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={7} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: '20px 100px 0 100px' }}>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={huntForFun_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[9]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow9(true)}>
                            Know More
                        </Link>
                        <Modal show={show9} fullscreen={fullscreen} onHide={() => setShow9(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[9]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={8} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={MathMania_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[10]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow10(true)}>
                            Know More
                        </Link>
                        <Modal show={show10} fullscreen={fullscreen} onHide={() => setShow10(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[10]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={9} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={logiCAD_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[11]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow11(true)}>
                            Know More
                        </Link>
                        <Modal show={show11} fullscreen={fullscreen} onHide={() => setShow11(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[11]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={10} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={eightBP_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[12]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow12(true)}>
                            Know More
                        </Link>
                        <Modal show={show12} fullscreen={fullscreen} onHide={() => setShow12(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[12]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={11} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>

            </CardGroup>
            <CardGroup>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={chess_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[13]}</Card.Title>
                        <Link style={{ color: 'white' }} onClick={() => handleShow13(true)}>
                            Know More
                        </Link>
                        <Modal show={show13} fullscreen={fullscreen} onHide={() => setShow13(false)}>
                            <Modal.Header closeButton style={{fontSize: '25px', margin: '0 10px 0 10px'}}>
                                <Modal.Title style={{ marginLeft: 'auto', fontSize: '4vh' }}>{event[13]}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <KnowMore id={12} />
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}