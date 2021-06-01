import React from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"
export default class Home extends React.Component{
constructor(props){
    super(props);
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
                    
                    <div class="home-leftprofile">
                        <div class="home-profileimg"></div>
                        <ul>
                            <li>
                                <p>Student Name<i class="far fa-chevron-down"></i></p>
                                <ul class="home-test">
                                    <Link to="editprofile">
                                    <li>
                                        <a>Profile picture<i class="fad fa-portrait"></i></a>
                                    </li>
                                    </Link>
                                    <Link to="editpassword">
                                    <li><a>Password<i class="fal fa-lock-alt"></i></a></li>
                                    </Link>
                                    <Link to="login">
                                    <li> <a>Sign out<i class="fas fa-sign-out-alt"></i></a></li>
                                    </Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            
                
            
            
            {/* <SideNavBar */}
            <div id="mySidenav" class="home-sidenav" ref={ref => this.navbar = ref}>
                  <a  class="home-closebtn" onClick={() => closeNav()}>&times;</a>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="Home">
                  
                    <a>Home</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="registration">                  
                    <a>Registration</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                    <Link to="Payments">
                        <a>Payments</a>
                    </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="Application">
                  
                    <a>Application</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="Curriculum">
                  
                    <a>Curriculum</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="schedule">
                  
                    <a>Schedule</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="home-sidemenudivs">
                  <Link to="email">
                  
                    <a>Email</a>
                  </Link>
                  </div>
            
                <hr />
                <div class="home-sidemenudivs">
                <Link to="login">
                    <a>Sign out</a>
                </Link>
                </div>
                  <hr />
            </div>
            
            <div class="home-main">
              <p id="displayDateTime">{daylist[day]+' '+date}</p>
            
            
                <div class="home-profile">
                    <div class="home-headinfo"><p>Student info</p></div>
                    <div class="home-headicons"><a href="javascript:void(0)"><i id="iconprofile" ref={ref => this.iconprofile = ref} onClick={() => updateProf()} class="far fa-times"></i></a></div>
            
                </div>
            
            
                <table class="home-profiletable "id="profiletable">
              <tr>
                <th>Student ID</th>
                <td>2004111</td>
                <th>Application ID</th>
                <td>123</td>
                <th>Major</th>
                <td>Computing</td>
              </tr>
              <tr>
                <th>Student Name</th>
                <td>Hadi Ali Hakim</td>
                <th>Base Campus</th>
                <td>Beirut</td>
                <th>Blocked</th>
                <td>No</td>
              </tr>
              
              </table>
            
                <div class="home-gpa">
                    <div class="home-headinfo"><p>GPA</p></div>
                    <div class="home-headicons"><a href="javascript:void(0)"><i id="iconsection" ref={ref => this.iconsection = ref} onClick={() => updateGPA()} class="far fa-times"></i></a></div>
            
                </div>
            
            
                <table id="home-gpatable" class="home-gpatable" ref={ref => this.gpatable = ref}>
              <tr>
                <th>#</th>
                <th>Semester</th>
                <th>GPA</th>
                <th>Cumulative GPA</th>
                <th>Nb of Credits</th>
                <th>Probation</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Semester1</td>
                <td>GPA1</td>
                <td>Cumulative GPA1</td>
                <td>Nb of Credits1</td>
                <td>Probation1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Semester2</td>
                <td>GPA2</td>
                <td>Cumulative GPA2</td>
                <td>Nb of Credits2</td>
                <td>Probation2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Semester3</td>
                <td>GPA3</td>
                <td>Cumulative GPA3</td>
                <td>Nb of Credits3</td>
                <td>Probation3</td>
              </tr>
               <tr>
                <td>4</td>
                <td>Semester4</td>
                <td>GPA4</td>
                <td>Cumulative GPA4</td>
                <td>Nb of Credits4</td>
                <td>Probation4</td>
              </tr>
               <tr>
                <td>5</td>
                <td>Semester5</td>
                <td>GPA5</td>
                <td>Cumulative GPA5</td>
                <td>Nb of Credits5</td>
                <td>Probation5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Semester6</td>
                <td>GPA6</td>
                <td>Cumulative GPA6</td>
                <td>Nb of Credits6</td>
                <td>Probation6</td>
              </tr>
              </table>
            
             </div>
            
            

            </body>
            </html> 
        );
    }
}