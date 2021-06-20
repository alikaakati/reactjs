import React from 'react';
import { useHistory } from 'react-router';
import SignOut from './SignOut';
const Profile = (props) =>{
    let history = useHistory();
    return(
        <div class="home-leftprofile">
            <div class="home-profileimg"></div>
            <ul>
                <li>
                    <p>{props.student.studentName}<i class="far fa-chevron-down"></i></p>
                    <ul class="home-test">
                        <li onClick={() => history.push("editpassword")}><a>Password<i class="fal fa-lock-alt"></i></a></li>
                        <SignOut />
                    </ul>
                </li>
            </ul>
        </div>
      
    );
}


export default Profile;