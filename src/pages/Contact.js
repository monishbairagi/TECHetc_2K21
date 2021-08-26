import React from 'react'

export const Contact = () => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }
    return (
        <div  className="container-fluid">
        <div className="contact_info">
            <dir>
                <dir className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/* phone */}
                        <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
                            <img className="mx-2" src="https://image.flaticon.com/icons/png/128/724/724664.png" height="100px" width="100px" alt="phone" />
                            <div className="contact_info_content mt-4" >
                                <div className="contact_info_title mx-auto">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    707694888
                                </div>
                            </div>
                        </div>
                        {/* email */}
                        <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
                            <img className="mx-2" src="https://image.flaticon.com/icons/png/128/552/552486.png" height="100px" width="100px" alt="phone" />
                            <div className="contact_info_content mt-4">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    shaswata0999@gmail.com
                                </div>
                            </div>
                        </div>
                        {/* address */}
                        <div className="contact_info_item col-md-4 col-sm-10 d-flex justify-content-start align-item-center">
                            <img className= "mx-2"src="https://image.flaticon.com/icons/png/128/2747/2747578.png" height="100px" width="100px" alt="phone" />
                            <div className="contact_info_content mt-4">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="contact_info_text">
                                    abc xyz
                                </div>
                            </div>
                        </div>
                    </div>
                </dir>
            </dir>
        </div>
        {/* contact form */}
        <iframe className="my-5"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeCrub0XBIhqp14z9oMctV-xeNEiyWD95ck6x7fv_MNpu7n4Q/viewform?embedded=true" width="107%" height="900" frameborder="0" marginheight="0" marginwidth="0"> 
        </iframe>

        </div>
    )
}
