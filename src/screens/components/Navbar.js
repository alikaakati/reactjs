import React from 'react';
import { useHistory } from "react-router-dom"
import { logoutUser } from '../functions/apiFunctions';

const Navbar = () =>{
    let history = useHistory();
    return(
        <div>
            <div class="home-sidemenudivs" onClick={() => history.push("Home")}>
                <a>Home</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("registration")}>
                <a>Registration</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("Payments")}>
                <a>Payments</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("Application")}>
                <a>Application</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("Curriculum")}>
                <a>Curriculum</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("schedule")}>
                <a>Schedule</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => history.push("email")}>
                <a>Email</a>
            </div>
        <hr />
            <div class="home-sidemenudivs" onClick={() => logoutUser(history)}>
                <a>Sign out</a>
            </div>
        <hr />
    </div>
    );
}
export default Navbar;