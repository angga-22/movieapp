import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED } from "./types";
import axios from "axios";
const baseUrl = "https://movie-app-mini-project-2.herokuapp.com";

export const login = data => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/user/login`, data)
		localStorage.setItem("access_token", res.data.data.access_token)
		// props.history.push("/login")
		dispatch({
			type: LOGIN_SUCCESS
		})
	} catch (error) {
		console.log(error.status)
		dispatch({
			type: LOGIN_FAILED
		})
	}
}

export const register = data => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/user/register`, data)
		localStorage.setItem("access_token", res.data.data.access_token)
		dispatch({
			type: REGISTER_SUCCESS
		})
	} catch (error) {
		console.log(error.status)
		dispatch({
			type: REGISTER_FAILED
		})
	}
}
