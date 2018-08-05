import { userTypes } from "../types/userTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case userTypes.USER_LOGIN:
            return {
                result: action.payload
            };
        default:
            return state;
    };
};