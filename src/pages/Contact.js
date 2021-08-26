import React from 'react'

export const Contact = () => {
    let color = {
        color: 'antiquewhite',
        textAlign: 'center'
    }
    return (
        <div style={color}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScU-J3_7EtOee0W3URRZGRINMzfkILCDI4aSSSzassSL-orQw/viewform?embedded=true"
                frameborder="0"
                scrolling="no" 
                style={{overflow:'hidden',height:'100%',width:'100%'}}
                height="100%" 
             width="100%">Loading…</iframe>
        </div>
    )
}
