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
	const [selectedAccount, setSelectedAccount] = useState(null);

	const buttonRef = useRef(null)
	const editFormRef = useRef(null)

	useEffect(() => {
		const handleOutsideClick = (event) => {
            if (editFormRef.current && !editFormRef.current.contains(event.target)) {
                // Clicked outside the edit form
                setSelectedAccount(null); // Close the form
            }
        };


        

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

				const handleAccountClick = (account) => {
					setSelectedAccount(account);
				};
				
	  
				return (
				  	<div className='accounts_container' key={key} onClick={handleAccountClick}>
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
		document.addEventListener('click', handleOutsideClick);

	}, [])
	

	return (
		<div className='container'>

			<div className='box_container'>
				{accountsArray}
			</div>

			<div className='overlay'></div>
			
			<div className='edit_form'>
				<div className='form_edit_accounts_container' ref={editFormRef}>
				{selectedAccount && (
					<div className='edit_form'>
						<div className='form_edit_accounts_container'>
							<form className="create_edit_accounts" id="form_edit_accounts" method="post">
								<div className='inputs_edit_accounts_container'>
									<div className='input_container'>
										<p className='label'>Account Name</p>
										<input type='text' name='edit_accounts_name' className='input' placeholder={'Account Name'} value={selectedAccount.name} required ></input>
									</div>
									<div className='input_container'>
										<p className='label'>Account Typology</p>
										<select name='edit_accounts_typology' className='input' required defaultValue={selectedAccount.typology}>
											<option value={'Cash'}>Cash</option>
											<option value={'Bank'}>Bank</option>
											<option value={'Savings'}>Savings</option>
											<option value={'Card'}>Card</option>
										</select>
									</div>
									<div className='input_container'>
										<p className='label'>Account Amount</p>
										<input type="text" name="edit_accounts_amount" className="input" defaultValue={selectedAccount.amount} min={0} pattern="[0-9]+(\.[0-9]+)?" />
									</div>
									<div className='button_edit_accounts_container'>
										<button type='submit' className='button_edit_accounts'>Confirm</button>
									</div>
								</div>
							</form>
						</div>
					</div>
            		)}
				</div>
			</div>

			{/* <div className='add_form'>
				<div className='form_add_accounts_container'>

					<form className="create_add_accounts" id="form_add_accounts" method="post">
						<div className='inputs_add_accounts_container'>
							<div className='input_container'>
								<p className='label'>Account Name</p>
								<input type='text' name='add_accounts_name' className='input' placeholder={'Account Name'} required></input>
							</div>

							<div className='input_container'>
								<p className='label'>Account Typology</p>
								<select name='add_accounts_typology' className='input' required>
									
									<option value={'Cash'}>Cash</option>
									<option value={'Bank'}>Bank</option>
									<option value={'Savings'}>Savings</option>
									<option value={'Card'}>Card</option>

								</select>
							</div>
							
							<div className='input_container'>
								<p className='label'>Account Amount</p>
								<input type="text" name="add_accounts_amount" className="input" defaultValue={0} min={0} pattern="[0-9]+(\.[0-9]+)?" />
							</div>

							<div className='button_add_accounts_container'>

								<button type='submit' className='button_add_accounts'>Confirm</button>

							</div>

						</div>
					</form>

				</div>
			</div> */}

			
			<div ref={buttonRef}>
                <IoIcons.IoMdAdd className='add' />
            </div>

		</div>
  	);
}

export default Accounts;