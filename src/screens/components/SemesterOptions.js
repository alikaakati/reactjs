import React , {useState , useEffect} from 'react';
import { getSemesterOptions } from '../functions/apiFunctions';

const SemesterOptions = () =>{

    const [options, setOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState(0);
    useEffect(() => {
        getSemesterOptions(setOptions , setCurrentOption);
    }, [])
    if(options.length > 0){
        return(
        <div>
            <select name="" id="" onChange={e =>{ 
                console.log(e.target.value);
                setCurrentOption(e.target.value)
            }}>
                {options.map((val , key) =>{
                    return(
                        <option value={val.SemesterID}>{val.SemesterName}</option>
                    );
                })}
            </select>
        </div>
        );
    }
    else{
        return(
            <div><select></select></div>
        );
    }


}
export default SemesterOptions;