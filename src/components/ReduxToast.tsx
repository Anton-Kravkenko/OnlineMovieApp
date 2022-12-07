import { FC } from 'react'
import ReduxToastrd from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return <ReduxToastrd
		newestOnTop={true}
		progressBar={true}
		closeOnToastrClick={true}
		timeOut={1000}
		transitionIn={'fadeIn'}
		transitionOut={'fadeOut'}
	/>
}

export default ReduxToast