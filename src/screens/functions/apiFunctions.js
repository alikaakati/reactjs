import axios from 'axios';

const baseLink = 'http://192.168.0.105/umsmaster';



export const autoLogin = async(history) =>{
    const StudentName = localStorage.getItem('StudentName');
    const password = localStorage.getItem('password')
    if( StudentName && password ){
        await axios.post(`${baseLink}/login.php` , {
            username : StudentName , password
        }).then((resp) =>{
            if(resp.data.status == 'success'){
                history.replace("/Home");
            }
        })
    }
}



export const loginUser = async(username , password , setErrorMsg , browser) =>{
    localStorage.clear();
    setErrorMsg("");
    await axios.post(`${baseLink}/login.php` , {
        username , password
    }).then(async(resp) =>{
        if(resp.data.status == 'success'){
            localStorage.setItem('StudentID' , resp.data.StudentID);
            localStorage.setItem('password' , password);
            localStorage.setItem('StudentName' , resp.data.StudentName);
            localStorage.setItem('ApplicationID' , resp.data.ApplicationID);
            localStorage.setItem('BaseCampus' , resp.data.BaseCampus);
            localStorage.setItem('majorName' , resp.data.majorName);
            localStorage.setItem('Blocked' , resp.data.Blocked);
            browser.push('/Home');
        }
        else{
        }
    }).catch(async(err) =>{
        return await err.message;
    });
}

export const logoutUser = (browser) =>{
    localStorage.clear();
    browser.push('/Login');
}

export const getGPAs = async(setGPAs) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/getGPAs.php` , {
        StudentID
    }).then(async(resp) =>{
        setGPAs(resp.data)
    }).catch(async(err) =>{
        return await err.message;
    });
}
export const getRegisteredCourses = async(setCourses) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/getRegisteredCourses.php` , {
        StudentID
    }).then(async(resp) =>{
        if(resp.data != "No data found") setCourses(resp.data);
    }).catch(async(err) =>{
        return await err.message;
    });
}
export const getCourseOptions = async(setOptions , setCurrentOption) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/getCourseOptions.php` , {
        StudentID
    }).then(async(resp) =>{
        setOptions(resp.data)
        setCurrentOption(resp.data[0].CourseID)
    }).catch(async(err) =>{
        return await err.message;
    });
}
export const registerCourse = async(CourseID , setStatusMsg) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/registerCourse.php` , {
        StudentID , CourseID
    }).then(async(resp) =>{
        if(resp.data == 'success'){
            setStatusMsg('Successfully enrolled in course');
        }
        else setStatusMsg(resp.data);
    }).catch(async(err) =>{
        return await err.message;
    });
}

export const submitPetition = async(setStatusMsg , Content) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/submitPetition.php` , {
        SubmittedBy : StudentID , petitionContent : Content
    }).then(async(resp) =>{
        if(resp.data == 'success'){
            setStatusMsg('Successfully submitted petition');
        }
        else setStatusMsg(resp.data);
    }).catch(async(err) =>{
        return await err.message;
    });
}

export const getSemesterOptions = async(setOptions , setCurrentOption) =>{
    const StudentID = localStorage.getItem('StudentID');
    if(StudentID){
        await axios.post(`${baseLink}/getSemesterOptions.php`).then((resp) =>{ 
            if(resp.data != "No data found"){
                setOptions(resp.data);
                setCurrentOption(resp.data[0].SemesterName)
            }
        }).catch((err) => console.log(err.message));
    }
}

export const getPayments = async(SemesterID , setPayments , setTotalPaid , setTotalUnpaid , setTotalPenalties) =>{
    const StudentID = localStorage.getItem('StudentID');
    if(StudentID){
        await axios.post(`${baseLink}/getPayments.php` , {SemesterID , StudentID}).then((resp) =>{ 
            if(resp.data != "No data found"){
                setPayments(resp.data);
                let totalPaid = 0;
                let totalAmount = 0;
                let totalPenalties = 0;

                resp.data.forEach((p) =>{
                    totalPaid+= parseInt(p.Paid);
                    totalAmount += parseInt(p.Amount);
                    totalPenalties += parseInt(p.Penalty);

                });
                setTotalPaid(totalPaid);
                setTotalPenalties(totalPenalties);
                setTotalUnpaid((totalAmount - totalPaid) + totalPenalties);

            }
        }).catch((err) => console.log(err.message));
    }
}


export const getCurriculum = async(setCurriculum) =>{
    const StudentID = localStorage.getItem('StudentID');
    if(StudentID){
        await axios.post(`${baseLink}/getCurriculum.php` , {StudentID}).then((resp) =>{ 
            if(resp.data != "No data found"){
                console.log(resp.data);
                setCurriculum(resp.data);
            }
        }).catch((err) => console.log(err.message));
    }
}
export const getSchedule = async(setSchedule) =>{
    const StudentID = localStorage.getItem('StudentID');
    await axios.post(`${baseLink}/getSchedule.php` , {
        StudentID
    }).then(async(resp) =>{
        if(resp.data != "No data found") setSchedule(resp.data);
    }).catch(async(err) =>{
        return await err.message;
    });
}
export const changePass = (p1 , p2 , passmatch) =>{
    passmatch.innerHTML = "";
    const StudentID = localStorage.getItem('StudentID');
    axios.post(`${baseLink}/changePass.php`,{StudentID , p1 , p2}).then((resp) =>{
        passmatch.innerHTML = resp.data;
    }).catch((err) => passmatch.innerHTML = "An error occured");
}

export const checkForInfo = (history) =>{
    const StudentName = localStorage.getItem('StudentName');
    const password = localStorage.getItem('password');
    axios.post(`${baseLink}/checkForInfo.php`,{StudentName , password}).then((resp) =>{
        if(resp.data != 'continue'){
            history.push('login');
            localStorage.clear();
        } 
    });
}