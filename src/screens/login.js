import React from 'react';
import "../css/login.css";
import { Link } from "react-router-dom"; 
export default class Login extends React.Component {
render(){
	return(
		<html>
		<head>
			<title>login</title>
			
		</head>
			<body class="login-body">

			<div class= "login-main">
				<div>
					<div class="login-logo"></div>
				</div>
				
				<div class="login-theform">
					<div class="login-formheader">
						<p>University Management System</p>
					</div>
					<div class="login-test">
						<p>Please enter your User ID and password to log in.</p>
					</div>
					<div>
						<label for="username">User ID</label><br />
						<input type="text" id="username" name="username" placeholder="User ID" /><br />
						<label for="password">Password</label><br />
						<input type="password" id="password" name="password" placeholder="password" /><br/><br />
						<Link to="/Home"><button class="login-submit">Login</button></Link>
					</div> 
				</div>
			</div>
			</body>
			</html>
		
	);
	}
}