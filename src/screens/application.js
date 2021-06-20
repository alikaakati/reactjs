import React from 'react';
import { Link } from 'react-router-dom';
import "../css/application.css"
import Navbar from './components/Navbar';
import Petition from './components/Petition';
import { checkForInfo } from './functions/apiFunctions';
export default class Application extends React.Component{
constructor(props){
    super(props);
} 
componentDidMount = () =>{
    checkForInfo(this.props.history);
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
                  <Navbar />

                  <hr />
            </div>




                <div class="application-container">
                <div id="rightparthead" class="application-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="application-openmenu" onClick= {() => openNav()}>&#9776;</span>
                    <div id="headimg" class="application-headimg"></div>
                </div>
                <h1 class="application-title">Petition Application</h1>

                <div class="application-highercontainer">



                <div class="application-lowercontainer" id="lowercontainer">
                <Petition />
                    
                </div>


                </div>
                


                </div>

            </body>
        </html>
    );
}
}