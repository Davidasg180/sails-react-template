import { userTypes } from "./../types";
export const login = () => dispatch => {
    dispatch({
        type: userTypes.USER_LOGIN,
        payload: {
            user: {
                name: ""
            }
        }
    });
};