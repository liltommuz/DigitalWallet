import React from 'react';

import * as BsIcons from "react-icons/bs";

import './account.css'

function Accounts() {
  	return (
		<div className='container'>
			
	  		<h1>Accounts</h1>

			<div className='accounts_container'>
				<div className='header_accounts'>

					<div className='details'>
						<div className='holder'>Tommaso</div>
						<div className='type'>Cash</div>
					</div>
					<div className='icon'>
						<BsIcons.BsCashStack /> 
					</div>


				</div>

				<div className='info_accounts'>

					<div className='total'>€ 100,00</div>
					<div className='accounts_movments'>

						<div className='incame'>
							<p className='text'>Incame</p>
							<p className='total'>€ 0,00</p>
						</div>

						<div className='expanse'>
							<p className='text'>Expanse</p>
							<p className='total'>€ 0,00</p>
						</div>
					</div>

				</div>

			</div>

		</div>
  	);
}

export default Accounts;