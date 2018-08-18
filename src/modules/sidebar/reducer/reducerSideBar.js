import { ADD_ITEM, REMOVE_ITEM } from '../constants';

let init = {
	total: 0,
	orderList: [],
}

const reducerSideBar = (state = init, action) => {
	switch(action.type){
		case ADD_ITEM:
			let total = parseFloat(state.total) + parseFloat(action.payload.preco);
			return { orderList: [...state.orderList, action.payload], total: total.toFixed(2) };
		default:
			return state;

	}
}

export default reducerSideBar;
