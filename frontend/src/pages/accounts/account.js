import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import FormEdit from './components/formEdit';
import FormAdd from './components/formAdd';

import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";

import './account.css'

function Accounts() {

	const [accountsArray, setAccountsArray] = useState([]);
	const [isAddShot, setAddShow] = useState(false) 
	const [isEditShow, setEditShow] = useState(false)

	const buttonAddRef = useRef(null)
	const overlayRef = useRef(null)

	useEffect(() => {

		const overlay = overlayRef.current;
		const buttonAdd = buttonAddRef.current

		const handleAccountClick = (event, account) => {
			event.stopPropagation()

			sessionStorage.setItem('edit_name', account.name)
			sessionStorage.setItem('edit_amount', account.amount)
			sessionStorage.setItem('edit_typology', account.typology)
			sessionStorage.setItem('edit_key', account.account_id)
			
			overlay.style.display = 'block'
			setEditShow(false)
		}

		const handleAddClick = (event) => {
			event.stopPropagation()
			overlay.style.display = 'block'
			setAddShow(false)

		}

		const handleOutsideClick = (event) => {
			const formEditContainer = document.querySelector('.form_edit_accounts_container')
			const formAddContainer = document.querySelector('.form_add_accounts_container')

			const isEditForm = !formEditContainer || !formEditContainer.contains(event.target)
			const isAddForm = !formAddContainer || !formAddContainer.contains(event.target)

			if (isEditForm &&  isAddForm) {
				overlay.style.display = 'none';
				setEditShow(false);
				setAddShow(false);
			}	
		}

		axios.post('http://localhost:3001/api/accounts/', { emailAccount: sessionStorage.getItem('emailAuth')}, { headers: { "Content-Type": "application/json" } })
		.then((response) => {
			
			const iconObj = { "Cash": <BsIcons.BsCashStack />, "Bank": <BsIcons.BsBank2 />, "Card": <ImIcons.ImCreditCard />, "Savings": 	<MdIcons.MdSavings /> }
			const accounts = response.data.map((account) => {

				const { typology, name, amount, account_id } = account;

				return (
					<div className='accounts_container' key={account_id} onClick={(event) => handleAccountClick(event, account)}>
						<div className='header_accounts'>
							<div className='details'>
								<div className='holder'>{name}</div>
								<div className='type'>{typology}</div>
							</div>
							<div className='icon'> {iconObj[typology]} </div>
						</div>
						<div className='total_amount'>€ {amount}</div>
						<div className='info_accounts'>

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

							<div className='button_edit_container'>
								<button className='edit_options'>SETTINGS</button>
							</div>

						</div>
					</div>
				);

			});
	  
			setAccountsArray(accounts);
		})
		
		buttonAdd.addEventListener('click', handleAddClick)
		document.addEventListener('click', handleOutsideClick)

		return () => { 
			document.removeEventListener('click', handleOutsideClick)
			buttonAdd.removeEventListener('click', handleAddClick)
		}

	}, [])


	return (
		<div className='container'>

			<div className='box_container'>
				{accountsArray}
			</div>

			<div className='overlay' ref={overlayRef}></div>
			
			{/* EditAccount Form & Container */}
			<div className='form_edit_accounts_container'>
				{isEditShow && <FormEdit />}
			</div>

			{/* AddAccount Form & Container */}
			<div className='form_add_accounts_container'>
				{isAddShot && <FormAdd />}
			</div>
			
			<div ref={buttonAddRef}>
                <IoIcons.IoMdAdd className='add' />
            </div>

		</div>
  	);
}

export default Accounts;