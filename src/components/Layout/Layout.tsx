import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import AuthProvider from '../../shared/AuthProvider/AuthProvider'
import NavigationBar from '../navigationBar/navigation.bar'
import ReduxToast from '../ReduxToast'
import './Layout.styles.scss'
import { ILayout } from './Layout.types'


const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className, havePadding, HaveBottomPadding }) => {
	
	return <div className={classNames('Wrapper', className, {
		'LayoutPadding': havePadding, 'LayoutBottomPadding': HaveBottomPadding
	})}>{children}
		
		<AuthProvider>
			<NavigationBar />
		</AuthProvider>
		<ReduxToast />
	
	</div>
	
	
}


export default Layout