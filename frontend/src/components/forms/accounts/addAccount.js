import React, { useEffect, useRef } from 'react';
import './addAccount.css';

import * as IoIcons from "react-icons/io";
import { IconContext } from 'react-icons';

function FormAddAccount() {

    return (
        <div className='container'>

            <div className='form_accounts_container'>

                    <form className="create_accounts" id="form_accounts" method="post">
                    <div className='inputs_accounts_container'>
                        <div className='input_container'>
                            <p className='label'>Account Name</p>
                            <input type='text' name='accounts_name' className='input' placeholder={'Account Name'} required></input>
                        </div>

                        <div className='input_container'>
                            <p className='label'>Account Typology</p>
                            <select name='accounts_typology' form='form_accounts' className='input'>
                                
                                <option selected disabled hidden>Select a typology for the account.</option>
                                <option value={'Cash'}>Cash</option>
                                <option value={'Bank'}>Bank</option>
                                <option value={'Savings'}>Savings</option>
                                <option value={'Card'}>Card</option>

                            </select>
                        </div>
                        
                        <div className='input_container'>
                            <p className='label'>Account Amount</p>
                            <input type='text' name='accounts_name' className='input' defaultValue={0}></input>
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