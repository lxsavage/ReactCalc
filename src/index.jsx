import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules/App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Best Resolution: 256x350
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
