import React from 'react'

export const EventSchedule = (obj) => {
    return (
        <div className='mx-2'>
            <table className="table" style={{ color: 'white', textAlign: 'center' }}>
                <thead>
                    <tr>
                        {/* <th scope="col">{obj.events[0].id}</th> */}
                        <th scope="col">{obj.events[0].event}</th>
                        <th scope="col">{obj.events[0].day1}</th>
                        <th scope="col">{obj.events[0].day2}</th>
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
