import Cookies from 'js-cookie'
import { IauthResponce } from '../../redux/User/UserInterface'


export const RemoveFromStorage = async () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}
export const SaveToLocal = async (data: IauthResponce) => {
	SaveToCookie(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}


export const SaveToCookie = async (data: IauthResponce) => {
	Cookies.set('accessToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
	
}