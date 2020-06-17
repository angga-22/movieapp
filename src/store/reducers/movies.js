import { GETMOVIES_ALL, SEARCH_BY_TITLE } from '../actions/types';

const initialState = {
    movies: [],
    searchStatus: null
}

const movies = (state = initialState, action) => {
    switch (action.type) {
        case GETMOVIES_ALL:
            return {
                ...state,
                movies: action.data,
            };
        case SEARCH_BY_TITLE:
            console.log("ini py", action.payload)
            if (action.payload !== 0) {
                alert("search complete")
                return {
                    ...state,
                    movies: action.payload, searchStatus: action.status
                }
            } else {
                alert("nothing found")
                return {
                    ...state
                }
            }
        default:
            return state;
    }
}
export default movies;