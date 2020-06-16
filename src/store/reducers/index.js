import { combineReducers } from "redux";
import movies from "./movies";
import auth from "./authentication";

export default combineReducers({
	auth, movies
});
