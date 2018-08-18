import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import MenuControllerView from '../menu/MenuControllerView';
import Root from '../../../../Root';

let wrapped;

beforeEach(() => {

	const initialState = [
			{
				id: 1,
				nome: "Hamburguer",
				preco:"25.00",
				imagem: "https://static.marcelosousa.me/restaurant-menu/amburguer.jpg"
			}
		];

	wrapped = shallow(<MenuControllerView  menu={initialState} />);

});

it('creates ono LI per item', () => {
	expect(wrapped.find('li').length).toEqual(1);
});

it('creates one BUTTON per item', () => {
	expect(wrapped.find('button').length).toEqual(1);
});
