import axios from 'axios';
import { FETCH_MENU, REQUEST_STARTING, REQUEST_FINISH, REQUEST_ERROR } from '../constants';

export const fetchMenu = () => dispatch => {

	dispatch({ type: REQUEST_STARTING	});
	axios.get('https://marcelosousa.me/restaurant-menu/').then(response => {
		dispatch({ type: REQUEST_FINISH });
		dispatch({ type: FETCH_MENU, payload: response });
	}).catch(responseError => {
		dispatch({ type: REQUEST_ERROR, payload: { message: responseError.response.data.message } });
	});


}
