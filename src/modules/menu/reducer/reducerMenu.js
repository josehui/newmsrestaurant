import { FETCH_MENU, REQUEST_STARTING, REQUEST_FINISH } from '../constants';

const initState = {
	menu: [],
	status_request: 'init'
};

const reducerMenu  = (state = initState, action) => {
	switch(action.type){
		case FETCH_MENU:
			console.log(action.payload);
			const menu = action.payload;
			return {...state, menu};
		case REQUEST_STARTING:
			return { ...state };
		case REQUEST_FINISH:
			return {...state, status_request: 'finish' };
		default:
				return state;
	}
}


export default reducerMenu;
