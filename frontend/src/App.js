import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Products from './pages/products/products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;