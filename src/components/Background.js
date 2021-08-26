import React from 'react'
import v1 from './assets/v1.mp4'
import v2 from './assets/v2.mp4'
import v3 from './assets/v3.mp4'
import v4 from './assets/v4.mp4'
import v5 from './assets/v5.mp4'
import a1 from './assets/a1.mp3'

const getVideo = () => {
    var i = Math.floor(Math.random() * 5);
    if (i === 0) return v1;
    else if (i === 1) return v2;
    else if (i === 2) return v3;
    else if (i === 3) return v4;
    else return v5;
}

export const Background = () => {
    let videoStyle = {
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: '50%',
        top: '50%',
        objectFit: 'cover',
        transform: 'translate(-50%,-50%)',
        zIndex: '-1',
        filter: 'brightness(50%)',
    }

    // document.addEventListener('click', () => {
    //     document.getElementById("bgaudio").play();
    //     document.removeEventListener('click', () => {
    //         document.getElementById("bgaudio").play();
    //     });
    // });

    return (
        <>
            {/* <audio id="bgaudio" autoplay loop>
                <source src={a1} type="audio/mpeg" />
            </audio> */}
            <video autoPlay loop muted style={videoStyle}>
                <source src={getVideo()} type="video/mp4" />
            </video>
        </>
    )
}
