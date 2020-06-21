import {authConstant} from "../constants";

export function auth(login, password) {
    return {
        type: authConstant.LOGIN_REQUEST,
        payload: {login, password}
    };
}

export function authSuccess(token, role) {
    return {
        type: authConstant.LOGIN_SUCCESS,
        payload: {token, role},
    };
}

export function authFailure() {
    return {
        type: authConstant.LOGIN_ERROR,
    };
}
