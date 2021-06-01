import React from 'react';
import { Link } from 'react-router-dom';
import "../css/payments.css"

export default class Ppayments extends React.Component{
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
            this.selectlist.style.display = "none";
        }
        else
            this.selectlist.style.display = "block";
        }
            
        const change =  (iconsection) =>{
        if(this.iconsection.className=="far fa-times"){
        this.iconsection.className = "far fa-chevron-down";
        }else{
        this.iconsection.className = "far fa-times";
        }
        }
        const profilesection = () =>{
            if (this.iconsec.className=="far fa-times") {
                document.getElementById("table").style.display = "none";
            }
            else
                document.getElementById("table").style.display = "table";
        }
        
            
            const changeprof =  () =>{
              if(this.iconsec.className=="far fa-times"){
                this.iconsec.className = "far fa-chevron-down";
              }else{
                this.iconsec.className = "far fa-times";
              }
            }
            
            
            
            const profilesection2 = () =>{
                if (this.iconsec2.className=="far fa-times") {
                    this.voucher.style.display = "none";
                }
                else
                    this.voucher.style.display = "table";
            }
            
            
            const changeprof2 =  () =>{
              if(this.iconsec2.className=="far fa-times"){
                this.iconsec2.className = "far fa-chevron-down";
              }else{
                this.iconsec2.className = "far fa-times";
              }
            }

        return(
        <html>
            <head>
                <title>Enrolled</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href="./payment.css" />
                <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body class="payments-body">
            <div id="mySidenav" class="payments-sidenav" ref={ref => this.navbar = ref}>
            <a  class="payments-closebtn" onClick={() => closeNav()}>&times;</a>
            <hr />
            <div class="payments-sidemenudivs">
            <Link to="Home">
                  
                  <a>Home</a>
                </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                <Link to="registration">                  
                  <a>Registration</a>
                </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                  <Link to="Payments">
                      <a>Payments</a>
                  </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                <Link to="Application">
                
                  <a>Application</a>
                </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                <Link to="Curriculum">
                
                  <a>Curriculum</a>
                </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                <Link to="schedule">
                
                  <a>Schedule</a>
                </Link>
                </div>
                <hr />
                <div class="payments-sidemenudivs">
                <Link to="email">
                
                  <a>Email</a>
                </Link>
                </div>
          
              <hr />
              <div class="payments-sidemenudivs">
              <Link to="login">
                  <a>Sign out</a>
              </Link>
        </div>
            <hr />
      </div>
            <div class="payments-container">
                    <div id="rightparthead" class="payments-rightparthead" ref={ref => this.rightparthead = ref}>
                            <span class="payments-openmenu" class ="payments-openmenu" onClick= {() => openNav()}>&#9776;</span>
                    </div>
                    <div class="payments-schedulehead">
        My Payments
        
    </div><br />

    <div class="payments-highercontainer">

        <div>

        <div class="payments-gpa secselect">
        <div class="payments-headinfo"><p>Select Semester</p></div>
        <div class="payments-headicons"><a href="javascript:void(0)"><i id="iconsection" ref={ref => this.iconsection = ref} onClick={() =>{
            displaysection();
            change();
        }} class="far fa-times"></i></a></div>

      </div><br />

        <div class="payments-selectlist" id="selectlist" ref={ref => this.selectlist = ref}>
            <p>Semester</p>

            <select name="" id="">

                <option value="course1">Fall 2020-2021</option>

                <option value="course2">semester 2</option>

                <option value="course3">semester 3</option>

                <option value="course4">semester 4</option>

            </select>
            <button>List</button>

        </div><br /><br />

    </div>

     <div class="payments-gpa">
        <div class="payments-headinfo"><p>Fall 2020-2021</p></div>
        <div class="payments-headicons"><a href="javascript:void(0)"><i id="iconsec" ref={ref => this.iconsec = ref} onClick={() =>{
            profilesection();
            changeprof()
        }} class="far fa-times"></i></a></div>

    </div>
    <div class="payments-lowercontainer">

        <div class="payments-tableContainer">

            <table id="table">

                    <tr>

                        <th>#</th>

                        <th>Semester</th>

                        <th>Semester Status</th>

                    </tr>

                    <tr>

                        <td>1</td>

                        <td>Fall 2020-2021</td>

                        <td>regStart</td>

                        

                    </tr>

                  
                   

            </table><br /><br />

        </div>

    </div>

    <div class="payments-gpa">
        <div class="payments-headinfo1"><p>My Vouchers</p></div>
        <div class="payments-headicons1"><a href="javascript:void(0)"><i id="iconsec2" ref={ref => this.iconsec2 = ref} onClick={() => {
            profilesection2();
            changeprof2();
        }} class="far fa-times"></i></a></div>

    </div>
    <div class="payments-lowercontainer">

        <div class="payments-tableContainer">
            <table id="voucher" ref={ref => this.voucher = ref} class="payments-table">
                <thead>
                    <tr>
                        <td>#</td>

                        <td>System Ref</td>

                        <td>Bank Ref</td>

                        <td>Amount(L.L)</td>

                        <td>Creation Date</td>
                        <td>Due Date</td>
                        <td>Payment Date</td>
                        <td>Penalty(L.L)</td>
                        <td>Paid At</td>

                        <td>Type</td>
                        

                    </tr>

                </thead>
                <tbody>
                        <tr>

                        <td>1</td>

                        <td>23423</td>

                        <td>23423</td>

                        <td>100000</td>

                        <td>2-2-2021</td>
                        <td>2-3-2021</td>
                        <td></td>
                        <td>0</td>
                        <td>SYSTEM</td>
                        <td>NA</td>

                        </tr>

                        <tr>

                        <td>2</td>

                        <td>23423</td>

                        <td>23423</td>

                        <td>100000</td>

                        <td>2-2-2021</td>
                        <td>2-3-2021</td>
                        <td></td>
                        <td>0</td>
                        <td>SYSTEM</td>
                        <td>NA</td>

                        </tr>

                        <tr>

                        <td>3</td>

                        <td>23423</td>

                        <td>23423</td>

                        <td>100000</td>

                        <td>2-2-2021</td>
                        <td>2-3-2021</td>
                        <td></td>
                        <td>0</td>
                        <td>SYSTEM</td>
                        <td>NA</td>

                        </tr>
                </tbody>

                    

                    

                   

            </table><br /><br />

        </div>

    </div>

    
    <div class="payments-lowercontainer lower2">

    <div class="payments-tableContainer">

            <table id="paymentpay">

                    <tr>

                        <th>TOTAL PAID</th>

                        <td>342423</td>

                    </tr>

                    <tr>

                        <th>TOTAL NOT PAID</th>

                        <td>2342342</td>

                    </tr>

                   <tr>

                        <th>TOTAL DUE</th>

                        <td>23234</td>

                    </tr>

                     <tr>

                        <th>TOTAL</th>

                        <td>23423</td>

                    </tr>

                    

                    

                   

            </table>

        </div>

    </div><br /><br />






    </div>
</div>


            </body>
        </html>
        );
    }
}