import React from 'react'

export const EventSchedule = (obj) => {
    return (
        <div className='mx-2'>
            <table className="table" style={{ color: 'white'}}>
                <thead>
                    <tr>
                        <th scope="col"><h5>{obj.events[0].event}</h5></th>
                        <th className='text-center' scope="col"><h5>{obj.events[0].day1}</h5></th>
                        <th className='text-center' scope="col"><h5>{obj.events[0].day2}</h5></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        obj.events.map((e) => {
                            return (
                                e.id !== '#' &&
                                    <tr key={e.id}>
                                        <td>{e.event}</td>
                                        <td className='text-center'>{e.day1}</td>
                                        <td className='text-center'>{e.day2}</td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
