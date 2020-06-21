import produce from 'immer';
import {authConstant} from "../constants";

const INITIAL_STATE = {
    token: null,
    authenticated: false,
    role: null,
    loading: false,
}

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, recipe => {
        switch (action.type) {
            case authConstant.LOGIN_REQUEST: {
                recipe.loading = true;
                break;
            }

            case authConstant.LOGIN_SUCCESS: {
                recipe.token = action.payload.token;
                recipe.authenticated = true;
                recipe.perfil = action.payload.role;
                recipe.loading = false;
                break;
            }

            default:
        }
    });
}
