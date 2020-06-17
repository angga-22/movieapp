import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED } from "../actions/types";

const initialState = {
	token: localStorage.getItem("access_token"),
	error: null,
	isAuthenticate: false
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state
			}
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticate: true,
				userProfile: action.payload
			}
		case LOGIN_FAILED:
			return {
				...state,
				isAuthenticate: false,
				token: localStorage.removeItem("access_token")
			}
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuthenticate: true
			}
		case REGISTER_FAILED:
			return {
				...state,
				isAuthenticate: false,
				token: localStorage.removeItem("access_token")
			}
	}
}

export default auth;