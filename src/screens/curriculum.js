import React from 'react';
import { Link } from 'react-router-dom';
import "../css/curriculum.css"
export default class Curriculum extends React.Component{
constructor(props){
    super(props);
} 
render(){

    const displaysection = () =>{
        if (this.iconsection.className=="far fa-times") {
            this.lowercontainer.style.display = "none";
        }
        else
            this.lowercontainer.style.display = "block";
    }

    const change  = (iconsection) =>{
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

    const updateSection = () => {
        displaysection();
        change()
    }

    return(
    <html>
        <head>
            <title>Enrolled</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />


        <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        </head>


        <body class="curri-body">
            <div id="mySidenav" class="curri-sidenav" ref={ref => this.navbar = ref}>
                  <a  class="curri-closebtn" onClick={() => closeNav()}>&times;</a>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="Home">
                  
                    <a>Home</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="registration">                  
                    <a>Registration</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                    <Link to="Payments">
                        <a>Payments</a>
                    </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="Application">
                  
                    <a>Application</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="Curriculum">
                  
                    <a>Curriculum</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="schedule">
                  
                    <a>Schedule</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="curri-sidemenudivs">
                  <Link to="email">
                  
                    <a>Email</a>
                  </Link>
                  </div>
            
                <hr />
                <div class="curri-sidemenudivs">
                <Link to="login">
                    <a>Sign out</a>
                </Link>
                </div>
                  <hr />
            </div>

            <div class="curri-container">
            <div class="curri-head">
                    <div id="rightparthead" class="curri-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="curri-openmenu" onClick= {() => openNav()}>&#9776;</span>
                    <div id="headimg" class="curri-headimg"></div>
                    </div>
            </div>
    <div class="curri-highercontainer">
        <h5>StudentName - StudentID</h5>
    </div>
     <div class="curri-gpa">
        <div class="curri-headinfo"><p>Student Academic Plan</p></div>
        <div class="curri-headicons"><a href="javascript:void(0)"><i id="iconsection" ref={ref => this.iconsection = ref} onClick={() => updateSection()} class="far fa-times"></i></a></div>

    </div>
    <div class="curri-lowercontainer" id="lowercontainer" ref = {ref => this.lowercontainer = ref }>

        <div>
            <h2>First Year</h2>

            <table class="curri-table" id="table">

                    <tr>
                        <th>#</th>

                        <th>Course Code</th>

                        <th>Course Name</th>

                        <th>Course Type</th>

                        <th>Status</th>

                        <th>Credits</th>
                        <th>Grade</th>

                    </tr>

                    <tr class="curri-semester">

                        <td>Fall</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>


                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr class="curri-semester">

                        <td>Spring</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>Summer</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

            </table><br />


        </div>

        <div>
            <h2>Second Year</h2>

            <table class="curri-table" id="table">

                    <tr>
                        <th>#</th>

                        <th>Course Code</th>

                        <th>Course Name</th>

                        <th>Course Type</th>

                        <th>Status</th>

                        <th>Credits</th>
                        <th>Grade</th>

                    </tr>

                    <tr class="curri-semester">

                        <td>Fall</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>


                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr class="curri-semester">

                        <td>Spring</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>Summer</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

            </table><br />
            

        </div>

        <div>
            <h2>Third Year</h2>

            <table class="curri-table" id="table">

                    <tr>
                        <th>#</th>

                        <th>Course Code</th>

                        <th>Course Name</th>

                        <th>Course Type</th>

                        <th>Status</th>

                        <th>Credits</th>
                        <th>Grade</th>

                    </tr>

                    <tr class="curri-semester">

                        <td>Fall</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>


                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr class="curri-semester">

                        <td>Spring</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>Summer</td>

                        <td></td>

                        <td></td>

                        <td></td>

                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>
                    <tr>

                        <td>1</td>

                        <td>CSCI315</td>

                        <td>Web Application Development</td>

                        <td>Core Course</td>

                        <td>Registered</td>
                        <td>4</td>
                        <td></td>

                    </tr>

            </table><br /><br />
            

        </div>

    </div>
    </div>
    </body>
</html>
);
}
}