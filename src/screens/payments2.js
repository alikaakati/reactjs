import React, { useState , useEffect , useRef } from 'react';
import Navbar from './components/Navbar';
import { getSemesterOptions , getPayments, checkForInfo } from './functions/apiFunctions';
import "../css/payments.css"
import { close , open , togglePaymentsTable } from './functions/designFunctions';
import { useHistory } from 'react-router-dom';

const Payments = () =>{
    let history = useHistory();
    const [Semesters, setSemesters] = useState([])
    const [Semester, setSemester] = useState(0);
    const [Payments, setPayments] = useState(0);
    const [TotalPaid, setTotalPaid] = useState(0);
    const [TotalUnpaid, setTotalUnpaid] = useState(0);
    const [TotalPenalties, setTotalPenalties] = useState(0);
    const nav = useRef(0);
    const openButton = useRef(0);
    const toggleTable = useRef(0);
    const paymentsTable = useRef(0);
    useEffect(() => {
        checkForInfo(history);

        getSemesterOptions(setSemesters , setSemester);
        getPayments(Semester , setPayments , setTotalPaid , setTotalUnpaid , setTotalPenalties);
        console.log(Payments);
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

                <div class="payments-container" >
                    <div class="payments-schedulehead">
                            My Payments
                    </div>
                    <div class="payments-highercontainer">
                        <div class="payments-selectlist" id="selectlist" style={{justifyContent:"center",alignItems:"center" , marginTop:15}} >
                            <p>Semester</p>
                            <select name="" id="" onChange={e =>{ 
                                setSemester(e.target.value)
                            }}>
                                {Semesters.map((val , key) =>{
                                    return(
                                        <option value={val.SemesterID}>{val.SemesterName}</option>
                                    );
                                })}
                            </select>
                            <button onClick={() =>{
                                getPayments(Semester , setPayments);
                            }}>List</button>
                        </div>
                        <div class="payments-gpa" style={{marginTop:10}}>
                            <div class="payments-headinfo"><p>{Semester}</p></div>
                            <div class="payments-headicons"><a href="javascript:void(0)"><i id="iconsec" class="far fa-times" ref={toggleTable} onClick={() => togglePaymentsTable(toggleTable , paymentsTable)}></i></a></div>
                        </div>
                        <div class="payments-lowercontainer">

                            <div class="payments-tableContainer">
                                <table ref={paymentsTable}>
                                <tr>
                                    <td>System Ref</td>
                                    <td>Bank Ref</td>
                                    <td>Amount(L.L)</td>
                                    <td>Creation Date</td>
                                    <td>Due Date</td>
                                    <td>Payment Date</td>
                                    <td>Penalty(L.L)</td>
                                    <td>Paid At</td>
                                    <td>Type</td>
                                </tr>
                                {Payments.length > 0 && Payments.map((val , key) =>{
                                    return(
                                        <tr>
                                            <td>{val.SystemRef}</td>
                                            <td>{val.BankRef}</td>
                                            <td>{val.Amount}</td>
                                            <td>{val.CreationDate}</td>
                                            <td>{val.DueDate}</td>
                                            <td>{val.PaymentDate}</td>
                                            <td>{val.Penalty}</td>
                                            <td>{val.PaidAt}</td>
                                            <td>{val.Type}</td>
                                        </tr>
                                    );
                                })}
                                </table>
                            </div>
                        </div>


                        <div class="payments-lowercontainer lower2">

                            <div class="payments-tableContainer">

                                    <table id="paymentpay">
                                            <tr>
                                                <th>TOTAL PAID</th>
                                                <td>{TotalPaid}</td>
                                            </tr>
                                            <tr>
                                                <th>TOTAL UNPAID</th>
                                                <td>{TotalUnpaid}</td>
                                            </tr>
                                            <tr>
                                                <th>TOTAL PENALTIES</th>
                                                <td>{TotalPenalties}</td>
                                            </tr>

                                    </table>
                                </div>
                        </div>
















                    </div>

                </div>
            </body>
        </html>
    );
}
export default Payments