import { authenticationTypes } from "../types/authenticationTypes";
import { AuthenticationService } from "../../services/authenticationService";

export const login = ( emailAddress, password ) => dispatch => {

    AuthenticationService.login(emailAddress,password).then(user => {
        dispatch(success(user));
        // history.push('/');
    }, error => {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
    });

    // function request(user) { return { type: authenticationTypes.LOGIN_SUCCESS, user } }
    function success(user) { return { type: authenticationTypes.LOGIN_SUCCESS, user } }
    // function failure(error) { return { type: authenticationTypes.LOGIN_SUCCESS, error } }
};