//bikin case kalo dia success
import  { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types';
// //
const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	isAuthenticate: false,
}

//create reducer nya. we need state parameters
const login = (state = initialState, action) => {
	switch(action.type) {
		default:
			return{
				...state
			}
		//tinggal di cek
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticate: true
			}
		case LOGIN_FAILED:
			return {
				...state,
				isAuthenticate: false,
				//kalo gagal kita remove local storage
				token: localStorage.removeItem('token')
			}
		}
}

export default login;