import React from 'react';
import { Link } from 'react-router-dom';
import "../css/registration.css"
import CourseOptions from './components/CourseOptions';
import Navbar from './components/Navbar';
import RegisteredCourses from './components/RegisteredCourses';
import { checkForInfo } from './functions/apiFunctions';
export default class Rregistration extends React.Component{
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
                <Navbar />
            </div>
      <div class="registration-container">
      <div id="rightparthead" class="registration-rightparthead" ref={ref => this.rightparthead = ref}>
                    <span class="registration-openmenu" class ="registration-openmenu" onClick= {() => openNav()}>&#9776;</span>
                <div id="headimg" class="registration-headimg"></div>
            </div>

            <div class="registration-highercontainer">
                <CourseOptions />
            </div>
            <div class="registration-gpa">
                <div class="registration-headinfo"><p>Registered Courses</p></div>
                <div class="registration-headicons"><a href="javascript:void(0)"><i ref={ref => this.iconsection = ref} id="iconsection" onClick={() => {
                    displaysection();
                    change();
                    }} class="far fa-times"></i></a></div>

            </div>
            <div class="registration-lowercontainer">

                <div ref={ref => this.table = ref} class='registration'>
                    <RegisteredCourses />

                </div>

        </div>

    </div>
</body>
</html>
        );
    }
}