import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export const KnowMore = (obj) => {

    let data = [
        {
            id: '1',
            event: '8 Ball Pool',
            h1: 'About 8 Ball Pool:',
            p1: "8 ball pool is played with cue sticks and sixteen balls: a cue ball and fifteen object balls. The object balls include seven striped balls, seven solid-colored balls and the black 8 ball. After the balls are scattered with a break shot, a player is assigned either the group of solid or striped balls once they have legally pocketed a ball from that group. The ultimate object of the game is to legally pocket the eight ball in a \"called\" pocket, which can only be done after all of the balls from a player's assigned group have been cleared from the table. The 8-ball must never touch another ball before going into the pocket.",
            h2: 'Contact:',
            p2: '+91 9038741205\n+91 7278454389'
        },
        {
            id: '2',
            event: 'Chess',
            h1: 'Contact:',
            p1: '+91 9038741205\n+91 7278454389'
        },
        {
            id: '3',
            event: 'Math-Mania',
            h1: 'Contact:',
            p1: '+91 9038741205\n+91 7278454389'
        },
        {
            id: '4',
            event: 'Code-2-Duo',
            h1: 'Contact:',
            p1: '+91 9038741205\n+91 7278454389'
        },
    ];

    return (
        <div className='p-3' style={{ color: 'white' }}>
            <h1 style={{ textAlign: 'center' }}>{data[obj.id].event}</h1>
            <hr style={{ height: '5px', color: 'white'}} />
            <h1>{data[obj.id].h1}</h1>
            <p>{data[obj.id].p1}</p>
            <h1>{data[obj.id].h2}</h1>
            <pre>{data[obj.id].p2}</pre>
        </div>
    )
}
