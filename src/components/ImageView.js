import React from 'react'

export const ImageView = (obj) => {
    return (
        <div>
            <a className="lightbox" href={"#"+obj.id}>
                <img src={obj.img} alt="imgage"/>
            </a>
            <div className="lightbox-target" id={obj.id}>
                <img src={obj.img} alt="imgage"/>
                <a className="lightbox-close" href="#."> </a>
            </div>
        </div>
    )
}
