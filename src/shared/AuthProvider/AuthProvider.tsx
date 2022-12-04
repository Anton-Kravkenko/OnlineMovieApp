import Cookies from 'js-cookie'
import { FC, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { CheckUser } from '../../redux/User/userAction'
import { UseAction } from '../hook/useAction'
import { useAuth } from '../hook/useAuth'
import { TypeComponentsAuthField } from '../types/auth.types'

const AuthProvider: FC<TypeComponentsAuthField> = ({children, Components: {isOnlyAdmin, isOnlyUser}}) => {
	const {user} = useAuth()
	const {logout} = UseAction()
	const location = useLocation();
	
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) 	CheckUser()
	}, [])
	
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (refreshToken && user) logout()
	}, [location])
	return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : null
}

export default AuthProvider