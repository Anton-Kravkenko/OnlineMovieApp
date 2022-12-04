import { reducer as toastrReducer } from 'react-redux-toastr'

import { reducer as userReducer } from './User/UserSlice'

export const reducers = {
	user: userReducer,
	toastr: toastrReducer
}
