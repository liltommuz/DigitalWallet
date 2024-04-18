import React from 'react';

import './home.css';

import * as IoIcons from "react-icons/io";

function Home() {
  	return (
		<div className='container'>
			<div className='home_container'>
				<div className='total_balance'>
					
					<h1>Welcome new CryptoGuru</h1>
					<p>In this page you will see the total amount of money that you possess</p>
					<p>and also your last transactions. With the right filters you could be</p>
					<p>able to see the sum of the accounts selected or only a certain type of</p>
					<p>accounts.</p>

					<br /> <br /> 

					<div className='account_balance'>
						<div className='total_amount'>
							<p className='text'>Bilancio Totale</p>
							<p className='amount'>€ 12000</p>
						</div>

						<p className='textTitle'>Entrate / Uscite Totali</p>
						<div className='incame_expanse'>
							<div className='incame'>
								<p className='text'> 
									<IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Income
								</p>
								<p className='amount'>€ 0,00</p>
							</div>
							<div className='expanse'>
								<p className='text'> 
									<IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/> Expense
								</p>
								<p className='amount'>€ 1,00</p>
							</div>

						</div>
					</div>

				</div>
	
				<div className='last_transactions'>
					
					
				</div>
						
				

			</div>
		</div>
  	);
}

export default Home;