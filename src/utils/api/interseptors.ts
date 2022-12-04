import axios from 'axios'
import Cookies from 'js-cookie'
import { toastr } from 'react-redux-toastr'
import { AuthServices } from '../services/Auth.services'
import { REACT_APP_Api_url } from './api.config'
import { ErrorApi } from './error.api'
import { RemoveFromStorage } from './helper.auth'

const instance = axios.create({
	baseURL: REACT_APP_Api_url,
	headers: {
		'Content-Type': 'application/json'
		
	}
})
export const axiosClassic = axios.create({
	baseURL: REACT_APP_Api_url,
	headers: {
		'Content-Type': 'application/json'
	}
})


 instance.interceptors.request.use((config): any => {
 const accessToken = Cookies.get('accessToken')
	 if (config.headers && accessToken) {
		 config.headers.Authorization = `Bearer ${accessToken}`
	 }
	 
	 return config
 })

instance.interceptors.response.use((config): any => config, async error => {
const OriginalRequest = error.config
	if ((error.response.status === 401 || ErrorApi(error) === 'jwt expired' || ErrorApi(error) === 'jwt must be provided' ) && error.config && !error.config.isRetry ) {
		OriginalRequest.isRetry = true
		try {
			await AuthServices.getNewToken()
			return instance.request(OriginalRequest)
		} catch (e) {
if(ErrorApi(e) === 'jwt expired') RemoveFromStorage()
		}
	}
throw error
})

export default instance