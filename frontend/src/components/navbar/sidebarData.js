import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Accounts',
		path: '/accounts',
		icon: <Io5Icons.IoCard />,
		cName: 'nav-text'
	},
	{
		title: 'Debiti',
		path: '/debiti',
		icon: <GiIcons.GiPayMoney />,
		cName: 'nav-text'
	},
	{
		title: 'Transazioni',
		path: '/transazioni',
		icon: <GrIcons.GrTransaction />,
		cName: 'nav-text'
	},
	{
		title: 'Categorie',
		path: '/categorie',
		icon: <MdIcons.MdOutlineCategory />,
		cName: 'nav-text'
	}
];