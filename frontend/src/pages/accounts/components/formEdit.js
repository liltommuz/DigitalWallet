import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'


function FormEdit() {

	const formRef = useRef(null)

	const name = sessionStorage.getItem('edit_name')
	const typology = sessionStorage.getItem('edit_typology')
	const amount = sessionStorage.getItem('edit_amount')
	const key = sessionStorage.getItem('edit_key')

    useEffect(() => {

		const form = formRef.current

		const handleSubmit = (event) => {
			event.preventDefault()

			const formData = new FormData(form)
			formData.append('emailAccount', sessionStorage.getItem('emailAuth'))

			axios.post('http://localhost:3001/api/accounts/update', formData, { headers: { "Content-Type": "application/json" } })
			.then((response) => {
				if(response.data?.error === 'AccountNotFound' || response.data?.error === 'NoAccount') return
				window.location.reload()

			})
			
		}

		form.addEventListener('submit', handleSubmit)
		return () => { form.removeEventListener('submit', handleSubmit) }


    }, [])

    return (
		<div className='edit_form'>
			<div className='form_edit_accounts_container'>
				<form className="create_edit_accounts" id="form_edit_accounts" method="post" ref={formRef}>
					<div className='inputs_edit_accounts_container'>

						<input type='text' defaultValue={key} name='accountId' style={{display:'none'}}></input>

						<div className='input_container'>
							<p className='label'>Account Name</p>
							<input type='text' name='edit_accounts_name' className='input' placeholder={'Account Name'} defaultValue={name} required ></input>
						</div>
						<div className='input_container'>
							<p className='label'>Account Typology</p>
							<select name='edit_accounts_typology' className='input' defaultValue={typology} required >
								<option value={'Cash'}>Cash</option>
								<option value={'Bank'}>Bank</option>
								<option value={'Savings'}>Savings</option>
								<option value={'Card'}>Card</option>
							</select>
						</div>
						<div className='input_container'>
							<p className='label'>Account Amount</p>
							<input type="text" name="edit_accounts_amount" className="input" defaultValue={amount} min={0} pattern="[0-9]+(\.[0-9]+)?" />
						</div>
						<div className='button_edit_accounts_container'>
							<button type='submit' className='button_edit_accounts'>Confirm</button>
						</div>
					</div>
				</form>
			</div>
		</div>
     )
}

export default FormEdit