import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Accounts from './pages/accounts/account'
import Categories from './pages/categories/categories'
import Debts from './pages/debts/debts'
import Home from './pages/home/home';
import Transactions from './pages/transactions/transactions'
import Login from './pages/userAccount/login/login';
import Register from './pages/userAccount/register/register';

import Navbar from './components/navbar/navbar';

function App() {


	useEffect(() => {

		const currentHref = window.location.href
        const currentEmailAuth = sessionStorage.getItem('emailAuth')


		
		window.addEventListener('resize', () => {
			console.log(`Height: `, window.innerHeight)
			console.log(`Width: `, window.innerWidth)
		})

        window.addEventListener('load', (event) => {
			
            if(currentHref !== 'http://localhost:3000/login' && [null, 'undefined'].includes(currentEmailAuth)) {
				sessionStorage.setItem('notLogged', true)
                window.location.replace('http://localhost:3000/login')
                
            }
        })

		function handleLocationChange() {
			console.log('Location has changed:', window.location.href);
		}
		  
		  // Listen for the popstate event
		window.addEventListener('popstate', handleLocationChange);


	}, [])

		return (
			<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' 	 	element={<Home />} />
					<Route path='/accounts' element={<Accounts />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/debts' element={<Debts />} />
					<Route path='/transactions' element={<Transactions />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</Router>
			</>
  		);
}

export default App;