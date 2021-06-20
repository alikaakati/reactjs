import React, { useEffect, useState } from 'react';
import { getRegisteredCourses } from '../functions/apiFunctions';

const RegisteredCourses = () =>{
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        getRegisteredCourses(setCourses);
    }, [])
    if(courses.length > 0){
        return(
            <table id="table" >
    
                <tr>
    
                    <th>Course name</th>
    
                    <th>Instructor</th>
    
                    <th>Credits</th>
    
                    <th>Section</th>
                    <th>Days</th>
                    <th>Time</th>
    
                </tr>
                    {courses.map((val , key) =>{
                        return(
                            <tr key={key}>
                                <td>{val.CourseName}</td>
                                <td>{val.InstructorName}</td>
                                <td>{val.CourseCredits}</td>
                                <td>{val.Section}</td>
                                <td>{val.Days}</td>
                                <td>{val.Time}</td>
                            </tr>
                        );
                    })}
            </table>
        );
    }
    else{
        return(
            <table id="table" >
    
            <tr>

                <th>Course name</th>

                <th>Instructor</th>

                <th>Credits</th>

                <th>Section</th>
                <th>Days</th>
                <th>Time</th>

            </tr>
            </table>
        );
    }
}

export default RegisteredCourses;