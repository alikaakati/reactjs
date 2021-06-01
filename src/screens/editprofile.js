import React from 'react';
import { Link } from 'react-router-dom';
import "../css/editProfile.css"
import upload from "../images/upload.png"
export default class EditProfile extends React.Component{
constructor(props){
    super(props);
    this.state = {
        url:"alriyadilogo.png"
    }
} 
render(){
    let imageUrl = "alriyadilogo.png";

    const uploadFunction = () =>{
        var pic = this.upload.value;
        var res = pic.substring(12, pic.length);
        if(res =="") return;
        this.state.url = res;
        this.forceUpdate();
    }
    
    return(
        <html>
            <head>
                <title>Edit profile picture</title>
                <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            </head>
        <div class="editp-main">
		<div class="editp-picdiv">
			<div class="editp-passimg"><img src={upload} /></div>

			
		</div>
		<div class="editp-formdiv">
			<h1 class="editp-h1">Change Profile Picture</h1>
			<br />
			
			<div id="profilepic" ref={ref => this.profilepic = ref} style={{backgroundImage:`url("${this.state.url}")`}} class="editp-profilepic"></div>
			<form id="myForm" action="javascript:void(0)">
				<input id="upload" type="file" name="upload"  ref={ref => this.upload = ref} /><br /><br />
                <Link to="home">
				    <button id="back" >Back</button> 
                </Link>
				<button id="submit" onClick={() => uploadFunction()}>Upload</button>
			</form>
			
		</div>
	</div>
    </html>
);
}
}