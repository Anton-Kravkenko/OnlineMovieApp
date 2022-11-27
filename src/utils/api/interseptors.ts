import axios from 'axios'
import { Api_url } from '../api.config'

const instance = axios.create({
	baseURL: Api_url,
	headers: {
		'Content-Type': 'application/json'
		
	}
})

// instance.interceptors.request.use(async () => {
// const accesToken = await
// })