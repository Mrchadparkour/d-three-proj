import React from 'react';
import ReactDOM from 'react-dom';
import DataStore from './DataStore';
import App from './components/index.js';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={ DataStore } />, document.getElementById('root'));
registerServiceWorker();
