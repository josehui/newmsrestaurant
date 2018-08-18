import { ADD_ITEM, REMOVE_ITEM } from '../constants';

const init = {
	total: 0,
	orderList: [],
}

const reducerSideBar = (state = init, action) => {

	let total;

	switch(action.type){
		case ADD_ITEM:
			total = parseFloat(state.total) + parseFloat(action.payload.preco);
			return { orderList: [...state.orderList, action.payload], total: total.toFixed(2) };
		case REMOVE_ITEM:
			total = parseFloat(state.total) - parseFloat(state.orderList[action.payload].preco);
			let orderList = state.orderList.filter((item, i) => {
				return i !== action.payload
			});
			return { orderList: [...orderList], total: total.toFixed(2) };
		default:
			return state;
	}
}

export default reducerSideBar;
