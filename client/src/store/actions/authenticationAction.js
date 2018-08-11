import { userTypes } from "../types/userTypes";
import { userAuthentificationService } from "../../services/authenticationService";

export const login = ( emailAddress, password ) => dispatch => {

    userAuthentificationService.login(emailAddress,password).then(user => {
        dispatch(success(user));
        history.push('/');
    }, error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
    });

    // function request(user) { return { type: userTypes.USER_LOGIN, user } }
    function success(user) { return { type: userTypes.USER_LOGIN, user } }
    function failure(error) { return { type: userTypes.USER_LOGIN, error } }
};