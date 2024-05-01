import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import FormAddAccount from '../../components/forms/accounts/addAccount'

import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";

import './account.css'

function Accounts() {

	const [accountsArray, setAccountsArray] = useState([]);
	const buttonRef = useRef(null)

	useEffect(() => {

		axios.post('http://localhost:3001/api/accounts/', { emailAccount: sessionStorage.getItem('emailAuth')}, { headers: { "Content-Type": "application/json" } })
		.then((response) => {
			
			const iconObj = {
				"Cash":		<BsIcons.BsCashStack />,
				"Bank": 	<BsIcons.BsBank2 />,
				"Card": 	<ImIcons.ImCreditCard />,
				"Savings": 	<MdIcons.MdSavings /> 
			}

			const accounts = response.data.map((account, index) => {
				const { typology, name, amount } = account;
				const key = `${typology}-${index}`;
	  
				return (
				  	<div className='accounts_container' key={key}>
						<div className='header_accounts'>
					  		<div className='details'>
								<div className='holder'>{name}</div>
								<div className='type'>{typology}</div>
					 		</div>
					  		<div className='icon'> {iconObj[typology]} </div>
						</div>
						<div className='info_accounts'>
					  		<div className='total_amount'>€ {amount}</div>
					  		<div className='accounts_movments'>
								<div className='incame'>
						  			<p className='text'><IoIcons.IoMdArrowRoundUp fill='green' className='arrow'/>Incame</p>
						  			<p className='total'>€ 0,00</p>
								</div>
								<div className='expense'>
						  			<p className='text'><IoIcons.IoMdArrowRoundDown fill='red' className='arrow'/>Expense</p>
						  			<p className='total'>€ 0,00</p>
								</div>
					  		</div>
						</div>
				  	</div>
				);
			});
	  
			setAccountsArray(accounts);

		})

		const current_button = buttonRef.current

        function openForm() {
            window.location.replace('http://localhost:3000/accounts_create')
        }

        current_button.addEventListener('click', openForm)
        return () => { current_button.removeEventListener('click', openForm) }

	}, [])


	return (
		<div className='container'>

			<div className='box_container'>
				{accountsArray}
			</div>
			
			<div ref={buttonRef}>
                <IoIcons.IoMdAdd className='add' />
            </div>

		</div>
  	);
}

export default Accounts;