import React, { useState } from 'react';
import "../../css/login.css";
import { loginUser } from '../functions/apiFunctions';
import { useHistory } from "react-router-dom"
const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg , setErrorMsg] = useState("");
    let history = useHistory();
    const login = async() =>{
        await loginUser(username , password , setErrorMsg , history);
    }

    return(
        <div>
            <h4 style={{color:"red"}}>{errorMsg}</h4>
            <label for="username">User ID</label><br />
            <input type="text" id="username" name="username" placeholder="User ID" onChange={(e) => setUsername(e.target.value)}/><br />
            <label for="password">Password</label><br />
            <input type="password" id="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/><br/><br />
            <button class="login-submit" onClick={() => login()}>Login</button>
        </div>
    );
}
export default LoginForm;