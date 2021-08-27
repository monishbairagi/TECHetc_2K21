import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

export const KnowMore = (obj) => {

    let data = [
        {
            id: '1',
            event: '<CODE/RESTYLE>',
            head1: 'ABOUT CODE RESTYLE:',
            para1: "CODE RESTYLE was first introduced in TECHETC 2k19. It will be an awesome platform to hone your knowledge of the internal working of the C language over 2 rounds of exciting questions and with just one attempt of compilation."
                + "So, have you mastered the C language? Can you crack the MCQ test related to the C language? Can you code with 1 chance to compile & run? Do you type at 100WPM without missing a single semicolon and compile it in 1 go?"
                + "Then this is the event for you. Come join us this TECHETC 2k21 and show us your programming knowledge and blind coding skills.",
            head2: 'CONTEST DETAILS:',
            para2: 'CODE RESTYLE will be spread over 2 rounds, the first being an MCQ round and the second a blind coding round. The details of the rounds are as follows:'
                + '\n⦁ Round 1 (MCQ): There will be 20 MCQ questions from C language and 10 MCQ questions from general computer aptitude. Time-30 minutes.'
                + '\n⦁ Round 2 (Coding): You will be given a problem statement for which you have to design your logic and type it in C language with just 1 attempt to compile & run. Time-30 minutes.',
            head3: 'RULES:',
            para3: 'Rules for Round 1:'
                + '\n⦁ The MCQ round will be on Google Form.'
                + '\n⦁ There will be no negative marking on wrong response.'
                + '\n⦁ In case of tie in scores, submission time will be considered.'
                + '\n⦁ Top 25% of participants (may vary) will be moving on to the next round.'
                + '\n\nRules for Round 2:'
                + '\n⦁ A problem will be given to you on a Google Form. You have to devise your logic for the problem.'
                + '\n⦁ Then, you have to type the entire solution in the C language to the problem in the text area input field of the Google Form.'
                + '\n⦁ After completion, your code, if compiled successfully, will be tested against our test cases.'
                + '\n⦁ If it doesn’t compile, programs with least errors and correct logic will be preferred.'
                + '\n⦁ Scoring will be based on solution, compilability and error count.'
                + '\n⦁ In case of tie in scores, submission time will be considered.'
                + '\n⦁ No template of codes can be used. You have to type every required header files too, and maintain proper input output as per problem statement.'
                + '\nThe decision of the coordinators will be final.'


        },
        {
            id: '2',
            event: 'Chess',
            head1: 'Contact:',
            para1: '+91 9038741205\n+91 7278454389'
        },
        {
            id: '3',
            event: 'Math-Mania',
            head1: 'Contact:',
            para1: '+91 9038741205\n+91 7278454389'
        },
        {
            id: '4',
            event: 'Code-2-Duo',
            head1: 'Contact:',
            para1: '+91 9038741205\n+91 7278454389'
        },
    ];

    return (
        <div className='p-3' style={{ color: 'white' }}>
            <h3 style={{ textAlign: 'center' }}>{data[obj.id].event}</h3>
            <hr style={{ height: '5px', color: 'white' }} />
            <h3>{data[obj.id].head1}</h3>
            <p>{data[obj.id].para1}</p>
            <h3>{data[obj.id].head2}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para2}</pre>
            <h3>{data[obj.id].head3}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para3}</pre>
        </div>
    )
}
