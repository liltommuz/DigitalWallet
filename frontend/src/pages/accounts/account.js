import React from 'react';

import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import './account.css'

function Accounts() {
  	return (
		<div className='container'>
			
			<div className='box_container'>
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
						<div className='total_amount'>€ 100,00</div>
						<div className='accounts_movments'>
							<div className='incame'>
								<p className='text'><IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Incame</p>
								<p className='total'>€ 0,00</p>
							</div>
							<div className='expanse'>
								<p className='text'><IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/>Expanse</p>
								<p className='total'>€ 0,00</p>
							</div>
						</div>
					</div>
				</div>

				<div className='accounts_container'>
					<div className='header_accounts'>
						<div className='details'>
							<div className='holder'>Tommaso</div>
							<div className='type'>Bank</div>
						</div>
						<div className='icon'>
							<BsIcons.BsBank2 /> 
						</div>
					</div>
					<div className='info_accounts'>
						<div className='total_amount'>€ 100,00</div>
						<div className='accounts_movments'>
							<div className='incame'>
								<p className='text'><IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Incame</p>
								<p className='total'>€ 0,00</p>
							</div>
							<div className='expanse'>
								<p className='text'><IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/>Expanse</p>
								<p className='total'>€ 0,00</p>
							</div>
						</div>
					</div>
				</div>

				<div className='accounts_container'>
					<div className='header_accounts'>
						<div className='details'>
							<div className='holder'>Tommaso</div>
							<div className='type'>Card</div>
						</div>
						<div className='icon'>
							<ImIcons.ImCreditCard /> 
						</div>
					</div>
					<div className='info_accounts'>
						<div className='total_amount'>€ 100,00</div>
						<div className='accounts_movments'>
							<div className='incame'>
								<p className='text'><IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Incame</p>
								<p className='total'>€ 0,00</p>
							</div>
							<div className='expanse'>
								<p className='text'><IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/>Expanse</p>
								<p className='total'>€ 0,00</p>
							</div>
						</div>
					</div>
				</div>

				<div className='accounts_container'>
					<div className='header_accounts'>
						<div className='details'>
							<div className='holder'>Tommaso</div>
							<div className='type'>Savings</div>
						</div>
						<div className='icon'>
							<MdIcons.MdSavings /> 
						</div>
					</div>
					<div className='info_accounts'>
						<div className='total_amount'>€ 100,00</div>
						<div className='accounts_movments'>
							<div className='incame'>
								<p className='text'><IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Incame</p>
								<p className='total'>€ 0,00</p>
							</div>
							<div className='expanse'>
								<p className='text'><IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/>Expanse</p>
								<p className='total'>€ 0,00</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
  	);
}

export default Accounts;