import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import 'zent/css/index.css'; 
import './index.css';

import './global';
import Routes from './routes';

const mountNode = document.getElementById('app-container');
ReactDOM.render(<Routes />, mountNode);
registerServiceWorker();
