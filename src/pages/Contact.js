import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'

export const Contact = () => {
    return (
        <CardGroup style={{ height: "80vh", fontFamily: "arial" }}>
            <Card style={{ background: 'none', border: 'none', placeSelf: 'center', textAlign: 'center' }}>
                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/128/724/724664.png" style={{ width: 'auto', height: '60px', placeSelf: 'center' }} />
                <Card.Body>
                    <h1 style={{ color: 'white' }}>Phone</h1>
                    <Card.Text>
                        <h5 style={{ color: 'white' }}>+91 9433307616</h5>
                        <h5 style={{ color: 'white' }}>+91 9038572990</h5>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ background: 'none', border: 'none', placeSelf: 'center', textAlign: 'center' }}>
                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/128/552/552486.png" style={{ width: 'auto', height: '60px', placeSelf: 'center' }} />
                <Card.Body>
                    <h1 style={{ color: 'white' }}>Mail</h1>
                    <Card.Text>
                        <h5><a href="mailto:techetc@hetc.ac.in" style={{ color: 'white' }}>techetc@hetc.ac.in</a></h5>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ background: 'none', border: 'none', placeSelf: 'center', textAlign: 'center' }}>
                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/128/2747/2747578.png" style={{ width: 'auto', height: '60px', placeSelf: 'center' }} />
                <Card.Body>
                    <h1 style={{ color: 'white' }}>Location</h1>
                    <Card.Text>
                        <h5 style={{ color: 'white' }}>Vivekananda Road, Pipulpati Hooghly, West Bengal, India 712103</h5>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
