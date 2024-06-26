import React from 'react';

import './home.css';

import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";

import { IconContext } from 'react-icons';

function Home() {
  	return (
		<div className='container'>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className='home_container'>
					<div className='total_balance'>
						
						<p className='welcome'>Benvenuto {sessionStorage.getItem('username')}</p>
						<div className='explore'>
							In questa pagina potrai controllare in maniera veloce il traffico del tuo denaro. <br />
							Nella tabella sottostante potrai visualizzare quanti soldi hai speso e quanti ne hai guadagnati. <br />
							Se invece desidere vedere più dettagli recati nella pagina <span className='link' onClick={() => {window.location.replace('/summary')}}>Sommario</span>.

							<br /> <br />

							Nella zona laterale presente sulla destra saranno disponibili le tue ultime 5 transazioni. <br />
							Se desederi vedere più dettagli riguardanti le tue transazioni recati nella pagina <span className='link' onClick={() => {window.location.replace('/transactions')}}>Transazioni</span>.
			
						</div>

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
		
					
				</div>

			</IconContext.Provider>
		</div>
  	);
}

export default Home;