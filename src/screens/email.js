import React from 'react';
import { Link } from 'react-router-dom';
import "../css/email.css"
export default class Email extends React.Component{
constructor(props){
    super(props);
} 

render(){
    return(
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            </head>
            <body>

        <div class="email-main">
		<div class="email-mainmid">
			<h1 class="email-h1">Contact Info</h1>
			<p class="email-p">For all enquiries, please contact us using the following.</p>


			<div class="email-form">
				<div class="email-formupper">
					<div class="email-inside">
						<div>
							<i class="fas fa-phone-alt email-i"></i>
						</div>

						<div class="email-phone1">
						   <h3>Phone</h3>
						   <p class="email-p">+961(1)345 654</p>
					   </div>

					</div>

					<div class="email-inside">
						<div>
							<i class="fas fa-envelope email-i"></i>
						</div>

						<div class="email-phone1">
						   <h3>Email</h3>
						   <p class="email-p">info@ums.edu.lb</p>
					   </div>

						
					</div>
				</div><hr />

				<div class="email-formlower">

					<div class="email-inside">
						<div>
							<i class="fal fa-map-marker-alt email-i"></i>
						</div>

						<div class="email-phone1">
						   <h3>Address</h3>
						   <p class="email-p">Ghobeiry, Old Airport Road, Beirut, Lebanon</p>
					   </div>

						
					</div>

					<div class="email-inside">
                        <Link to="home">
						<button class="email-button">Home</button>
                        </Link>

						
					</div>
					
				</div>
			</div>




			
		</div>
    </div>
            </body>
            </html>
);
}

}
