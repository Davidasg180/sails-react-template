import { authenticationTypes } from "../types/authenticationTypes";
import { AuthenticationService } from "../../services/authenticationService";

import history from './../../history'

export const login = (emailAddress, password) => dispatch => {
    return AuthenticationService.login(emailAddress, password).then(user => {
        dispatch(success(user));
    })
    .catch(error => { console.log(error); throw error });

    // function request(user) { return { type: authenticationTypes.LOGIN_SUCCESS, user } }
    function success(user) { return { type: authenticationTypes.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: authenticationTypes.LOGIN_SUCCESS, error } }
};

export const logout = () => dispatch => {
    return AuthenticationService.logout().then(response => {
        dispatch(success());
    });
    function success() { return { type: authenticationTypes.LOGOUT } };
}