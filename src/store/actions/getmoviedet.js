import { GET_MOVIE_DETAIL } from './types';
import axios from 'axios'
const baseUrl = "https://movie-app-mini-project-2.herokuapp.com";

export const getMovieDetails = (data) => async (dispatch) => {
    console.log("getdata running")
    try {
        const res = await axios({
            method: "GET",
            url: `${baseUrl}/movie/show/detail/${data}`,
            headers: {
                "Content-type": "application/json"
            }
        })
        console.log("yoww", res)
        if (res.status === 200) {
            console.log("ini get det")
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: res.data.data.data
            })
        }
    } catch (error) {
        throw (error);
    }
}
