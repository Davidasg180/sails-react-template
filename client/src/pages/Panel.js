import React, { Component } from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

import panelRoutes from '../routes/panelRoutes';
import SideBar from '../components/SideBar';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{
                width: `100%`,
                zIndex: `1`,
                display: `flex`,
                overflow: `hidden`,
                position: `relative`
            }}>
                <SideBar routes={panelRoutes}></SideBar>
                <main>
                    <Switch>
                        {
                            panelRoutes[0].map((route, key) => {
                                return (<Route
                                    exact={route.exact}
                                    key={key}
                                    path={route.path}
                                    component={route.component}
                                />)
                            })
                        }
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Panel;