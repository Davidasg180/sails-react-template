import { userTypes } from "./../types/userTypes";

export const login = () => dispatch => {
    fetch('/users')
        .then(response => {
            if (!response.ok) {
                dispatch({ type: userTypes.USER_LOGIN, payload: {} });
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(() => console.log('error'));
};