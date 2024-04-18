import React, { useRef, useEffect } from 'react';
import axios from 'axios';

import './login.css';

function Login() {

	const formRef = useRef(null)
	const loginErrorRef = useRef(null)


	useEffect(() => {

		const form = formRef.current
		const loginError = loginErrorRef.current

		const handleSubmit = (event) => {

			event.preventDefault()
			event.stopPropagation()
	
			const formData = new FormData(form)

			axios.post('http://localhost:3001/api/users/login', formData, { headers: { "Content-Type": "application/json" } })
			.then((response) => {
				if(response.data?.notValidLogin === true) {
					loginError.innerHTML = `L'email o password sono errati.`
					return
				}

				sessionStorage.setItem('emailAuth', response.data.email)
				sessionStorage.setItem('username', response.data.firstName)
				window.location.replace('http://localhost:3000/')

			})
			.catch((error) => {
				console.error('Error:', error)
			})
		}

		form.addEventListener('submit', handleSubmit)
	
		return () => { form.removeEventListener('submit', handleSubmit) }

	}, [])



  	return (
		<div className='container'>
			<div className="all-container">
        		<div id="accedi-id-container">
            		<div className="top-nav-form"> <div className="title">Accedi</div> </div>
            		<div className="content-form">
                		<form className="form-accedi" id="form-accedi" method="post" ref={formRef}>
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

							<p className='current_errror' ref={loginErrorRef}></p>

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