import React from 'react'

export interface AuthTypes {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}


export type TypeComponentsAuthField = { children?: React.ReactNode, Components: AuthTypes}