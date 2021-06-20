import React from 'react';
import { logoutUser } from '../functions/apiFunctions';
import { useHistory } from "react-router-dom"

const SignOut = () =>{
    let history = useHistory();
    return(
        <div>
            <li onClick={() => logoutUser(history)}> <a>Sign out<i class="fas fa-sign-out-alt"></i></a></li>
        </div>
    );
}
export default SignOut