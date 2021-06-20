import React , {useState , useEffect} from 'react';
import { getCourseOptions , registerCourse } from '../functions/apiFunctions';

const CourseOptions = () =>{

    const [options, setOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState(0);
    const [statusMsg, setStatusMsg] = useState("")
    useEffect(() => {
        getCourseOptions(setOptions , setCurrentOption);
    }, [])
    return(
    <div>
        {/* CourseOptions */}
        <select name="" id="" onChange={e =>{ 
            console.log(e.target.value);
            setCurrentOption(e.target.value)
        }}>
            {options.map((val , key) =>{
                return(
                    <option value={val.CourseID}>{val.CourseName}</option>
                );
            })}
        </select>
        <button onClick = {() => registerCourse(currentOption , setStatusMsg)}>+</button>
        <p>
        {statusMsg}
        </p>
    </div>


    );
}
export default CourseOptions;