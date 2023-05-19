import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as ImIcons from 'react-icons/im';


export const SidebarData = [
	{
		title: "About Us",
		path: "/about-us",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <ImIcons.ImPhone />,
	},
	{
		title: "Login",
		path: '/login',
		icon: <AiIcons.AiOutlineLogin />
    }
	
];
