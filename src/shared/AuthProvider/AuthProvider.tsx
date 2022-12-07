import Cookies from 'js-cookie'
import { FC, PropsWithChildren, useEffect } from 'react'
import { toastr } from 'react-redux-toastr'
import { CheckUser } from '../../redux/User/userAction'
import { ErrorApi } from '../../utils/api/error.api'
import { UseAction } from '../hook/useAction'
import { useAuth } from '../hook/useAuth'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { user } = useAuth()
	const { logout } = UseAction()
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) {
			try {
				CheckUser()
			} catch (e) {
				toastr.error('Error', ErrorApi(e))
			}
		}
	}, [])
	
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [])
	
	return <>{children}</>
	
}

export default AuthProvider