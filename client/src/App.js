import React, { Component } from 'react';
import './App.css';

import {
    Switch,
    Route,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import Panel from './pages/Panel';
import { PrivateRoute } from './components/router/privateRoute';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path='/login'
                    component={LoginPage}
                />
                <PrivateRoute
                    path='/'
                    component={Panel}
                />
            </Switch>
        );
    }
}

export default (App);