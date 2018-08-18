
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import MenuController from '../menu/MenuController';
import MenuControllerView from '../menu/MenuControllerView';
import Root from '../../../../Root';

let wrapped;

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('https://marcelosousa.me/restaurant-menu/', {
		status: 200,
		response:  [
			{
				id: 1,
				nome: "Hamburguer",
				preco:"25.00",
				imagem: "https://static.marcelosousa.me/restaurant-menu/amburguer.jpg"
			}
		]
	});

	wrapped = mount(
		<Root>
			<MenuController />
		</Root>
	);

});

afterEach(() => {
	wrapped.unmount();
	moxios.uninstall();
});

it('creates one instance of MenuControllerView', () => {
	expect(wrapped.find(MenuControllerView).length).toEqual(1);
});

it('creates onoe LI per item', () => {
	wrapped.update();
	expect(wrapped.find('li').length).toEqual(1);
});
