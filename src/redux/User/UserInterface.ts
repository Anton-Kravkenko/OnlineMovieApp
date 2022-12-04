import { IUser } from '../../shared/types/Iuser.interface'

export interface IUserState {
	email: string
	isAdmin: string
}

export interface IinitialState {
	user: IUserState | null
	isLoading: boolean
	
}


export interface IemailPassword {
	email: string,
	password: string
}

export interface IauthResponce extends Itokens {
	user: IUser & {
		isAdmin: any
	}
}

export interface Itokens {
	accessToken: string
	refreshToken: string
}