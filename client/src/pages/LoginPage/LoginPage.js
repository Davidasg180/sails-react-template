/**
 * @file Login page for user Authentication.
 * @author David Alberto Serrano Garcia <davidasg180@gmail.com>
 * @version 0.1
 */
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
// Redux Actions
import { login } from "./../../store/actions/userAction";
//Layouts and stylings imports
import AccessPanel from '../../layouts/AccessPanel/AccessPanel';
import Card from "./../../components/Card/Card";
import CardHeader from "./../../components/Card/CardHeader/CardHeader";
import CardBody from '../../components/Card/CardBody/CardBody';
import './LoginPage.css'
import {
    TextField,
    Button,
    Grid
} from '@material-ui/core';

class LoginPage extends Component {
    componentWillMount() {
        this.props.login();
    }
    state = {
        email: `dev@correo.com`,
        password: `dev@correo.com`,
        user: {
            name: ""
        }
    }
    render() {
        const { history } = this.props;
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (localStorage.getItem(`token`)) {
            return <Redirect to={from} />
        }
        return (
            <AccessPanel>
                <div className="LoginPage">
                    <Grid container
                        spacing={0}
                        justify={`center`}
                    >
                        <Grid item xs={4}>
                            <form noValidate autoComplete="off"
                                onSubmit={e => {
                                    e.preventDefault();
                                    this.props.login()
                                    // localStorage.setItem('token', userLogIn.token);
                                    //localStorage.setItem('token', 'BererToken');
                                    //history.push(`/`);
                                }}
                            >
                                <Card>
                                    <CardHeader color="primary">
                                        <h3 style={{ textAlign: 'center', margin: '0' }}>Log in</h3>
                                    </CardHeader>
                                    <CardBody>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.email}
                                            onChange={event => this.setState({ email: event.target.value })}
                                        />
                                        <TextField
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            margin="normal"
                                            type="password"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={this.state.password}
                                            onChange={event => this.setState({ password: event.target.value })}
                                        />
                                        <Button type="submit" fullWidth color="primary">
                                            LOGIN
                                                    </Button>
                                        <Button type="submit" fullWidth color="primary">
                                            ForTesting
                                        </Button>
                                    </CardBody>
                                </Card>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </AccessPanel >
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps, { login })(LoginPage));