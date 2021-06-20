import React from 'react';
import "../css/login.css";
import LoginForm from './components/LoginForm';
import { autoLogin } from './functions/apiFunctions';
export default class Login extends React.Component {

	componentDidMount = () =>{
		autoLogin(this.props.history)
	}

render(){
	return(
		<html>
		<head>
			<title>login</title>
			
		</head>
			<body class="login-body" style={{minHeight:"100vh"}}>

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
						<LoginForm />						
					</div> 
				</div>
			</div>
			</body>
			</html>
		
	);
	}
}