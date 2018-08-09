import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import configureStore from "./store/store";

import { BrowserRouter, } from 'react-router-dom';

ReactDOM.render(<Provider store={configureStore()}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
