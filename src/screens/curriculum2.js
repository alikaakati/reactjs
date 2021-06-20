import React, { useState , useEffect , useRef } from 'react';
import Navbar from './components/Navbar';
import { checkForInfo, getCurriculum } from './functions/apiFunctions';
import "../css/payments.css"
import { close , open , togglePayments2Table } from './functions/designFunctions';
import { useHistory } from 'react-router-dom';
const Curriculum = () =>{
    const [curriculum, setCurriculum] = useState([]);
    const nav = useRef(0);
    const openButton = useRef(0);
    const toggleTable = useRef(0);
    const paymentsTable = useRef(0);
    const paymentsTable2 = useRef(0);
    const paymentsTable3 = useRef(0);
    const StudentName = localStorage.getItem("StudentName");
    const StudentID = localStorage.getItem("StudentID");
    let history = useHistory();
    useEffect(() => {
        checkForInfo(history)
        getCurriculum(setCurriculum);
        console.log(curriculum);
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
            <body class="payments-body">
                <div id="mySidenav" class="payments-sidenav" ref={nav}>
                    <a  class="payments-closebtn" onClick = {() => close(nav , openButton)}>&times;</a>
                    <Navbar />
                </div>
                <div id="rightparthead" class="payments-rightparthead" ref={openButton} onClick={() => open(nav, openButton)}>
                    <span class="payments-openmenu" class ="payments-openmenu" >&#9776;</span>
                </div>
                <div class="payments-gpa" style={{marginTop:10}}>
                    <div class="payments-headinfo"><p>Curriculum</p></div>
                    <div class="payments-headicons"><a href="javascript:void(0)"><i id="iconsec" class="far fa-times" ref={toggleTable} onClick={() => togglePayments2Table(toggleTable , {paymentsTable , paymentsTable2 , paymentsTable3})}></i></a></div>
                </div>
                <div class="payments-gpa" style={{display:'flex',justifyContent:"center",alignItems:"center" , marginTop:10}}>
                    <p>{StudentName} - {StudentID}</p>
                </div>
                <div class="payments-lowercontainer">

                    <div class="payments-tableContainer">
                        <table ref={paymentsTable}>
                            <tr>
                                <th>#</th>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Course Type</th>
                                <th>Registered</th>
                                <th>Credits</th>
                            </tr>
                            <tr>
                                <td>Year 1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Fall' && val.Year == '1st Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}

                            <tr>
                                <td>SPRING</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Spring' && val.Year == '1st Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}


                            <tr>
                                <td>SUMMER</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Summer' && val.Year == '1st Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}

                        </table>

                    </div>
                    <div class="payments-tableContainer">
                        <table ref={paymentsTable2}>
                            <tr>
                                <th>#</th>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Course Type</th>
                                <th>Registered</th>
                                <th>Credits</th>
                            </tr>

                            <tr>
                                <td>Year 2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Fall' && val.Year == '2nd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}

                            <tr>
                                <td>SPRING</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Spring' && val.Year == '2nd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}


                            <tr>
                                <td>SUMMER</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Summer' && val.Year == '2nd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}





                        </table>
                        </div>
                        <div class="payments-tableContainer">

                        <table ref={paymentsTable3}>
                            <tr>
                                <th>#</th>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Course Type</th>
                                <th>Registered</th>
                                <th>Credits</th>
                            </tr>

                            <tr>
                                <td>Year 3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>FALL</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Fall' && val.Year == '3rd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}

                            <tr>
                                <td>SPRING</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Spring' && val.Year == '3rd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}


                            <tr>
                                <td>SUMMER</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            {curriculum.length > 0 && curriculum.map((val , key) =>{
                                if(val.Semester == 'Summer' && val.Year == '3rd Year'){
                                    return(
                                        <tr>
                                            <td></td>
                                            <td>{val.CourseCode}</td>
                                            <td>{val.CourseName}</td>
                                            <td>{val.CourseType}</td>
                                            <td>{val.Registered}</td>
                                            <td>{val.CourseCredits}</td>
                                        </tr>
                                    );
                                }
                            })}








                        </table>
                    </div>
                    </div>

            </body>
        </html>
    );
}
export default Curriculum;