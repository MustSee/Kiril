import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('root'));
registerServiceWorker();
