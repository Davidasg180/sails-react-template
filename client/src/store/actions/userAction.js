import { userTypes } from "./../types/userTypes";

export const login = ( emailAddress, password ) => dispatch => {
    
    dispatch( { type: userTypes.USER_LOGIN, payload: { emailAddress,password } } )

    fetch('/api/v1/account/login',{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                emailAddress,
                password
        })
    })
        .then(response => {
            if (!response.ok) {
                // dispatch({ type: userTypes.USER_LOGIN, payload: {} });
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(() => console.log('error'));
};