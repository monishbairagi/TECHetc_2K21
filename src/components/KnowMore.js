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
                + '\nThe decision of the coordinators will be final.',
            head4: 'CONTEST ON:',
            para4: 'Platform: Google Form & Google Meet.',
            head5: 'TEAM DETAILS:',
            para5: 'CODE RESTYLE is an individual event.',
            head6: 'ELIGIBILITY:',
            para6: 'All team members should have proper College ID card on them, and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.',
            head7: 'REGISTRATION FEES:',
            para7: 'No extra registration fee needed. A one-time registration at the main desk is all that is required.',
            head8: 'STUDENT CO-ORDINATORS:',
            para8: '• Mohibul Aktar Mollah (9851995587)'
                + '\n• Subhayu Sengupta (9038412331)'
                + '\n• Koulik Das (7003114698)'
                + '\n• Subhrangshu Muhury (7872511397)'
                + '\n• Sayan Sen (8240535769)'
                + '\n• Krishanu Chinya (8670176360)'
        },
        {
            id: '2',
            event: 'CODE-2-DUO',
            head1: 'ABOUT CODE-2-DUO:',
            para1: 'CODE-2-DUO is the completely revamped coding event of TECHETC 2k21 and will be an awesome platform to hone your programming and problem-solving skills over 2 grueling rounds of solid coding action.'
                + 'If you feel the burning desire in yourself to code, and want to prove yourselves to be among the best, come join us and code your way to glory!',
            head2: 'CONTEST DETAILS:',
            para2: 'CODE-2-DUO will be spread over 2 rounds, both purely coding rounds, consisting of problems testing your algorithmic and problem-solving skills. The rounds are as follows:'
                + '\n    Round 1 (Prelims): 4 problems ranging from very easy to medium level questions. Time-1 hour'
                + '\n    Round 2 (Finals): 4 problems ranging from medium to hard level. Time-1 hour.'
                + '\n Note: More rounds may get included based on number of participants.'
                + '\n      The rank list will be IOI Style. Ranking will be decided on time elapsed from start of competition to time at which submission is successful. Read about it here:(https://www.codechef.com/rankings#ACMStyleRanklist)',
            head3: 'General instructions:',
            para3: '• Since it is an online contest, start time cannot be manipulated as it has to be to set before-hand.'
                + '\n• It will be conducted over Google meet whose link will provided beforehand by the organizers. The participants need to join the meeting 15 minutes prior to the event with the registered email id.'
                + '\n• The participants will be needed to turn on their camera and mic throughout the competition.'
                + '\n• No team can open any tab on the browser other than HackerRank. Breaking this rule will result in disqualification. Also, if any team is caught researching about the question online (including looking at your own past submissions to problems other than those provided), or cheating, or communicating with other teams during the contest, involved team(s) will be disqualified. The decision of the coordinators will be final.',
            head4: 'Rules for Round 1 (Prelims):',
            para4: '• Since it is an online contest, start time cannot be manipulated as it has to be to set before-hand.'
                + '\n• Round 1 will have 4 problems, ranging from very easy to medium difficulty.'
                + '\n• Please follow proper input/output format as provided in the questions.'
                + '\n• Time duration will be 1 hour.'
                + '\n• Top 25% teams will move to next round (can be altered if required).',
            head5: 'Rules for Round 2 (Finals):',
            para5: '• Since it is an online contest, start time cannot be manipulated as it has to be to set before-hand.'
                + '\n• Since Round 2 will also be an online contest, start time cannot be manipulated as it has to be to set before-hand. Selected teams may wait in the google meeting itself after the 1st contest. They must report at least 15 minutes before the contest.'
                + '\n• Round 2 will have 4 problems, ranging from medium to hard difficulty.'
                + '\n• Time duration will be 1 hour.',
            head6: 'ENVIRONMENT:',
            para6: 'Both the rounds will be hosted on HackerRank (www.hackerrank.com) as private/closed contests, of which the link will be shared on-site right before the contest.'
                + '\n Languages allowed:  C / C++ / JAVA / PYTHON'
                + '\n OS:  Linux, Windows'
                + '\n Browser:   Chrome, Firefox, Edge'
                + '\n Compilers:  Online HackerRank IDE.',
            head7: 'TEAM DETAILS:',
            para7: 'CODE-2-DUO is a team event, with each team having two members. Any one member must have an account in hackerRank. If you don’t have one, get yourself an account at <link>www.hackerrank.com.</link>'
                + '\n Note: Only one of the participants per group will be able to access the hackerRank ide, who will also have to share the screen. Participants can discuss between themselves.',
            head8: 'REGISTRATION FEES:',
            para8: 'No extra registration fee needed. A one-time registration at the main desk is all that is required.',
            head9: 'STUDENT CO-ORDINATORS:',
            para9: '•  Shaswata Das (7076974888)'
                + '\n•  Aishik Sikdar (8444857345)'
                + '\n•  Aniket Chakraborty (7685848451)'
                + '\n•  Anindya Sarkar (8240954820)'
                + '\n•  Koushik Chandra Das (9547318203)'
                + '\n•  Monish Kumar Bairagi (9038741205)'

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
            <h3>{data[obj.id].head4}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para4}</pre>
            <h3>{data[obj.id].head5}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para5}</pre>
            <h3>{data[obj.id].head6}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para6}</pre>
            <h3>{data[obj.id].head7}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para7}</pre>
            <h3>{data[obj.id].head8}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para8}</pre>
            <h3>{data[obj.id].head9}</h3>
            <pre style={{ whiteSpace: 'break-spaces' }}>{data[obj.id].para9}</pre>
        </div>
    )
}
