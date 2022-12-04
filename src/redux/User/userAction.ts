import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'
import { Navigate, useNavigate } from 'react-router-dom'
import { ErrorApi } from '../../utils/api/error.api'
import { AuthServices } from '../../utils/services/Auth.services'
import { IauthResponce, IemailPassword } from './UserInterface'

// все запросы на сервер и их обработка
export const register = createAsyncThunk<IauthResponce, IemailPassword>('auth/register', async ({
	                                                                                                email,
	                                                                                                password
                                                                                                }, thunkAPI) => {
	try {
		const responce = await AuthServices.register(email, password)
		toastr.success('Success', 'Register final!')
		return responce.data
	} catch (e) {
		toastr.error('Error', ErrorApi(e))
		console.log(e)
		return thunkAPI.rejectWithValue(e)
	}
})


export const login = createAsyncThunk<IauthResponce, IemailPassword>('auth/login', async ({
	                                                                                          email,
	                                                                                          password
                                                                                          }, thunkAPI) => {
	try {
		const responce = await AuthServices.login(email, password)
		toastr.success('Success', 'Login final!')
		return responce.data
	} catch (e) {
		toastr.error('Error', ErrorApi(e))
		return thunkAPI.rejectWithValue(e)
	}
})


export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthServices.logout()
	toastr.info('Logout', 'You Logout!')
})


export const CheckUser = createAsyncThunk<IauthResponce>('{{ _.URL }}/auth/login/access-token', async (_, thunkAPI) => {
	try {
		const responce = await AuthServices.getNewToken()
		return responce.data
	} catch (e) {
		if (ErrorApi(e) === 'jwt-expired') {
			thunkAPI.dispatch(logout())
			toastr.error('Error', 'jwt-expired')
			
		}
		toastr.error('Error', ErrorApi(e))
		
		return thunkAPI.rejectWithValue(e)
	}
})
