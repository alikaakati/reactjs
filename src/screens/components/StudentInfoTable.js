import React from 'react';

const StudentInfoTable = (props) =>{
    return(

    <table class="home-profiletable "id="profiletable">
    <tr>
      <th>Student ID</th>
      <td>{props.student.StudentID}</td>
      <th>Application ID</th>
      <td>{props.student.ApplicationID}</td>
      <th>Major</th>
      <td>{props.student.majorName}</td>
    </tr>
    <tr>
      <th>Student Name</th>
      <td>{props.student.studentName}</td>
      <th>Base Campus</th>
      <td>{props.student.BaseCampus}</td>
      <th>Blocked</th>
      <td>{props.student.blocked ? "Yes" : "No"}</td>
    </tr>
    
    </table>
    );
}
export default StudentInfoTable