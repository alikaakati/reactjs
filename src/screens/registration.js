import React from 'react';
import { Link } from 'react-router-dom';
import "../css/registration.css"

export default class Rregistration extends React.Component{
    constructor(props){
        super(props);
    }



    render(){


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

         const displaysection = () =>{
            if (this.iconsection.className=="far fa-times") {
                this.table.style.display = "none";
            }
            else
                this.table.style.display = "table";
         }
         
        const change = () =>{
            if(this.iconsection.className=="far fa-times"){
                this.iconsection.className = "far fa-chevron-down";
              }else{
                this.iconsection.className = "far fa-times";
              }
        }


        return(
            <html>
                <head>
                    <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />

                </head>
            <body class="registration-body">
            <div id="mySidenav" class="registration-sidenav" ref={ref => this.navbar = ref}>
            <a  class="registration-closebtn" onClick={() => closeNav()}>&times;</a>
            <hr />
            <div class="registration-sidemenudivs">
            <Link to="Home">
                  
                  <a>Home</a>
                </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                <Link to="registration">                  
                  <a>Registration</a>
                </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                  <Link to="Payments">
                      <a>Payments</a>
                  </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                <Link to="Application">
                
                  <a>Application</a>
                </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                <Link to="Curriculum">
                
                  <a>Curriculum</a>
                </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                <Link to="schedule">
                
                  <a>Schedule</a>
                </Link>
                </div>
                <hr />
                <div class="registration-sidemenudivs">
                <Link to="email">
                
                  <a>Email</a>
                </Link>
                </div>
          
              <hr />
              <div class="registration-sidemenudivs">
              <Link to="login">
                  <a>Sign out</a>
              </Link>
        </div>
            <hr />
      </div>
      <div class="registration-container">
      <div id="rightparthead" class="registration-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="registration-openmenu" class ="registration-openmenu" onClick= {() => openNav()}>&#9776;</span>
                <div id="headimg" class="registration-headimg"></div>
            </div>

            <div class="registration-highercontainer">

                <div>

                    <select name="" id="">

                        <option value="course1">Course 1</option>

                        <option value="course2">Course 2</option>

                        <option value="course3">Course 3</option>

                        <option value="course4">Course 4</option>

                    </select>
                    <button>+</button>

                </div>

            </div>
            <div class="registration-gpa">
                <div class="registration-headinfo"><p>Registered Courses</p></div>
                <div class="registration-headicons"><a href="javascript:void(0)"><i ref={ref => this.iconsection = ref} id="iconsection" onClick={() => {
                    displaysection();
                    change();
                    }} class="far fa-times"></i></a></div>

            </div>
            <div class="registration-lowercontainer">

                <div>

                    <table id="table" ref={ref => this.table = ref} class='registration'>

                            <tr>

                                <th>Course name</th>

                                <th>Instructor</th>

                                <th>Credits</th>

                                <th>Section</th>

                                <th>Time</th>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course 1</td>

                                <td>Mhmd haj</td>

                                <td>3</td>

                                <td>A</td>

                                <td>12:00</td>

                            </tr>

                            <tr>

                                <td>Course name</td>

                                <td>Instructor</td>

                                <td>Credits</td>

                                <td>Section</td>

                                <td>Time</td>

                            </tr>

                            <tr>

                                <td>Course name</td>

                                <td>Instructor</td>

                                <td>Credits</td>

                                <td>Section</td>

                                <td>Time</td>

                            </tr>

                    </table>

                </div>

        </div>

    </div>
</body>
</html>
        );
    }
}