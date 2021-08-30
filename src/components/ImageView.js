import React from 'react'

export const ImageView = (obj) => {
    return (
        <div>
            <a class="lightbox" href={"#"+obj.id}>
                <img src={obj.img}/>
            </a>
            <div class="lightbox-target" id={obj.id}>
                <img src={obj.img}/>
                <a class="lightbox-close" href="#."></a>
            </div>
        </div>
    )
}
