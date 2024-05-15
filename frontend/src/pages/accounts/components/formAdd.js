import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'


function FormAdd() {

	const formRef = useRef(null)

    useEffect(() => {

		const form = formRef.current

		const handleSubmit = (event) => {
			event.preventDefault()

			const formData = new FormData(form)
			formData.append('emailAccount', sessionStorage.getItem('emailAuth'))

			axios.post('http://localhost:3001/api/accounts/create', formData, { headers: { "Content-Type": "application/json" } })
			.then((response) => {
				if(response.data?.error === 'AccountNotFound' || response.data?.error === 'NoAccount') return
				window.location.reload()

			})
			
		}

		form.addEventListener('submit', handleSubmit)
		return () => { form.removeEventListener('submit', handleSubmit) }

    }, [])

    return (
		<div className='add_form'>
            <div className='form_add_accounts_container'>
                <form className="create_add_accounts" id="form_add_accounts" method="post" ref={formRef}>

                    <div className='inputs_add_accounts_container'>

                        <div className='input_container'>

                            <p className='label'>Account Name</p>
                            <input type='text' name='add_accounts_name' className='input' placeholder={'Account Name'} required ></input>

                        </div>

                        <div className='input_container'>

                            <p className='label'>Account Typology</p>
                            <select name='add_accounts_typology' className='input' required defaultValue={'Cash'}>
                                <option value={'Cash'}>Cash</option>
                                <option value={'Bank'}>Bank</option>
                                <option value={'Savings'}>Savings</option>
                                <option value={'Card'}>Card</option>
                            </select>

                        </div>

                        <div className='input_container'>
                            <p className='label'>Account Amount</p>
                            <input type="text" name="add_accounts_amount" className="input" defaultValue={'0'} min={0} pattern="[0-9]+(\.[0-9]+)?" />
                        </div>

                        <div className='button_add_accounts_container'>
                            <button type='submit' className='button_add_accounts'>Confirm</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormAdd