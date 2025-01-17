import React from 'react'
import { Modal } from 'react-bootstrap'

export const KnowMore = (obj) => {

    let data = [
        {
            id: '1',
            event: '<CODE/RESTYLE>',
            head1: 'ABOUT CODE-RESTYLE:',
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
            para7: 'CODE-2-DUO is a team event, with each team having two members. Any one member must have an account in hackerRank. If you don’t have one, get yourself an account at www.hackerrank.com.'
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
            event: 'CROSS-WORD',
            head2: 'Rules for CROSS-WORD:',
            para2: '\nContestants can use PC, laptop, smart phone with internet connectivity.'
                + '\n•  Link for Google form with timer will be given to the crossword whatsapp group which will be formed after the registration process completes.'
                + '\n•  Once the contestant clicks the link, time starts counting. You have to fill up your name , college name , stream, year and phone no. '
                + '\n•  Depending on the stream chosen, you will be directed to that particular crossword link. When clicked, crossword problem will appear.'
                + '\n•  A maximum time limit of 30 mins will be provided.'
                + '\n•  Contestant requires to solve as much as and as fast as he/she can within that time limit. '
                + '\n•  Score will be awarded on the basis of correct answers and overall time taken.'
                + '\n•  The solved page has to be saved as pdf using Print Menu and that pdf file has to be uploaded through upload button. '
                + '\n•  In case of tie, number of correct answers and wrong answers will be considered.'
                + '\n•  You must do the following three steps before leave'
                + '\n      1.  Uploading  solved pdf file'
                + '\n      2.  Submitting  the google form and'
                + '\n      3.  Submitting timer window. '
                + '\n   Otherwise you will be disqualified.'
                + '\n\n•  When successfully submitted, a massage showing “ Test Completed” will appear.'
                + '\n•  Judges’ decision is final. '
                + '\n•  For your easy understanding a Demo Video link will be shared in whatsapp group.',
            head3: 'Teacher Coordinators',
            para3: '•  Anikendu Maitra(EE) (8240139436)'
                + '\n•  Samir Ghosh( ME) 91632 15815'
                + '\n•  Piyali Das (CE)9830715351 '
                + '\n•  Sudipta Kangshabanik (CE)9163162845'
                + '\n•  Manish kr Singh (ECE)  90075 66269'
                + '\n•  Sandeep Bhoumik(CSE) 9231510404 '
                + '\n•  Shirshendu Hore(CSE)9836372171 ',
            head4: 'Student Coordinators',
            para4: '•  Suvom Ghosh (7585861161) (CE)'
                + '\n•  Saptarshi Bhowmick (7074908901)  (EE)'
                + '\n•  Sushant Sharma (6291839195) (EE) '
                + '\n•  Rishav Chakraborty (7029605228) (EE)',
        },
        {
            id: '4',
            event: 'CIRCUI-T-RICKS',
            head2: 'Rules for CIRCUI-T-RICKS:',
            para2: '\nContestants must use Computer with internet connectivity.'
                + '\n•  PSIM, a circuit simulation software has to be downloaded and installed well in advance. '
                + '\n•  For downloading  PSIM  software, a link will be shared in the whatsapp group which will be formed after the registration process completes.'
                + '\n•  Competition will be conducted through google form. '

                + '\n•  In the preliminary round, common problem will be given and you have to design the circuit and simulate the same according to the problem given.'


                + '\n•  You require to show the results by uploading the result files or the screen shot of required output. '
                + '\n•  A maximum time limit of 30 mins will be provided.'
                + '\n•  Score will be awarded on the basis of following parameters '
                + '\n•  Suitable components to design the circuit'
                + '\n•  Neatness and cleanliness of simulated circuit '
                + '\n•  Its proper functioning giving proper outputs.'
                + '\n•  Time taken to complete the problem.'

                + '\n•  In the final round, the time given will be 45 mins and the score will be awarded in the same way. '
                + '\n•  If the number of contestants is found to be less than ten, there will be no preliminary round. '
                + '\n•  You must do the following three steps before leave'
                + '\n       1.  Uploading  all pdf or image files'
                + '\n       2.  Submitting  the google form and '
                + '\n       3.  Submitting timer window. '
                + '\n\n   Otherwise you will be disqualified.'

                + '\n•  When successfully submitted, a massage showing “ Test Completed” will appear.'
                + '\n•  Judges’ decision is final.'
                + '\n•  For your easy understanding a Demo Video link will be shared in whatsapp group.',
            head3: 'Coordinators',
            para3: 'Chandan Jana (9434122509)',
            head4: 'Student Coordinators',
            para4: '•  Hritama Sinha (7908705318) (EE)'
                + '\n•  Sourav Kundu (7890939278)  (EE)'
                + '\n•  Subhodeep Das (9804715963) (EE) ',
        },
        {
            id: '5',
            event: 'CIVIL-O-PEDIA',
            head2: 'General Rules for CIVIL-O-PEDIA (2K21):',
            para2: '\n1. Participants should form a group of two students only. '
                + '\n2. The event carries prizes for 1st, 2nd & 3rd place holders only. '
                + '\n3. If more than six teams register, all of them need to appear for an MCQ-based screening test via a google form.'
                + '\n4. One member from each team shall submit the response to the google form.'
                + '\n5. Best six teams from the screening test will take part in the final rounds of Civil-O-Pedia.'
                + '\n6. The qualifying teams for the final rounds will be primarily selected based on obtained marks in screening. In the case of a tie, submission time will be applied as the second layer filter.'
                + '\n7. In case of a conflict regarding a question, the decision of the event coordinators will be final. '
                + '\n8. The final of Civil-O-Pedia is composed of 4 rounds of quizzing. Details of rounds are as follows:'
                + '\n        Round 1: General Civil Engineering '
                + '\n        Round 2: Audio & Visual '
                + '\n        Round 3: Specialization'
                + '\n        Round 4: Mixed Bag '
                + '\n9. The distinct rules of each round will be deliberated in detail before the round by the quiz master.'
                + '\n10. Among six participating teams, two teams will be eliminated after Round-2. In case of a tie between two or more teams, further provision of tie-breaker will be proclaimed for the next round.'
                + '\n\nThe rules are subject to minor changes (if needed) which shall be duly informed to the participants.'
                + '\n\nFor any further query, contact 9831366180/ 8961115386.',
            head3: 'Coordinator',
            para3: 'Arpita Chattopadhyay, 9831396937'
                + '\nRajdip Paul, 9831366180'
                + '\nTanumoy ghosh, 8961115386'
                + '\nArpita Das, 9831356955'
                + '\nSomnath Dey, 9804958885'
        },
        {
            id: '6',
            event: 'INSTA-PLAN',
            head2: 'INSTA-PLAN GENERAL INFORMATION:',
            para2: '\n1. A plot area with random dimensions will be given.'
                + '\n2. Road alignment and North direction will be provided.'
                + '\n3. Built up area with proper clearance have to be determined. '
                + '\n4. A Line Plan is to be prepared to the given scale with proper orientation as per standard norms.'
                + '\n5. Judgment will be based on the most economic utilization of built up area satisfying the standard norms of planning.'
                + '\n6. Drawing must be done in A-4 size drawing sheet using pencil and necessary drawing equipments. '
                + '\n7. Maximum two participants are allowed in a group.'
                + '\n8. Maximum duration of the event will be one hour.'
                + '\n9. In case of ‘Tie’, preference will be given to the group doing early submission.'
                + '\n10. Decision of the judges will be final.',
            head3: 'Coordinator',
            para3: 'Shibasish Deb, 9836057817'
                + '\nJayanta Bandyopadhyay, 9433555936'
                + '\nSudipta Kansabanik, 9163162845',
        },
        {
            id: '7',
            event: 'μ-MAT',
            head1: 'About μ-MAT:',
            para1: 'This contest is aimed at testing the knowledge about 8085μP with peripheral devices and their programming skills using Assembly Language Programming (ALP).'
                + '\nAt the same time the knowledge about MATLAB and the programming skills will be tested.',
            para2: '•  The contest would consist of Three Rounds.'
                + '\n\n•  Each of the round would be Elimination Round. ',
            head3: 'Round 1 (MCQ):-',
            para3: ' This round will consist of a set of 20 MCQs (based on 8085μP with its peripheral devices and MATLAB). For each wrong answer, 0.25 marks will be deducted. ',
            head4: 'Round 2 (Coding in 8085 μP with its peripheral devices):- ',
            para4: ' In this round a set of problems (programs) will be given, which need to be solved using 8085 μP instruction set and assembly language programming concepts (ALP). Suitable 8085 Simulator may be used. The solution with output of the given programs are needed to be uploaded through the given link. As per online submission using provided link, the solutions will be checked and evaluated. During evaluation, the event coordinator or evaluator will interact with the participant.',
            head5: 'Round 3 (Coding in MATLAB):- ',
            para5: ' This round will be related to MATLAB codes. A set of problems (programs) will be given which need to be solved or debugged in MATLAB platform. For each wrong answer, 0.5 marks will be deducted. Suitable MATLAB Simulator may be used. The solution with output of the given programs are needed to be uploaded through the given link. As per online submission using provided link, the solutions will be checked and evaluated. During evaluation, the event coordinator or evaluator will interact with the participant.',
            head6: 'Important Points: ',
            para6: '1.  Organizers will not be responsible with any system, network and internet related issues.'
                + '\n2.  Participants have to use their own system, network and internet.'
                + '\n3.  Judgement of event coordinators will be final.	'
                + '\n4.  Every round is time-dependent. Each round will start and end as per scheduled time. No extra time will be given.'
                + '\n5.  If there is any “TIE”, recorded online response with minimum time and maximum correct answer(s) will be considered for “TIE Breaker”. Marks obtained in the 1st Round may also be considered for “RE- TIE BREAKER”.'
                + '\n6.  After Round 1, ten (10) participants (maximum) will sail through to Round 2 and in the Final Round or Round 3, five (5) participants (maximum) can compete. '
                + '\n7.  For Round 2, suitable 8085 Simulator may be used. '
                + '\n8.  For Round 3, suitable MATLAB Simulator may be used.'
                + '\n9.  In Round 2 and Round 3, participants have to join using Google Meet and during the event time, they need to put the camera “ON” and interact with the evaluator.'
                + '\n10.  Any rule or instruction is subjected to change as per requirement.',
            head7: 'Coordinators ( Coding using 8085 μP ):',
            para7: 'Mr. Jagadish Bhattacharya'
                + '\nM: +91 9830602422'
                + '\nEmail: jagadish.bhattacharya@hetc.ac.in'
                + '\n\nMr. Subhajit Roy'
                + '\nM: +91 7980083295'
                + '\nEmail:subhajit.roy@hetc.ac.in',
            head8: 'Coordinators ( Coding using MATLAB ):',
            para8: 'Mr. Subhojit Malik'
                + '\nM: +91 9830173510'
                + '\nEmail: subhojit.malik@hetc.ac.in'
                + '\n\nMr. Manish Kumar Singh'
                + '\nM: +91 9007566269'
                + '\nEmail:manish.kumar.singh@hetc.ac.in',
        },
        {
            id: '8',
            event: 'CIRCUITECH',
            head1: 'About CIRCUITECH:',
            para1: 'This contest is aimed at testing the knowledge about analog and digital electronics.',
            para2: '•  The contest would consist of Two Rounds.'
                + '\n\n•  First round would be Elimination Round. ',
            head3: 'Round 1 (MCQ):-',
            para3: ' This round will be conducted in Google Form and it consists of a set of 30 MCQ’s (based on analog and digital electronics). No negative marking is there in this round.',
            head4: 'Round 2 (Circuit design):- ',
            para4: ' In this round a circuit (analog/ digital) will be given, which need to be implemented using Tinkercad (https://www.tinkercad.com/) and show the output in Google Meet whose link will be shared with the selected participants before starting of the round. Correct output in minimum time will get maximum marks.',
            head6: 'Important Points: ',
            para6: '1.  Organizers will not be responsible with any system, network and internet related issues.'
                + '\n2.  Participants have to use their own system, network and internet.'
                + '\n3.  Judgement of event coordinators will be final.	'
                + '\n4.  Every round is time-dependent. Each round will start and end as per scheduled time. No extra time will be given.'
                + '\n5.  If there is any “TIE”, recorded online response with minimum time and maximum correct answer(s) will be considered for “TIE Breaker”. '
                + '\n    Marks obtained in the 1st Round may also be considered for “TIE BREAKER” in 2nd Round.'
                + '\n6.  After Round 1, ten (10) participants (maximum) will sail through to Round 2 and in the Final Round or Round 3, five (5) participants (maximum) can compete. ',
            head7: 'Coordinators:',
            para7: 'Mrs. Swagata Choudhury'
                + '\nM: +91 9433122291'
                + '\nEmail: swagata.mallik@hetc.ac.in'
                + '\n\nMr. Swarup Samanta'
                + '\nM: +91 7003557478'
                + '\nEmail: swarup.samanta@hetc.ac.in'
                + '\n\nMrs. Bidisha Sengupta'
                + '\nM: +91 9062373081'
                + '\nEmail: bidisha.sen.gupta@hetc.ac.in'
                + '\n\nMrs. Shyamali Gayen'
                + '\nM: +91 9804844614'
                + '\nEmail: shyamali.gayen@hetc.ac.in',
        },
        {
            id: '9',
            event: 'HUNT-FOR-FUN',
            head1: 'About HUNT-FOR-FUN:',
            para1: 'Do you think you have what it takes to solve mysteries? Have you felt comfortable dreaming and fantasizing yourselves in a detective-s hat? Gear up as TECHetc 2K21 brings to you the event of Hunt For Fun, where players or treasure hunters search for answers to the questions. Players use clues and hints given along with the question to get the answer and progress though the hunt unlocking greater treasures every time. More thrill, more excitement, more madness, more treasures!',
            head3: 'Rules:-',
            para3: '1)  Only team participation is allowed. Each team must contain only 2 members.'
                + '\n2)  The event consists of 4 rounds and the contestants have to crack each clue of that round before progressing to the next round.'
                + '\n3)  From the 1st round only 12 groups will be selected for the next round.'
                + '\n4)  Time allotted for 1st round is 10 minutes post which the contestants will be eliminated.'
                + '\n5)  Judges/Coordinators reserve the right to change timings, rules of the event which will be notified at the latest to all the participants. Decision of the jury panel will be final and binding.',
            head4: 'Platform will be used:-',
            para4: 'Google Meet',
            head5: 'Eligibility:',
            para5: 'All team members should have proper College ID card on them and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.',
            head6: 'Coordinators:',
            para6: '• Saurav Chowdhury: +91 9331614668'
                + '\n• Pritam Biswas: +91 9038572990',

        },
        {
            id: '10',
            event: 'MATHMANIA (College Level)',
            head1: 'About MATHMANIA (College Level):',
            para1: 'Do numbers fascinate you? Are you a Maths enthusiast? Did you enjoy those Maths classes in your school? Well, Mathmania brings you the perfect opportunity to revisit your school days and test how much of it do you still remember? Well, are you ready for the challenge??? ',
            head3: 'Rules:-',
            para3: 'There will be 30 MCQ questions.'
                + '\n\nThe participants  will  be  given  maximum 30  minutes  to  solve  the  paper'
                + '\n\n•  There will be no negative marking on wrong response.'
                + '\n•  Scoring will be based on correct solution.'
                + '\n•  In case of tie in scores, submission time will be considered.'
                + '\n\nAny or all of the rules are subject to change at any point of time.'
                + '\n\nThe decision of the coordinators will be final.',
            head4: 'Platform:',
            para4: 'Google Form',
            head5: 'TEAM DETAILS:',
            para5: 'MATHMANIA is an individual event.',
            head6: 'ELIGIBILITY:',
            para6: 'All participants should have proper ID card for proof of date of birth, and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.',
            head7: 'CO-ORDINATORS:',
            para7: '• Dr. Rajesh Patra (8961855689)'
                + '\n• Mrs. Sudeshna Banerjee (8240326368)'
        },
        {
            id: '11',
            event: 'LOGI-CAD',
            head1: 'About LOGI-CAD:',
            para1: 'Cad-Logic tests the expertise of the contestants in computer aided drafting and design and is based specifically on the software AutoCAD. As we have been forced to organize the event online the participants will only need to write the sequential steps/ commands required to model the given 2D/ 3D drawing/ object within a stipulated time. No drawing/ modelling needs to be done or submitted actually. The evaluation will be based on the correctness of the sequential steps/ commands submitted, their relative brevity and the time taken to submit them.',
            head3: 'Event rules:',
            para3: '1.  Contestants can use PC, laptop or smartphone with internet connectivity.'
                + '\n2.  Competition will be conducted through Google form.'
                + '\n3.  Contestants must have good fundamental knowledge of Autocad.'
                + '\n4.  Link for Google form with timer will be given to the Logi-CAD whatsapp group which will be formed after the registration process is completed.'
                + '\n5.  Once the contestant clicks the link, time starts counting. You have to fill up your name, college name, stream, year and phone no.'
                + '\n6.  Contestants have to write down the sequence of steps logically to complete the required drawing in AutoCAD.'
                + '\n7.  No CAD file is required to submit. Only the logical sequences are required.'
                + '\n8.  Logic of the drawing must be based on AutoCAD, no other CAD software logic will be entertained.'
                + '\n9.  Each step must be written using proper commands and or tools.'
                + '\n10.  A maximum time limit of 30 mins will be provided.'
                + '\n11.  Contestants are required to describe/ generate the drawing using the minimum number of feasible steps as fast as he/ she can within that time limit. '
                + '\n12.  Score will be awarded on the basis of correct logical steps and overall time taken.'
                + '\n13.  Contestants have to write the steps sequentially in the Google form only'
                + '\n14.  No sketch or rough copy is needed for the given problem.'
                + '\n15.  Participants must submit the google form before leaving the page.'
                + '\n16.  After successful submission, an acknowledgement  message will appear on the screen'
                + '\n17.  The decision of judges is final and binding.',
            head4: 'Platform will be used:',
            para4: 'Google Form along with the AutoCAD',
            head5: 'Number of team members:',
            para5: 'Individual.',
            head6: 'Coordinator:',
            para6: 'Sandip Basu  9477415588',
        },
        {
            id: '12',
            event: '8-BALL-POOL',
            head3: '8-BALL-POOL Event Rules:',
            para3: '•  Opponent will be selected by lottery system.'
                + '\n•  Unique id must be registered with IGN(In Game Name).'
                + '\n•  MOD/Hack version is not allowed.'
                + '\n•  The first round of the event will be played on the London Board and the board increments to the next one as the rounds progress.'
                + '\n•  Both the players will have to use the same cue (Beginner Cue) and changing the cue will result in disqualification.'
                + '\n•  Spin is allowed.'
                + '\n•  Leaving the game leads to loss.'
                + '\n•  No comments/Messages shall be sent to opponent during the game.'
                + '\n•  Any unfair gameplay/discrepancy will result to disqualification.'
                + '\n•  Decisions can be altered by coordinators if the situation requires so.'
                + '\n•  All players must have enough coins (20k+) for the respective board before the start of each round.'
                + '\n•  Each player will have to share their screen in google meet during each game.'
                + '\n•  Each player will be notified about their opponents just before the match and must add their unique id before the conduction of match. '
                + '\n•  The tournament is a knock-out one.'
                + '\n•  All registered players will be added to a whatsapp group, and winner of each game must share the Winning screenshot in the group.'
                + '\n•  Device or internet related issues will not be considered after the match starts.',
            head6: 'Coordinator:',
            para6: 'Sayan Marik +91 6290791520'
                + '\nTapas Saha +91 7001293856',
        },
        {
            id: '13',
            event: 'CHESS',
            para1: '(Berserk is allowed at your own risk)',
            head2: 'How are scores calculated?',
            para2: '\nA win has a base score of 2 points, a draw 1 point, and a loss is worth no points.'
                + '\n\nIf you win two games consecutively you will start a double point streak, represented by a flame icon.'
                + '\n\nThe following games will continue to be worth double points until you fail to win a game.'
                + '\n\nThat is, a win will be worth 4 points, a draw 2 points, and a loss will still not award any points.'
                + '\n\nFor example, two wins followed by a draw will be worth 6 points: 2 + 2 + (2 x 1)',
            head3: 'Arena Berserk',
            para3: 'When a player clicks the Berserk button at the beginning of the game, they lose half of their clock time, but the win is worth one extra tournament point.'
                + '\n\nGoing Berserk in time controls with an increment also cancels the increment (1+2 is an exception, it gives 1+0).'
                + '\n\nBerserk is not available for games with zero initial time (0+1, 0+2).'
                + '\n\nBerserk only grants an extra point if you play at least 7 moves in the game.',
            head4: 'How is the winner decided?',
            para4: '\nThe player(s) with the most points at the conclusion of the tournaments set time limit will be announced winner(s).'
                + '\n\nWhen two or more players have the same number of points, the tournament performance is the tie break.',
            head5: 'How does the pairing work?',
            para5: '\nAt the beginning of the tournament, players are paired based on their rating.'
                + '\n\nAs soon as you finish a game, return to the tournament lobby: you will then be paired with a player close to your ranking. This ensures minimum wait time, however you may not face all other players in the tournament.'
                + '\n\nPlay fast and return to the lobby to play more games and win more points.',
            head6: 'How does it end?',
            para6: 'The tournament has a countdown clock. When it reaches zero, the tournament rankings are frozen, and the winner is announced. Games in progress must be finished, however they dont count for the tournament.',
            head7: 'Other important rules',
            para7: 'There is a countdown for your first move. Failing to make a move within this time will forfeit the game to your opponent.'
                + '\n\nDrawing the game within the first 10 moves will earn neither player any points.',
            head8: 'Draw streaks:',
            para8: 'When a player has consecutive draws in an arena, only the first draw will result in a point, or draws lasting more than 30 moves. The draw streak can only be broken by a win, not a loss or a draw.',
            head9: 'Coordinator:',
            para9: 'Sayan Marik +91 6290791520'
                + '\nTapas Saha +91 7001293856',
        },
        {
            id: '14',
            event: 'MATHMANIA (School Level)',
            head1: 'About MATHMANIA (School Level):',
            para1: 'Do numbers fascinate you? Are you a Maths enthusiast? Did you enjoy those Maths classes in your school? Well, Mathmania brings you the perfect opportunity to revisit your school days and test how much of it do you still remember? Well, are you ready for the challenge??? ',
            head3: 'Rules:-',
            para3: 'There will be 30 MCQ questions.'
                + '\n\nThe participants  will  be  given  maximum 30  minutes  to  solve  the  paper'
                + '\n\n•  There will be no negative marking on wrong response.'
                + '\n•  Scoring will be based on correct solution.'
                + '\n•  In case of tie in scores, submission time will be considered.'
                + '\n\nAny or all of the rules are subject to change at any point of time.'
                + '\n\nThe decision of the coordinators will be final.',
            head4: 'Platform:',
            para4: 'Google Form',
            head5: 'TEAM DETAILS:',
            para5: 'MATHMANIA is an individual event.',
            head6: 'ELIGIBILITY:',
            para6: 'All participants should have proper ID card for proof of date of birth, and should be able to produce the same in original when asked for verification, failing which they will not be allowed to participate. Each participant should be a student pursuing some field of study in college/university.',
            head7: 'CO-ORDINATORS:',
            para7: '• Dr. Rajesh Patra (8961855689)'
                + '\n• Mrs. Sudeshna Banerjee (8240326368)'
        },
        {
            id: '15',
            event: 'CHESS',
            para1: '(Berserk is allowed at your own risk)',
            head2: 'How are scores calculated?',
            para2: '\nA win has a base score of 2 points, a draw 1 point, and a loss is worth no points.'
                + '\n\nIf you win two games consecutively you will start a double point streak, represented by a flame icon.'
                + '\n\nThe following games will continue to be worth double points until you fail to win a game.'
                + '\n\nThat is, a win will be worth 4 points, a draw 2 points, and a loss will still not award any points.'
                + '\n\nFor example, two wins followed by a draw will be worth 6 points: 2 + 2 + (2 x 1)',
            head3: 'Arena Berserk',
            para3: 'When a player clicks the Berserk button at the beginning of the game, they lose half of their clock time, but the win is worth one extra tournament point.'
                + '\n\nGoing Berserk in time controls with an increment also cancels the increment (1+2 is an exception, it gives 1+0).'
                + '\n\nBerserk is not available for games with zero initial time (0+1, 0+2).'
                + '\n\nBerserk only grants an extra point if you play at least 7 moves in the game.',
            head4: 'How is the winner decided?',
            para4: '\nThe player(s) with the most points at the conclusion of the tournaments set time limit will be announced winner(s).'
                + '\n\nWhen two or more players have the same number of points, the tournament performance is the tie break.',
            head5: 'How does the pairing work?',
            para5: '\nAt the beginning of the tournament, players are paired based on their rating.'
                + '\n\nAs soon as you finish a game, return to the tournament lobby: you will then be paired with a player close to your ranking. This ensures minimum wait time, however you may not face all other players in the tournament.'
                + '\n\nPlay fast and return to the lobby to play more games and win more points.',
            head6: 'How does it end?',
            para6: 'The tournament has a countdown clock. When it reaches zero, the tournament rankings are frozen, and the winner is announced. Games in progress must be finished, however they dont count for the tournament.',
            head7: 'Other important rules',
            para7: 'There is a countdown for your first move. Failing to make a move within this time will forfeit the game to your opponent.'
                + '\n\nDrawing the game within the first 10 moves will earn neither player any points.',
            head8: 'Draw streaks:',
            para8: 'When a player has consecutive draws in an arena, only the first draw will result in a point, or draws lasting more than 30 moves. The draw streak can only be broken by a win, not a loss or a draw.',
            head9: 'Coordinator:',
            para9: 'Sayan Marik +91 6290791520'
                + '\nTapas Saha +91 7001293856',
        },
    ];

    let myData = data[obj.id];
    return (
        <>
            <div className='p-3' style={{ color: 'black' }}>
                {/* <h3 style={{ textAlign: 'center' }}>{myData.event}</h3> */}
                {/* <hr style={{ height: '5px', color: 'black' }} /> */}
                <h3>{myData.head1}</h3>
                <p style={{ fontFamily: "monospace" }}>{myData.para1}</p>
                <h3>{myData.head2}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para2}</pre>
                <h3>{myData.head3}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para3}</pre>
                <h3>{myData.head4}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para4}</pre>
                <h3>{myData.head5}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para5}</pre>
                <h3>{myData.head6}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para6}</pre>
                <h3>{myData.head7}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para7}</pre>
                <h3>{myData.head8}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para8}</pre>
                <h3>{myData.head9}</h3>
                <pre style={{ whiteSpace: 'break-spaces' }}>{myData.para9}</pre>
            </div>
        </>
    )
}