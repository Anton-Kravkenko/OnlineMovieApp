import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { BiUser } from 'react-icons/bi'
import { HiOutlineHome } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { RiCompass3Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { ILayout } from './Layout.interface'
import './Layout.styles.scss'


const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className, havePadding }) => {
	let activeStyle: object = {
		color: 'white'
	}
	return <div className={clsx('Wrapper', className, {
		'LayoutPadding': havePadding
	})}>{children}
		
		<div className='navigationBar'>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/'}> <HiOutlineHome className='navigateIcons' /></NavLink>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/search'}> <RiCompass3Line className='navigateIcons' /> </NavLink>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/Favorites'}> <MdFavoriteBorder className='navigateIcons' /> </NavLink>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/Auth'}> <BiUser className='navigateIcons' /></NavLink>
		
		
		</div>
	</div>
	
}


export default Layout