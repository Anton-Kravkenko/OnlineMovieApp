import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { AiOutlineUnlock } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { RiCompass3Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { UseAction } from '../../shared/hook/useAction'
import { useAuth } from '../../shared/hook/useAuth'
import ReduxToast from '../ReduxToast'
import './Layout.styles.scss'
import { ILayout } from './Layout.types'


const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className, havePadding, HaveBottomPadding }) => {
	const { user } = useAuth()
	const { logout } = UseAction()
	let activeStyle: object = {
		color: 'black'
	}
	return <div className={clsx('Wrapper', className, {
		'LayoutPadding': havePadding, 'LayoutBottomPadding': HaveBottomPadding
	})}>{children}
		
		
		<div className='navigationBar'>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/'}> <HiOutlineHome className='navigateIcons' /></NavLink>
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/trending'}> <RiCompass3Line className='navigateIcons' /> </NavLink>
			
			<NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/search'}> <BiSearchAlt className='navigateIcons' /></NavLink>
			
			{user?.isAdmin ? <NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/Favorites'}> <MdFavoriteBorder className='navigateIcons' /> </NavLink> : null}
			{user?.isAdmin ? <NavLink style={({ isActive }) =>
					isActive ? activeStyle : undefined
				} to={'/AdminPage'}> <AiOutlineUnlock className='navigateIcons' /></NavLink> :
				
				null
				
			}
			
			
			{user ? <a onClick={() => logout()}> <FiLogOut className='navigateIcons' /></a> :
				<NavLink style={({ isActive }) =>
					isActive ? activeStyle : undefined
				} to={'/Login'}> <FiLogIn className='navigateIcons' /></NavLink>
				
			}
		
		</div>
		<ReduxToast />
	</div>
	
	
}


export default Layout