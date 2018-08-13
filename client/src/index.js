import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";

import configureStore from "./store/store";

import { Router } from 'react-router'
import history from './history'

ReactDOM.render(<Provider store={configureStore()}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
