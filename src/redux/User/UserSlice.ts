import { createSlice } from '@reduxjs/toolkit'
import { GetStoreLocalstorage } from '../../utils/localstorage'


import { CheckUser, login, logout, register } from './userAction'
import { IinitialState } from './UserInterface'

const initialState: IinitialState = {
	user: GetStoreLocalstorage('user'),
	isLoading: false
}
// тут мы просто говорим что будет при загрузке, выполнению и ошибке.
export const userSlice = createSlice({
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(CheckUser.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	},
	initialState,
	name: 'user',
	reducers: {}
})

export const { reducer } = userSlice
