import React from 'react'
import { CardGroup, Card, Row, Col, Container } from 'react-bootstrap'

export const Contact = () => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }
    return (
        <>
            <CardGroup >
                <Card style={{ background: 'none', border: 'none', placeSelf: 'center' }}>
                    <Row style={{ textAlign: 'center' }}>
                        <ul >

                            <img src="https://image.flaticon.com/icons/png/128/724/724664.png" style={{ width: 'auto', height: '45px', placeSelf: 'center' }} />
                            <h1 style={{ color: 'white' }}>Phone</h1>

                            <h5 style={{ color: 'white' }}>094333 07616</h5>
                        </ul>
                    </Row>
                    <Row>
                        <ul style={{ textAlign: 'center', padding: '25px 0 25px 0' }}>
                            <img src="https://image.flaticon.com/icons/png/128/552/552486.png" style={{ width: 'auto', height: '45px', placeSelf: 'center' }} />
                            <h1 style={{ color: 'white' }}>Mail</h1>
                            <h5><a href="mailto:techetc@hetc.ac.in" style={{ color: 'white' }}>techetc@hetc.ac.in</a></h5>
                        </ul>
                    </Row>
                    <Row>
                        <ul style={{ textAlign: 'center' }}>
                            <img src="https://image.flaticon.com/icons/png/128/2747/2747578.png" style={{ width: 'auto', height: '45px', placeSelf: 'center' }} />
                            <h1 style={{ color: 'white' }}>Location</h1>
                            <h5 style={{ color: 'white' }}>Vivekananda Road, Pipulpati Hooghly, West Bengal, India 712103</h5>
                        </ul>
                    </Row>
                </Card>
                <Card style={{ background: 'none', border: 'none' }}>
                    <iframe className="my-5"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeCrub0XBIhqp14z9oMctV-xeNEiyWD95ck6x7fv_MNpu7n4Q/viewform?embedded=true" width="100%" height="550" frameborder="0" marginheight="0" marginwidth="0">
                            Loading...
                        </iframe>
                </Card>
            </CardGroup>

        </>
        // <div className="container-fluid">
        //     <div className="contact_info">
        //         <dir>
        //             <dir className="row">
        //                 <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
        //                     {/* phone */}
        //                     <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
        //                         <img className="mx-2" src="https://image.flaticon.com/icons/png/128/724/724664.png" height="100px" width="100px" alt="phone" />
        //                         <div className="contact_info_content mt-4" >
        //                             <div className="contact_info_title mx-auto">
        //                                 Phone
        //                             </div>
        //                             <div className="contact_info_text">
        //                                 707694888
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* email */}
        //                     <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
        //                         <img className="mx-2" src="https://image.flaticon.com/icons/png/128/552/552486.png" height="100px" width="100px" alt="phone" />
        //                         <div className="contact_info_content mt-4">
        //                             <div className="contact_info_title">
        //                                 Email
        //                             </div>
        //                             <div className="contact_info_text">
        //                                 shaswata0999@gmail.com
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* address */}
        //                     <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
        //                         <img className="mx-2" src="https://image.flaticon.com/icons/png/128/2747/2747578.png" height="100px" width="100px" alt="phone" />
        //                         <div className="contact_info_content mt-4">
        //                             <div className="contact_info_title">
        //                                 Address
        //                             </div>
        //                             <div className="contact_info_text">
        //                                 abc xyz
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </dir>
        //         </dir>
        //     </div>
        //     {/* contact form */}
        //     <iframe className="my-5"
        //         src="https://docs.google.com/forms/d/e/1FAIpQLSeCrub0XBIhqp14z9oMctV-xeNEiyWD95ck6x7fv_MNpu7n4Q/viewform?embedded=true" width="107%" height="900" frameborder="0" marginheight="0" marginwidth="0">
        //     </iframe>
        // </div>
    )
}
