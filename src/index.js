import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Root>, document.getElementById('root'));
registerServiceWorker();
