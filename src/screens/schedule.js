import React from 'react';
import { Link } from 'react-router-dom';
import "../css/schedule.css"
export default class Schedule extends React.Component{
constructor(props){
    super(props);
} 
render(){

    const displaysection = () =>{
        if (this.iconsection.className=="far fa-times") {
            this.selectlist.style.display = "none";
        }
        else
            this.selectlist.style.display = "block";
    }
    
    const change =  () =>{
      if(this.iconsection.className=="far fa-times"){
        this.iconsection.className = "far fa-chevron-down";
      }else{
        this.iconsection.className = "far fa-times";
      }
    }

    const updateSection = () =>{
        displaysection();
        change();
    }

     const profilesection = () =>{
        if (this.iconsec.className=="far fa-times") {
            this.table.style.display = "none";
        }
        else
            this.table.style.display = "table";
    }
    
    
    const changeprof  = () =>{
        if(this.iconsec.className=="far fa-times"){
            this.iconsec.className = "far fa-chevron-down";
        }else{
            this.iconsec.className = "far fa-times";
        }
    }
    
    const updateProf = () =>{
        profilesection();
        changeprof();
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
        <body class="schedule-body">
            <div id="mySidenav" class="schedule-sidenav" ref={ref => this.navbar = ref}>
        <a  class="schedule-closebtn" onClick={() => closeNav()}>&times;</a>
        <hr />
        <div class="schedule-sidemenudivs">
        <Link to="Home">
                  
                  <a>Home</a>
                </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                <Link to="registration">                  
                  <a>Registration</a>
                </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                  <Link to="Payments">
                      <a>Payments</a>
                  </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                <Link to="Application">
                
                  <a>Application</a>
                </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                <Link to="Curriculum">
                
                  <a>Curriculum</a>
                </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                <Link to="schedule">
                
                  <a>Schedule</a>
                </Link>
                </div>
                <hr />
                <div class="schedule-sidemenudivs">
                <Link to="email">
                
                  <a>Email</a>
                </Link>
                </div>
          
              <hr />
              <div class="schedule-sidemenudivs">
              <Link to="login">
                  <a>Sign out</a>
              </Link>
    </div>
        <hr />
    </div>
        
        
    <div class="schedule-container">
    <div id="rightparthead" class="schedule-rightparthead" ref={ref => this.rightparthead = ref}>
        <span class="schedule-openmenu" onClick= {() => openNav()}>&#9776;</span>
        <div id="headimg" class="schedule-headimg"></div>
    </div>
                    
    <div class="schedule-ead">
        My Schedule
        
    </div><br/>

    <div class="schedule-highercontainer">


        <div class="schedule-gpa secselect">
        <div class="schedule-headinfo"><p>Select Semester</p></div>
        <div class="schedule-headicons"><a href="javascript:void(0)"><i id="iconsection" ref={ref => this.iconsection = ref} onClick={() => updateSection()} class="far fa-times"></i></a></div>

      </div><br/>

        <div class="schedule-selectlist" id="selectlist" ref={ref => this.selectlist = ref}>
            <p>Semester</p>

            <select name="" id="">

                <option value="course1">Fall 2020-2021</option>

                <option value="course2">semester 2</option>

                <option value="course3">semester 3</option>

                <option value="course4">semester 4</option>

            </select>
            <button>List</button>

        </div><br/><br/>

    </div>

     <div class="schedule-gpa">
        <div class="schedule-headinfo"><p>Fall 2020-2021</p></div>
        <div class="schedule-headicons"><a href="javascript:void(0)"><i id="iconsec" ref={ref => this.iconsec = ref} onClick={() => updateProf()} class="far fa-times"></i></a></div>

    </div>
    <div class="schedule-lowercontainer">

        <div>

            <table id="table" ref={ref => this.table = ref}>

                    <tr>

                        <th>#</th>

                        <th>Code</th>

                        <th>Course Name</th>

                        <th>Sec</th>

                        <th>Instructor</th>
                        <th>Schedule</th>
                        <th>Room</th>
                        <th>Credit</th>
                        <th>Status</th>
                        <th>Campus</th>
                        <th>Grade</th>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI523</td>

                        <td>Web Dev</td>

                        <td>A</td>

                        <td>mhmd hajj</td>
                        <td>T 16:30{"->"}18:00<br/>Th 16:30{"->"}18:00</td>
                        <td>B 2-5</td>
                        <td>3</td>
                        <td>passed</td>
                        <td>Beirut</td>
                        <td>12:00</td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI523</td>

                        <td>Web Dev</td>

                        <td>A</td>

                        <td>mhmd hajj</td>
                        <td>T 16:30{"->"}18:00<br/>Th 16:30{"->"}18:00</td>
                        <td>B 2-5</td>
                        <td>3</td>
                        <td>passed</td>
                        <td>Beirut</td>
                        <td>12:00</td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI523</td>

                        <td>Web Dev</td>

                        <td>A</td>

                        <td>mhmd hajj</td>
                        <td>T 16:30{"->"}18:00<br/>Th 16:30{"->"}18:00</td>
                        <td>B 2-5</td>
                        <td>3</td>
                        <td>passed</td>
                        <td>Beirut</td>
                        <td>12:00</td>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>CSCI523</td>

                        <td>Web Dev</td>

                        <td>A</td>

                        <td>mhmd hajj</td>
                        <td>T 16:30{"->"}18:00 <br/>Th16:30{"->"}18:00</td>
                        <td>B 2-5</td>
                        <td>3</td>
                        <td>passed</td>
                        <td>Beirut</td>
                        <td>12:00</td>

                    </tr>

                   <tr>

                        <td>1</td>

                        <td>CSCI523</td>

                        <td>Web Dev</td>

                        <td>A</td>

                        <td>mhmd hajj</td>
                        <td>T 16:30{"->"}18:00<br/>Th 16:30{"->"}18:00</td>
                        <td>B 2-5</td>
                        <td>3</td>
                        <td>passed</td>
                        <td>Beirut</td>
                        <td>12:00</td>

                    </tr>

                    

                   

            </table><br/><br/>

        </div>

    </div>

</div>
        
        
        
        
        
        </body>
        </html>


    );

}
}