import { LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_SUCCESS, REGISTER_FAILED, GETUSER_PROFILE } from "./types";
import axios from "axios";
const baseUrl = "https://movie-app-mini-project-2.herokuapp.com";

export const login = data => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/user/login`, data)
		localStorage.setItem("access_token", res.data.data.access_token)
		// props.history.push("/login")
		alert("Sign in success!")
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
		alert("Sign up success!")
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

export const getUser = (data) => async dispatch => {
	try {
		const res = await axios.get(`${baseUrl}/user/profile`, data)
		console.log(res.data.data.name)
		console.log(res.status)
		if (res.status === 201) {
			localStorage.setItem("userName", res.data.data.name)
			localStorage.setItem("token", res.data.data.token)
			console.log(localStorage.getItem("data"))
			console.log("run kan")
			dispatch({
				type: LOGIN_SUCCESS,
			})
		}
	} catch (error) {
		throw (error);
	}
}