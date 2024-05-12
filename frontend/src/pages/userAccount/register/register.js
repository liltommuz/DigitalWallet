import React, { useRef, useEffect } from 'react'
import axios from 'axios'

import './register.css'

 function Register() {

	const passwordInputRef = useRef(null)
	const confirmPasswordInputRef = useRef(null)
	const passwordErrorRef = useRef(null)
	const submitButtonRef = useRef(null)
	const formRef = useRef(null)


	useEffect(() => {
		const form = formRef.current
		const passwordError = passwordErrorRef.current

	
		const handleSubmit = (event) => {
			event.preventDefault()
			event.stopPropagation()
	
			const formData = new FormData(form)
			
			axios.post('http://localhost:3001/api/users/register', formData, { headers: { "Content-Type": "application/json" } })
			.then((response) => {
				if(response.data.emailAlreadyUsed === true) {
					passwordError.innerHTML = `L'email inserita è già stata utilizzata in precedenza.`
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

	useEffect(() => {

		const submitButton = submitButtonRef.current
		const passwordInput = passwordInputRef.current
		const passwordError = passwordErrorRef.current

		passwordInput.addEventListener('input', () => {

			let currentPassword = passwordInput.value

			let passwordIsValid = false
			submitButton.disabled = !passwordIsValid

			if(currentPassword === '') {
				passwordError.innerHTML = ''
				return
			}

			if (/\s/g.test(currentPassword)) {
				passwordError.innerHTML = 'La password non può contenere spazi.'
				return
			}

			if(currentPassword.length < 8) {
				passwordError.innerHTML = 'La password deve contenere almeno 8 caratteri.'
				return
			}

			if(!/[a-z]/i.test(currentPassword)) {
				passwordError.innerHTML = 'La password deve contenere almeno una lettera.'
				return
			}

			if (!/\d/.test(currentPassword)) {
				passwordError.innerHTML = 'La password deve contenere almeno una cifra.'
				return
			}

			passwordError.innerHTML = ''
			passwordIsValid = true
			submitButton.disabled = !passwordIsValid

		})

	}, [])

  	return (
		<div className='container'>
			<section className="container_window">
				<div className="container_form">
					<p className="title">Registrazione</p>

					<form className="form" method="post" ref={formRef}>

						<div className="inputs">
							<div className="input_box">
								<span className="details">Nome</span>
								<input className='input' type="text" placeholder="Inserisci il tuo nome." name="firstName" required />
							</div>
					
							<div className="input_box">
								<span className="details">Cognome</span>
								<input className='input' type="text" placeholder="Inserisci il tuo cognome." name="lastName" required />
							</div>
							
							<div className="input_box">
								<span className="details">Email</span>
								<input className='input' type="text" placeholder="Inserisci la tua email." name="email" required />
							</div>

							<div className="input_box">
								<span className="details">Password</span>
								<input className='input' type="password" placeholder="Inserisci la tua password." ref={passwordInputRef} name="password" required />
							</div>

							<div className="input_box">
								<span className="details">Conferma Password</span>
								<input className='input' type="password" placeholder="Conferma la tua password." ref={confirmPasswordInputRef} required />
							</div>

							<p className='current_errror' ref={passwordErrorRef}></p>

						</div>

						<button className='button' type="submit" disabled id="submit" ref={submitButtonRef} >Registrati</button>

					</form>

					<p className="already">hai già un account?
						<span onClick={() => {window.location.replace('http://localhost:3000/login')}} className='link'> Accedi</span>
					</p>
				</div>
			</section>
		</div>
  	)
}

export default Register