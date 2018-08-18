import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import MenuController from '../menu/components/index';


let wrapped;

beforeEach(() => {
		wrapped = shallow(<App />);
});

it('creates one instance of MenuController', () => {
	expect(wrapped.find(MenuController).length).toEqual(1);
});
