import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';

import * as GoIcons from "react-icons/go";

const SidebarData = []

if(sessionStorage.getItem('emailAuth') === null) {
	SidebarData.push(
		{
			title: 'Login',
			path: '/login',
			icon: <GoIcons.GoSignIn/>,
			className: 'nav-text'
		},
		{
			title: 'Register',
			path: '/register',
			icon: <CgIcons.CgPushChevronRight />,
			className: 'nav-text'
		}
	)
} else {
	SidebarData.push(
		{
			title: 'Home',
			path: '/',
			icon: <AiIcons.AiFillHome />,
			className: 'nav-text'
		},
		{
			title: 'Accounts',
			path: '/accounts',
			icon: <Io5Icons.IoCard />,
			className: 'nav-text'
		},
		{
			title: 'Debiti',
			path: '/debts',
			icon: <GiIcons.GiPayMoney />,
			className: 'nav-text'
		},
		{
			title: 'Transazioni',
			path: '/transactions',
			icon: <GrIcons.GrTransaction />,
			className: 'nav-text'
		},
		{
			title: 'Categorie',
			path: '/categories',
			icon: <MdIcons.MdOutlineCategory />,
			className: 'nav-text'
		},
		{
			title: 'Impostazioni',
			path: '/settings',
			icon: <IoIcons.IoMdSettings />,
			className: 'nav-text'
		}
	)
}

export default SidebarData