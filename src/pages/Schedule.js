import React from 'react'
import { EventSchedule } from '../components/EventSchedule'

export const Schedule = () => {
    let scheduleData = [
        {
            id: "#",
            event: "EVENTS",
            day1: "15-09-2021",
            day2: "16-09-2021"
        },
        {
            id: "1",
            event: "MATHMANIA",
            day1: "10:00 AM",
            day2: "X"
        },
        {
            id: "2",
            event: "CODE RESTYLE",
            day1: "11:00 AM",
            day2: "X"
        },
        {
            id: "3",
            event: "LOGI-CAD",
            day1: "11:00 AM",
            day2: "X"
        },
        {
            id: "4",
            event: "CIVIL-O-PEDIA",
            day1: "11:00 AM",
            day2: "X"
        },
        {
            id: "5",
            event: "μ-MAT",
            day1: "12:30 PM",
            day2: "X"
        },
        {
            id: "6",
            event: "CIRCUI-T-RICS",
            day1: "2:00 PM",
            day2: "X"
        },
        {
            id: "7",
            event: "CHESS (OPEN FOR SCHOOL & COLLEGE)",
            day1: "3:30 PM",
            day2: "X"
        },
        {
            id: "8",
            event: "MATHMANIA (SCHOOL)",
            day1: "X",
            day2: "11:00 AM"
        },
        {
            id: "9",
            event: "CIRCUITECH",
            day1: "X",
            day2: "10:00 AM"
        },
        {
            id: "10",
            event: "INSTA-PLAN",
            day1: "X",
            day2: "11:00 AM"
        },
        {
            id: "11",
            event: "8 BALL POOL",
            day1: "X",
            day2: "12:00 NOON"
        },
        {
            id: "12",
            event: "CODE-2-DUO",
            day1: "X",
            day2: "1:00 PM"
        },
        {
            id: "13",
            event: "HUNT FOR FUN",
            day1: "X",
            day2: "2:00 PM"
        },
        {
            id: "14",
            event: "CROSSWORD",
            day1: "X",
            day2: "4:00 PM"
        }
    ]
    return (
        <div>
            <EventSchedule events={scheduleData} />
        </div>
    )
}
