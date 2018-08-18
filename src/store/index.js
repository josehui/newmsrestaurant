import { combineReducers } from 'redux';
import reducerMenu from '../modules/menu/reducer/reducerMenu';
import reducerSideBar from '../modules/sidebar/reducer/reducerSideBar';


export default combineReducers({
	menu: reducerMenu,
	sidebar: reducerSideBar
});
