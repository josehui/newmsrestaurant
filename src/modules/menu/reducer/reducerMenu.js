import { FETCH_MENU } from '../constants';

const reducerMenu  = (state = [], action) => {
	switch(action.type){
		case FETCH_MENU:
				const menu = action.payload.data;
			 	return [...state, ...menu];
			default:
				return state;
	}
}


export default reducerMenu;
