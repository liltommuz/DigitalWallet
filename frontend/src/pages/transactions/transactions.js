import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'

import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";

import './transactions.css'

function Transactions() {

	const [transactionsArray, setTransactionsArray] = useState([])


	useEffect(() => {

		axios.post('http://localhost:3001/api/transactions', {emailAccount: sessionStorage.getItem('emailAuth')}, { headers: { "Content-Type": "application/json" } })
		.then((response) => {

			



		})		

	}, [])


  	return (
		<div className='container'>
			<div className='transactions_container'>
			
			<div className='transaction' key={1}>
				<div className='heading'>
					<div className='category'><GiIcons.GiKnifeFork /></div>
					<div className='name'>Dinner</div>
					<div className='amount'>€ 20,00 <IoIcons.IoMdArrowDown className='arrow' color='red'/></div>
				</div>
					<div className='date'>Transaction Date: 20-04-2024</div>
				<div className='details'>
					<div className='account'>
						<div className='account_name'>Account Name: Hype</div>
						<div className='account_type'>Account Typology: Card</div>
					</div>
					<div className='button_edit_container'>
						<button className='transaction_options'>SETTINGS</button>
					</div>

				</div>
			</div>

			<div className='transaction'>
				<div className='heading'>
					<div className='category'><GiIcons.GiKnifeFork /></div>
					<div className='name'>Dinner</div>
					<div className='amount'>€ 20,00 <IoIcons.IoMdArrowDown className='arrow' color='red'/></div>
				</div>
					<div className='date'>Transaction Date: 20-04-2024</div>
				<div className='details'>
					<div className='account'>
						<div className='account_name'>Account Name: Hype</div>
						<div className='account_type'>Account Typology: Card</div>
					</div>
					<div className='button_edit_container'>
						<button className='transaction_options'>SETTINGS</button>
					</div>

				</div>
			</div>


			</div>

			<div>
                <IoIcons.IoMdAdd className='add' />
            </div>
			
		</div>
  	);
}

export default Transactions;