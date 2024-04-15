import React from 'react';
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