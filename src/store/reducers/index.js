import { combineReducers } from 'redux';
//panggil state di index reducer
import auth from './authentication';


export default combineReducers({
	auth
})