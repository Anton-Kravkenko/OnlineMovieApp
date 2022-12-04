import { FC } from 'react'
import ReduxToastrd from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return <ReduxToastrd
		newestOnTop={false}
		progressBar={true}
		closeOnToastrClick={true}
		timeOut={3000}
		transitionIn={'fadeIn'}
		transitionOut={'fadeOut'}
	/>
}

export default ReduxToast