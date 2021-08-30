import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"
import code2duo_img from '../../components/assets/Images/code2duo.jfif';
import codeRestyle_img from '../../components/assets/Images/coderestyle.jfif';
import crossword_img from "../../components/assets/Images/crossWord.jpg";
import circuitrix_img from "../../components/assets/Images/circuitrix.webp";
import civilOpedia_img from "../../components/assets/Images/civil_o_pedia.jfif";


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
        "μMAT",
        "CIRCUITECH",
        "Hunt For Fun",
        "MATHMANIA",
        "X-X-X-X",
        "X-X-X-X",
        "X-X-X-X"
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
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[6]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/6' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[7]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/7' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
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
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[9]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/9' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[10]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/10' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[11]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/college/knowmore/11' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
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
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
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
