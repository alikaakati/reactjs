import React, { useEffect , useState } from 'react';
import { getGPAs } from '../functions/apiFunctions';
const GPAtable = () =>{
    
    const [GPAs, setGPAs] = useState([]);
    useEffect(() => {
        getGPAs(setGPAs);
    }, [])
    if(GPAs.length > 0){

        return(
            <table id="home-gpatable" class="home-gpatable">
                <tr>
                  <th>Semester</th>
                  <th>GPA</th>
                  <th>Cumulative GPA</th>
                  <th>Nb of Credits</th>
                  <th>Probation</th>
                </tr>
    
            {GPAs.map((val , key) =>{
            return(
                <tr>
                    <td>{val.SemesterName}</td>
                    <td>{val.GPAvalue}</td>
                    <td>{val.cumulativeGPA}</td>
                    <td>{val.Credits}</td>
                    <td>{val.Probation}</td>
                </tr>
            );     
            })}
          </table>
          
    
        );
    }
    else{
        return(
            <h1>
                No data found
            </h1>
        );
    }
}
export default GPAtable