import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
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

    return (
        <div style={color}>
            <CardGroup style={{ margin: '20px 100px 0 100px' }}>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={codeRestyle_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[1]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/1' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={code2duo_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[2]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/2' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={crossword_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[3]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/3' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={circuitrix_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[4]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/4' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: '20px 100px 0 100px' }}>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={civilOpedia_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[5]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/5' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={instaPlan_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[6]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/6' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={uMAT_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[7]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/7' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={circuitech_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[8]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/8' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup style={{ margin: '20px 100px 0 100px' }}>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={huntForFun_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[9]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/9' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={MathMania_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[10]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/10' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={logiCAD_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[11]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/11' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={eightBP_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[12]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/12' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

            </CardGroup>
            <CardGroup>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src={chess_img} />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[13]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/13' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
