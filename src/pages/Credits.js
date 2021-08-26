import React from 'react'
import { CardGroup, Card } from 'react-bootstrap'

export default function Credits() {
    let upperHeader = {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'bold',
    }
    let dep = {
        color: 'white',
        textAlign: 'center',
    }
    let dimage = {
        borderRadius: '100px',
        height: '150px',
        width: '150px',
    }
    let cstyle = {
        margin: '10px',
        borderRadius: '25px',
        background: 'none',
        border: '20px',
        alignItems: 'center',
    }
    let cname = {
        color: 'white',
        fontWeight: 'bold',
    }


    return (
        <div>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px' }} />
            <h1 style={upperHeader}>Website Creator</h1>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px' }} />
            <CardGroup>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={cname}>Monish Kr. Bairagi</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={cname}>Subhayu Sengupta</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://media-exp1.licdn.com/dms/image/C5603AQERP829I9Y3mw/profile-displayphoto-shrink_200_200/0/1622451471978?e=1635379200&v=beta&t=B3o2vnQqUSdGrhd_JEuF9i13Av89I3klBmRkreLdLEc" />
                    <Card.Body>
                        <Card.Title style={cname}>Shaswata Das</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
            </CardGroup>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px'}}/>
            <h1 style={upperHeader}>Organizing Team</h1>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px' }} />
            <CardGroup>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={cname}> Aishik Sikdar</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={cname}>Koushik Chandra Das</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={cname}>Aniket Chakraborty</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={cname}>Anindya Sarkar</Card.Title>
                        <p style={dep}>CSE</p>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    )
}
