import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './navbar.css';
import { IconContext } from 'react-icons';


function Navbar() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <div className='logo_container'>
                        <img src={'./images/logo.png'} alt='logo' className='logo'/>
                    </div>

                    <div className='account_container'>
                        <img src={'./images/default.png'} alt='user_pfp' className='user_pfp'/>
                        <p className='user_name'>Yaya</p>
                    </div>
                </div>
                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        {
                            SidebarData.map((item, index) => { return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
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