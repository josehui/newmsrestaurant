import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Menu from './modules/menu/components/index';


ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Route path="/" component={Menu} />
		</BrowserRouter>
	</Root>, document.getElementById('root'));
registerServiceWorker();
