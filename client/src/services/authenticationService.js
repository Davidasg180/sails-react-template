/**
 * POST /api/v1/login
 * */
export function login(emailAddress, password) {

    var requestOptions = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            emailAddress,
            password
        })
    };

    return fetch('/api/v1/account/login', requestOptions)
        .then(handleResponse)
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', JSON.stringify(response.token));
                localStorage.setItem('user', JSON.stringify(response.user));
            }
            return response.user;
        })
        .catch(error => { console.log(error); throw error });
}

/*
 * SignUp
 * */
function signUp() { }

/**
 * POST /api/v1/signin
 * */
function logout() {
    return new Promise(
        (resolve, reject) => {
            if (!localStorage.clear()) reject(false);
            resolve(true);
        }
    );
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const AuthenticationService = {
    login,
    logout
}