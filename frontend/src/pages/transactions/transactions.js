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


	}, [])


  	return (
		<div className='container'>
			<div className='transaction'>
				<div className='heading'>
					<div className='category'><GiIcons.GiKnifeFork /></div>
					<div className='name'>Dinner</div>
					<div className='amount'>€ 20,00</div>
				</div>
				<div className='date'>20-04-2024</div>
			</div>
		</div>
  	);
}

export default Transactions;