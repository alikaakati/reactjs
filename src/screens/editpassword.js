import React from 'react';
import { Link } from 'react-router-dom';
import "../css/editPassword.css"
import { changePass, checkForInfo } from './functions/apiFunctions';
export default class EditPassword extends React.Component{
constructor(props){
    super(props);
} 
componentDidMount = () =>{
	checkForInfo(this.props.history)
}
render(){

    const match = () =>{
        var input1 = this.oldpass.value;
        var input2 = this.confirmpass.value;
        changePass(input1 , input2 , this.passmatch)
    }
    return(
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />                
            </head>
        <body>
                <div class="editpass-main">
                <div class="editpass-picdiv">
                    <div class="editpass-passimg"><img src="changepassword.png" /></div>

                    
                </div>
                <div class="editpass-formdiv">
                    <h1 class="editpass-h1  ">Change Password</h1>
                    <br/>
                    
                    <form id="myForm" class="editpass-form" action="javascript:void(0)">
                        <label for="newpass" class="editpass-label">Old password</label><br/>
                        <input class="editpass-input" id="oldpass" ref={ref => this.oldpass = ref} type="password" name="oldpass" placeholder="default" /><br/><br/>
                        <label for="confirmpass" class="editpass-label">New Password</label><br/>
                        <input class="editpass-input" id="confirmpass" ref ={ref => this.confirmpass = ref} type="password" name="confirmpass" placeholder="default" /><br/>
                        <p class="editpass-passmatch" id="passmatch" ref={ref => this.passmatch = ref}></p>
                        <br/><br/>
                        <Link to="home">
                            <button class="editpass-button" id="back" >Back</button> 
                        </Link>
                        <button class="editpass-button" id="submit" onClick={() => match()}>Submit</button>
                    </form>
                    
                </div>
                
            </div>
        </body>
        </html>
);
}
}