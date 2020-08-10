import { GET_MOVIE_DETAIL } from '../actions/types';
const initialState = {
    getmoviedet: {}
}

const getmoviedet = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAIL:
            console.log('movie detail success')
            return {
                ...state,
                getmoviedet: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default getmoviedet;