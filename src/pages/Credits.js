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
        height: '100px',
        width: '100px',
    }
    let cstyle = {
        borderRadius: '25px',
        background: 'none',
        border: '20px',
        alignItems: 'center',
        placeSelf: 'center',
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
            <CardGroup style={{marginTop: '35px'}}>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://scontent.fccu14-1.fna.fbcdn.net/v/t1.6435-9/133586583_1038186920024865_3546490575725417196_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=AFyae9Ig6JUAX81lPba&_nc_ht=scontent.fccu14-1.fna&oh=b6bea43522283d6e78c5fde60f4ae0fa&oe=614ED542" />
                    <Card.Body>
                        <Card.Title style={cname}>Monish Kr. Bairagi</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://scontent.fccu14-1.fna.fbcdn.net/v/t1.6435-9/46519891_507858086290942_5046579383024746496_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=FE-q41PrmrkAX9zHN0D&_nc_ht=scontent.fccu14-1.fna&oh=b8fa627003cce3ae284e93f2b5343f30&oe=614F3A61" />
                    <Card.Body>
                        <Card.Title style={cname}>Subhayu Sengupta</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://media-exp1.licdn.com/dms/image/C5603AQERP829I9Y3mw/profile-displayphoto-shrink_200_200/0/1622451471978?e=1635379200&v=beta&t=B3o2vnQqUSdGrhd_JEuF9i13Av89I3klBmRkreLdLEc" />
                    <Card.Body>
                        <Card.Title style={cname}>Shaswata Das</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
            </CardGroup>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px'}}/>
            <h1 style={upperHeader}>Organizing Team</h1>
            <hr className="mx-2" style={{margin: '0', color: 'white', height: '5px' }} />
            <CardGroup style={{marginTop: '35px'}}>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={cname}> Aishik Sikdar</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={cname}>Koushik Chandra Das</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/chess.jpg" />
                    <Card.Body>
                        <Card.Title style={cname}>Aniket Chakraborty</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
                <Card style={cstyle}>
                    <Card.Img style={dimage}
                        src="https://www.hetc.ac.in/tecHETC2k20/assets/img/about/8bp.png" />
                    <Card.Body>
                        <Card.Title style={cname}>Anindya Sarkar</Card.Title>
                        <p style={dep}>CSE ( 2018-2022 )</p>
                    </Card.Body>
                </Card>
            </CardGroup>

        </div>
    )
}
