import React from 'react';

import './home.css';

import * as TiIcons from "react-icons/ti";

function Home() {
  	return (
		<div className='container'>
			
	  		<h1>Welcome tommuz</h1>
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

				<p className='textTitle' >TOTAL BALANCE</p>
				<div className='incame_expanse'>
					<div className='incame'>
						<p className='text'> 
							<TiIcons.TiArrowSortedUp fill='green' className='arrow'/>Income
						</p>
						<p className='amount'>€ 0,00</p>
					</div>
					<div className='expanse'>
						<p className='text'> 
							<TiIcons.TiArrowSortedDown fill='red' className='arrow'/> Expense
						</p>
						<p className='amount'>€ 0,00</p>
					</div>

				</div>
			</div>

		</div>
  	);
}

export default Home;