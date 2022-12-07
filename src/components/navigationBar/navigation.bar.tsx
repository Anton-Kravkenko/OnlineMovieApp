import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { HiOutlineHome } from 'react-icons/hi'
import { MdFavoriteBorder } from 'react-icons/md'
import { RiCompass3Line } from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import { UseAction } from '../../shared/hook/useAction'
import { useAuth } from '../../shared/hook/useAuth'

const NavigationBar = () => {
	const { user } = useAuth()
	const navigate = useNavigate()
	const { logout } = UseAction()
	let activeStyle: object = {
		color: 'black'
	}
	return <div>
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
			
			{user ? <NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/Favorites'}> <MdFavoriteBorder className='navigateIcons' /> </NavLink> : null}
			
			
			{user ? <a onClick={() => logout()}> <FiLogOut className='navigateIcons' /></a> :
				<NavLink style={({ isActive }) =>
					isActive ? activeStyle : undefined
				} to={'/Login'}> <FiLogIn className='navigateIcons' /></NavLink>
				
			}
		
		</div>
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
			
			{user ? <NavLink style={({ isActive }) =>
				isActive ? activeStyle : undefined
			} to={'/Favorites'}> <MdFavoriteBorder className='navigateIcons' /> </NavLink> : null}
			
			
			{user ? <a onClick={() => logout()}> <FiLogOut className='navigateIcons' /></a> :
				<NavLink style={({ isActive }) =>
					isActive ? activeStyle : undefined
				} to={'/Login'}> <FiLogIn className='navigateIcons' /></NavLink>
				
			}
		
		
		</div>
	</div>
}

export default NavigationBar