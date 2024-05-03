import React, { useEffect, useRef } from 'react';
import './addAccount.css';

import axios from 'axios'

function FormAddAccount() {

    const formRef = useRef(null)

    useEffect(() => {

        let form = formRef.current

        const handleSubmit = (event) => {
            event.preventDefault()
			event.stopPropagation()
	
			const formData = new FormData(form)

            formData.append('emailAccount', sessionStorage.getItem('emailAuth'))

			axios.post('http://localhost:3001/api/accounts/create', formData, { headers: { "Content-Type": "application/json" } })
			.then((response) => {

				if(response.data?.UserAccountNotFound === true) return
                window.location.replace('http://localhost:3000/accounts')


			})
			.catch((error) => {
				console.error('Error:', error)
			})
        }

        form.addEventListener('submit', handleSubmit)
        return () => { form.removeEventListener('submit', handleSubmit)}

    }, [])

    return (
        <div className='container'>

            <div className='form_accounts_container'>

                <form className="create_accounts" id="form_accounts" method="post" ref={formRef}>
                    <div className='inputs_accounts_container'>
                        <div className='input_container'>
                            <p className='label'>Account Name</p>
                            <input type='text' name='accounts_name' className='input' placeholder={'Account Name'} required></input>
                        </div>

                        <div className='input_container'>
                            <p className='label'>Account Typology</p>
                            <select name='accounts_typology' className='input' required>
                                
                                <option value={'Cash'}>Cash</option>
                                <option value={'Bank'}>Bank</option>
                                <option value={'Savings'}>Savings</option>
                                <option value={'Card'}>Card</option>

                            </select>
                        </div>
                        
                        <div className='input_container'>
                            <p className='label'>Account Amount</p>
                            <input type="text" name="accounts_amount" className="input" defaultValue={0} min={0} pattern="[0-9]+(\.[0-9]+)?" />
                        </div>

                        <div className='button_accounts_container'>

                            <button type='submit' className='button_accounts'>Confirm</button>

                        </div>

                    </div>
                </form>

            </div>

        </div>
    )

}

export default FormAddAccount;