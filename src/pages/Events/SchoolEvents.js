import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"


export const SchoolEvents = (obj) => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }

    let event = [
        "",
        "8 Ball Pool",
        "Chess",
    ]

    return (
        <div style={color}>
            <CardGroup style={{ margin: '20px 100px 0 100px' }}>
                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[1]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/school/knowmore/1' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>

                <Card style={{ margin: '10px', borderRadius: '25px', background: 'none', border: 'none' }}>
                    <Card.Img style={{ borderRadius: '25px', height: '100px', width: '100px', placeSelf: 'center' }} variant="top"
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={{ margin: '0' }}>{event[2]}</Card.Title>
                        <Link style={{ color: 'white' }} to='/events/school/knowmore/2' target="_blank">
                            Know More
                        </Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
