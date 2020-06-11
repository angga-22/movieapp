
//reques api from here
import { LOGIN_SUCCESS, LOGIN_FAILED} from './types';
import axios from 'axios';
const baseUrl = 'https://my-todo-mini-project.herokuapp.com/MyTodoAPI';
//if use thunk memang kayak gitu 
export const login = data => async dispatch => {
	try{
		const res = await axios.post('${baseUrl}/user/login', data)
		//menyimpan token ke local storage
		localStorage.setItem('token', res.data.token)
		dispatch({
			type: LOGIN_SUCCESS
		})
		console.log(res)
	}catch (err){
		console.log(err)
		dispatch({
			type: LOGIN_FAILED
		})
	}
}