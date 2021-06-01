import React from 'react';
import { Link } from 'react-router-dom';
import "../css/application.css"
export default class Application extends React.Component{
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
    return(
        <html>
            <head>

            </head>
            <body class="application-body">
                
            <div id="mySidenav" class="application-sidenav" ref={ref => this.navbar = ref}>
                  <a  class="application-closebtn" onClick={() => closeNav()}>&times;</a>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="Home">
                    <a>Home</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="registration">                  
                    <a>Registration</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                    <Link to="Payments">
                        <a>Payments</a>
                    </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="Application">
                  
                    <a>Application</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="Curriculum">
                  
                    <a>Curriculum</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="schedule">
                  
                    <a>Schedule</a>
                  </Link>
                  </div>
                  <hr />
                  <div class="application-sidemenudivs">
                  <Link to="email">
                  
                    <a>Email</a>
                  </Link>
                  </div>
            
                <hr />
                <div class="application-sidemenudivs">
                <Link to="login">
                    <a>Sign out</a>
                </Link>
                </div>
                  <hr />
            </div>




                <div class="application-container">
                <div id="rightparthead" class="application-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="application-openmenu" onClick= {() => openNav()}>&#9776;</span>
                    <div id="headimg" class="application-headimg"></div>
                </div>
                <h1 class="application-title">Petition Application</h1>

                <div class="application-highercontainer">

                <div class="gpa">
                    <div class="application-headinfo"><p>Submit a Petition</p></div>
                    <div class="application-headicons"><a href="javascript:void(0)"><i id="iconsection" onclick="displaysection() & change() " class="far fa-times"></i></a></div>
                </div>


                <div class="application-lowercontainer" id="lowercontainer">

                <div class="application-form-group">
                    <label for="petitionkind" class="application-label">Petition</label>
                    <select name="" id="petitionkind">
                            <option value="pet1">petition1</option>

                            <option value="pet1">pet</option>

                            <option value="pet1">pet</option>

                            <option value="pet1">pet</option>
                        </select><br/><br/><br/>

                    <label for="textArea" class="application-label lab">Petition Case</label>
                    
                        <textarea class="application-form-control" rows="5" cols="100" id="textArea"></textarea><br/><br/>

                        <button class="application-button">Submit a Petition</button>
                    
                </div>
                    
                    
                </div>


                </div>
                


                </div>

            </body>
        </html>
    );
}
}