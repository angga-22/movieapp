import axios from 'axios';
import { GETMOVIES_ALL, SEARCH_BY_TITLE } from '../actions/types';
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

export const searchMovie = (data) => async dispatch => {
    console.log("search run")
    try {
        const res = await axios({
            method: "GET",
            url: `${baseUrl}/movie/show/search?movie=${data}`,
        })
        console.log(res.data)
        if (res.status === 200) {
            dispatch({
                type: SEARCH_BY_TITLE,
                payload: res.data.data,
                status: data,
            })
        }
    } catch (error) {
        console.log("search movies failed")
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