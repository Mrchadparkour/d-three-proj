import React from 'react';
import ReactDOM from 'react-dom';
import DataStore from './DataStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={ DataStore } />, document.getElementById('root'));
registerServiceWorker();
