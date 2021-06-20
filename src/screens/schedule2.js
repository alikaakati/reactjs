import React, { useState , useEffect , useRef } from 'react';
import Navbar from './components/Navbar';
import { checkForInfo, getSchedule } from './functions/apiFunctions';
import "../css/payments.css"
import { close , open , togglePaymentsTable } from './functions/designFunctions';
import { useHistory } from 'react-router-dom';

const Schedule = () =>{
    const [schedule, setSchedule] = useState([])
    const nav = useRef(0);
    const openButton = useRef(0);
    const toggleTable = useRef(0);
    const paymentsTable = useRef(0);
    const StudentName = localStorage.getItem("StudentName");
    const StudentID = localStorage.getItem("StudentID");
    let history = useHistory();

    useEffect(() => {
        checkForInfo(history)

        getSchedule(setSchedule);
    }, [])
    return(
        <html>
        <head>
            <title>Enrolled</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" type="text/css" href="./payment.css" />
            <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
        </head>
            <body class="payments-body" style={{minHeight:"100vh"}}>
                <div id="mySidenav" class="payments-sidenav" ref={nav}>
                    <a  class="payments-closebtn" onClick = {() => close(nav , openButton)}>&times;</a>
                    <Navbar />
                </div>
                <div id="rightparthead" class="payments-rightparthead" ref={openButton} onClick={() => open(nav, openButton)}>
                    <span class="payments-openmenu" class ="payments-openmenu" >&#9776;</span>
                </div>
                <div class="payments-gpa" style={{marginTop:10}}>
                    <div class="payments-headinfo"><p>Curriculum</p></div>
                    <div class="payments-headicons"><a href="javascript:void(0)"><i id="iconsec" class="far fa-times" ref={toggleTable} onClick={() => togglePaymentsTable(toggleTable , paymentsTable)}></i></a></div>
                </div>
                <div class="payments-gpa" style={{display:'flex',justifyContent:"center",alignItems:"center" , marginTop:10}}>
                    <p>{StudentName} - {StudentID}</p>
                </div>
                <div class="payments-lowercontainer"> 
                    <div class="payments-tableContainer" ref={paymentsTable}>                    
                        <table id="table">
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Course Name</th>
                                <th>Sec</th>
                                <th>Instructor</th>
                                <th>Schedule</th>
                                <th>Room</th>
                                <th>Campus</th>
                            </tr>
                            {schedule.length > 0 && schedule.map((val , key) =>{
                                return(
                                    <tr>
                                        <td></td>
                                        <td>{val.CourseCode}</td>
                                        <td>{val.CourseName}</td>
                                        <td>{val.Section}</td>
                                        <td>{val.InstructorName}</td>
                                        <td>{val.Time}</td>
                                        <td>{val.CourseRoom}</td>
                                        <td>{val.CourseCampus}</td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>   
                </div>
            </body>
        </html>
                
    );
}
export default Schedule