import { AxiosError, AxiosResponse } from 'axios'
import { ErrorApi } from './error.api'

export const RequestApi = async <T>() => {
	const OnSuccess = (responce: AxiosResponse<T>) => {
		const { data } = responce
		return data
	}
	
	
	const OnError = (Error: AxiosError<T>) => {
		console.log(ErrorApi(Error))
		return Promise.reject(Error)
	}


//instance
}