import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Notfound from '../../screens/notfound/notfound'
import { useAuth } from '../hook/useAuth'
import { TypeComponentsAuthField } from '../types/auth.types'

const CheckRole: FC<TypeComponentsAuthField> = ({ children, Components: { isOnlyAdmin, isOnlyUser }, }) => {
	const navigate = useNavigate()
	const {user} = useAuth()
	const Children = () => <>{children}</>
	
	
	if (!isOnlyAdmin && !isOnlyUser) return <Children/>
	
	if (user?.isAdmin) return <Children />
	
	
	if (isOnlyAdmin) return <Notfound/>
	const isUser = user && !user.isAdmin
	
	if (isUser && isOnlyUser) return <Children/>
	
	else {
		return <Notfound/>
	}
	
}

export default CheckRole