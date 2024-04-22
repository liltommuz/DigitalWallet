import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SidebarData from './sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';


function Navbar() {

    const accountNameRef = useRef(null)

    useEffect(() => {

        const currentHref = window.location.href
        const currentEmailAuth = sessionStorage.getItem('emailAuth')
        const sessionName = sessionStorage.getItem('username')
        const currentAccountName = accountNameRef.current

        sessionName === null || sessionName === 'undefined' ? currentAccountName.innerHTML = 'Login' : currentAccountName.innerHTML = `Benvenuto ${sessionName}`

        window.addEventListener('load', (event) => {
			
			event.stopImmediatePropagation()
			event.preventDefault()
			
            if(currentHref !== 'http://localhost:3000/login' && [null, 'undefined'].includes(currentEmailAuth)) {
                window.location.replace('http://localhost:3000/login')

            }

        })

    }, [])

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='logo_container'>
                        <img src={'./images/logo.png'} alt='logo' className='logo'/>
                    </div>

                    <div className='account_container'>
                        
                        <p className='user_name' ref={accountNameRef}>A</p>
                    </div>
                </div>
                <nav className='nav_menu'>
                    <ul className='nav_menu_items'>
                        {
                            SidebarData.map((item, index) => { return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        <div className='icon'>{item.icon}</div>
                                        <div className='text'>{item.title}</div>
                                    </Link>
                                </li>
                            )})
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;