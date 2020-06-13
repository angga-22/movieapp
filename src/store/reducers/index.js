import { combineReducers } from "redux";
import { movies, movies_action } from './movies';
// import login from "./login";

export default combineReducers({
	movies, movies_action
});
