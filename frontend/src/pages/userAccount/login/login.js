import React from 'react';

import './login.css';

function Login() {
  	return (
		<div className='container'>
			<div className="all-container">
        		<div id="accedi-id-container">
            		<div className="top-nav-form">
                		<div className="title">
                    		<i className="fa-solid fa-user"></i>Accedi
                		</div>
            		</div>
            		<div className="content-form">
                		<form className="form-accedi" id="form-accedi" action="" method="post">
                    		<div className="inputs">
                        		<div className="input_box">
                            		<span className="details">Email</span>
                            		<input type="email" placeholder="Inserisci la tua email." id="input_email-accedi" name="email" required />
                        		</div>
                        		<div className="input_box">
                            		<span className="details">Password</span>
                            		<input type="password" placeholder="Inserisci la tua password." id="input_password-accedi" name="password" required />
                            		<i className="fa-regular fa-eye" id="togglePassword"></i>
                        		</div>
                    		</div>

                    		<div className="button">
                        		<button type="submit" name="submit">Accedi</button>
                    		</div>
        
                    		<p className="already">Non hai un account?
                        		<a onClick={() => {window.location.replace('http://localhost:3000/register')}} className='link'> Registrati</a>
                    		</p>

                		</form>
            		</div>
       			</div>
			</div>
		</div>
  	);
}

export default Login;