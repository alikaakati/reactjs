import React from 'react';
import "../css/home.css"
import Navbar from './components/Navbar';
import StudentInfoTable from './components/StudentInfoTable';
import Profile from './components/Profile';
import GPAtable from './components/GPAtable';
import { checkForInfo } from './functions/apiFunctions';

export default class Home extends React.Component{
constructor(props){
    super(props);
} 


componentDidMount = () =>{
    checkForInfo(this.props.history);
}
render(){
     const today = new Date();
     var day = today.getDay();
     var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
     var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const profilesection = () =>{
            if (this.iconprofile.className=="far fa-times") document.getElementById("profiletable").style.display = "none";
            else document.getElementById("profiletable").style.display = "table";
        }
        const updateProf = () =>{
            profilesection();
            changeprof();
        }
        const displaysection = () =>{
            if (this.iconsection.className=="far fa-times") this.gpatable.style.display = "none";
            else this.gpatable.style.display = "table";
         }
        const changeprof  = () => {
        if(this.iconprofile.className=="far fa-times"){
            this.iconprofile.className = "far fa-chevron-down";
        }else{
            this.iconprofile.className = "far fa-times";
        }
        } 	
        const updateGPA = () =>{
            displaysection();
            change();
        }
        const change = () =>{
        if(this.iconsection.className=="far fa-times"){
            this.iconsection.className = "far fa-chevron-down";
        }else{
            this.iconsection.className = "far fa-times";
        }
        }
        const openNav = () => {
            var windowWidth = window.innerWidth;
            if (windowWidth <= 500) {
                this.navbar.style.width = "100vw";
            }
            else{
                this.navbar.style.width = "18vw";
                this.rightparthead.style.marginLeft = "18vw";
            }
         
         }
         
        const closeNav = () => {
           this.navbar.style.width = "0px";
           this.rightparthead.style.marginLeft = "0px";
         }
         const studentName = localStorage.getItem('StudentName');
         const ApplicationID = localStorage.getItem('ApplicationID');
         const BaseCampus = localStorage.getItem('BaseCampus');
         const majorName = localStorage.getItem('majorName');
         const Blocked = localStorage.getItem('Blocked');
         const StudentID = localStorage.getItem('StudentID');
         const student = {studentName , ApplicationID , BaseCampus , majorName , Blocked , StudentID};
         return(
            <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            
            
            </head>
            <body class="home-body">
                <div class="home-head">
                    <div id="rightparthead" class="home-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="home-openmenu" onClick= {() => openNav()}>&#9776;</span>
                    <div id="headimg" class="home-headimg"></div>
                    </div>
                    <Profile student = {student}/>
                </div>
            
                
            <div id="mySidenav" class="home-sidenav" ref={ref => this.navbar = ref}>
                  <a  class="home-closebtn" onClick={() => closeNav()}>&times;</a>
                  <hr />
                <Navbar />
            </div>
            
            <div class="home-main">
              <p id="displayDateTime">{daylist[day]+' '+date}</p>
            
            
                <div class="home-profile">
                    <div class="home-headinfo"><p>Student info</p></div>
                    <div class="home-headicons"><a href="javascript:void(0)"><i id="iconprofile" ref={ref => this.iconprofile = ref} onClick={() => updateProf()} class="far fa-times"></i></a></div>
            
                </div>
            
            
              <StudentInfoTable student = {student} />
            
                <div class="home-gpa">
                    <div class="home-headinfo"><p>GPA</p></div>
                    <div class="home-headicons"><a href="javascript:void(0)"><i id="iconsection" ref={ref => this.iconsection = ref} onClick={() => updateGPA()} class="far fa-times"></i></a></div>
            
                </div>
            <div ref={ref => this.gpatable = ref}>
              <GPAtable />
            </div>
             </div> 
            
            

            </body>
            </html> 
        );
    }
}