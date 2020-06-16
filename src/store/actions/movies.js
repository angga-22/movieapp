import axios from 'axios';
import { GETMOVIES_ALL } from '../actions/types';
const baseUrl = "https://movie-app-mini-project-2.herokuapp.com";

export const fetchData = (data) => {
    return {
        type: GETMOVIES_ALL,
        data
    }
}

export const fetchAllMovies = () => {
    return (dispatch) => {
        return axios.get(`${baseUrl}/movie/show`)
            .then(response => {
                dispatch(fetchData(response.data.data.rows))
            })
            .catch(error => {
                throw (error);
            })
    }
}
// export const getAllMovies= () => async dispatch => {
// 	try {
// 		const res = await axios.get(`${baseUrl}/movie/show`, data)
// 		localStorage.setItem("access_token", res.data.data.access_token)
// 		dispatch({
// 			type: LOGIN_SUCCESS
// 		})
// 	} catch (error) {
// 		console.log(error.status)
// 		dispatch({
// 			type: LOGIN_FAILED
// 		})
// 	}
// }