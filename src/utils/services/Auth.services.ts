import Cookies from 'js-cookie'
import { RemoveFromStorage, SaveToLocal } from '../api/helper.auth'
import { axiosClassic } from '../api/interseptors'

export const AuthServices = {
	async register(email: string, password: string) {
		const responce = await axiosClassic.post('/auth/register', { email, password })
		if (responce.data.accessToken) {
			await SaveToLocal(responce.data)
		}
		
		return responce
	},
	async login(email: string, password: string) {
		const responce = await axiosClassic.post('/auth/login', { email, password })
		if (responce.data.accessToken) {
			await SaveToLocal(responce.data)
		}
		
		return responce
	},
	logout() {
		RemoveFromStorage()
		localStorage.removeItem('user')
	},
	
	async getNewToken() {
		const RefreshToken = Cookies.get('refreshToken')
		const responce = await axiosClassic.post('/auth/login/access-token', { RefreshToken }, { headers: { 'Content-Type': 'application/json' } })
		if (responce.data.accessToken) {
			await SaveToLocal(responce.data)
		}
		
		return responce
	}
	
}