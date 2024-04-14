import React from 'react';

import './account.css'

function Accounts() {
  	return (
		<div className='container'>
			
	  		<h1>Welcome back _NomeUtente_</h1>
			<p>In this page you will see the total amount of money that you possess</p>
			<p>and also your last transactions. With the right filters you could be</p>
			<p>able to see the sum of the accounts selected or only a certain type of</p>
			<p>accounts.</p>

			<br /> <br /> 

			<div className='total_accounts'>
				<div className='total_balance'>
					<p className='text'>Accounts Total:</p>
					<p className='amount'>€ 12000</p>
				</div>

				<div className='incame_expanse'>
					<p>Total Balance</p>
					<div className='incame'>
						<p>Income</p>
						<p>0,00</p>
					</div>
					<div className='expanse'>
						<p>Expense</p>
						<p>0,00</p>
					</div>

				</div>
			</div>

		</div>
  	);
}

export default Accounts;