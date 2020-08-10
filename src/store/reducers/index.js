import { combineReducers } from "redux";
import movies from "./movies";
import auth from "./authentication";
import getmoviedet from "./getmoviedet";


export default combineReducers({
	auth, movies, getmoviedet
});
