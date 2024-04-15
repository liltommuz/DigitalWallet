import React from 'react';

import './register.css';

function Register() {
  	return (
		<div className='container'>
			<section className="container-all-registrati">
				<div className="container_registrati">
					<div className="content_registrati">
						<div className="title">Registrazione</div>
							<form id="form" action="/accepted" method="post">
								<div className="inputs">

									<div className="input_box">
										<span className="details">Nome</span>
										<input type="text" placeholder="Inserisci il tuo nome." id="input_name" name="name" required />
									</div>
							
									<div className="input_box">
										<span className="details">Cognome</span>
										<input type="text" placeholder="Inserisci il tuo cognome." id="input_surname" name="surname" required />
									</div>
									
									<div className="input_box">
										<span className="details">Email</span>
										<input type="text" placeholder="Inserisci la tua email." id="input_email" name="email" required />
									</div>

									<div className="input_box">
										<span className="details">Password</span>
										<input type="password" placeholder="Inserisci la tua password." id="input_password" name="password" required />
									</div>

									<div className="input_box">
										<span className="details">Conferma Password</span>
										<input type="password" placeholder="Conferma la tua password." id="input_confirmation" required />
									</div>

								</div>

								<p className="errors" id="error_spaces" >La password non puó contenere spazi vuoti.</p>
								<p className="errors" id="error_length" >La password non ha almeno 12 caratteri.</p>
								<p className="errors" id="error_chars" >La password deve contenere almeno una lettera.</p>
								<p className="errors" id="error_numbers" >La password deve contenere almeno un numero.</p>
								<p className="errors" id="error_specials" >La password deve contenere almeno un carattere speciale.</p>
								<p className="errors" id="error_others" >La password contiene caratteri non permessi.</p>
								<p className="errors" id="error_password" >Le due password devono combaciare.</p>

							<div className="button">
								<button type="submit" id="submit" >Registrati</button>
							</div>

						</form>

						<p className="already">hai già un account?
                        	<a onClick={() => {window.location.replace('http://localhost:3000/login')}} className='link'> Accedi</a>
                    	</p>
					</div>
				</div>
			</section>
	  		
		</div>
  	);
}

export default Register;