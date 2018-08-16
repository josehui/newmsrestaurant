import { combineReducers } from 'redux';
import reducerMenu from '../modules/menu/reducer/reducerMenu';

export default combineReducers({
	menu: reducerMenu
});
