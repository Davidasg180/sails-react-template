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
import { login } from "./../../store/actions/authentication.action";
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
    }
    state = {
        emailAddress: ``,
        password: ``,
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
                                    this.props.login(this.state.emailAddress, this.state.password).then(() => {
                                        history.push(`/`);
                                    }).catch(error => {
                                        alert('error: ' + error);
                                    });
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
                                            value={this.state.emailAddress}
                                            onChange={event => this.setState({ emailAddress: event.target.value })}
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

const mapDispatchToProps = dispatch => ({
    login: (emailAddress, password) => dispatch(login(emailAddress, password))
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);