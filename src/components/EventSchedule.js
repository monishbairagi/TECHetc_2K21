import React from 'react'

export const EventSchedule = (obj) => {
    return (
        <div className='mx-2'>
            <table className="table" style={{ color: 'white', textAlign: 'center' }}>
                <thead>
                    <tr>
                        {/* <th scope="col">{obj.events[0].id}</th> */}
                        <th scope="col"><h5>{obj.events[0].event}</h5></th>
                        <th scope="col"><h5>{obj.events[0].day1}</h5></th>
                        <th scope="col"><h5>{obj.events[0].day2}</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        obj.events.map((e) => {
                            return (
                                e.id!=='#'?
                                <tr>
                                    {/* <th scope="row">{e.id}</th> */}
                                    <td>{e.event}</td>
                                    <td>{e.day1}</td>
                                    <td>{e.day2}</td>
                                </tr>
                                :""
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
