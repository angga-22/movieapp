import { LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
import axios from "axios";
const baseUrl = "https://my-todo-mini-project.herokuapp.com/MyTodoAPI";

export const login = data => async dispatch => {
	try {
		const res = await axios.post(`${baseUrl}/user/login`, data)
		localStorage.setItem("access_token", res.data.data.access_token)
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
