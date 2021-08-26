import React from 'react'
import { EventSchedule } from '../components/EventSchedule'

export const Schedule = () => {
    let scheduleData = [
        {
            id: "#",
            event: "Event",
            day1: "15-09-2021",
            day2: "16-09-2021"
        },
        {
            id: "1",
            event: "QUIZZARD",
            day1: "10:30 AM - 5:00 PM",
            day2: "10:30 AM - 5:00 PM"
        },
        {
            id: "2",
            event: "HUNT FOR FUN",
            day1: "X",
            day2: "10:30 AM - 5:00 PM1"
        },
        {
            id: "3",
            event: "SUBWAY SURFERS",
            day1: "X",
            day2: "10:30 AM - 5:00 PM"
        },
        {
            id: "4",
            event: "CODE RESTYLE",
            day1: "10:30 AM - 5:00 PM",
            day2: "X"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "MATHMANIA",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        },
        {
            id: "5",
            event: "Last Game",
            day1: "10:30 AM - 5:00 PM",
            day2: "2:30 PM - 5:00 PM"
        }
    ]
    return (
        <div>
            <EventSchedule events={scheduleData}/>
        </div>
    )
}
