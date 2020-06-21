import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import serviceApi from '../../services/service.api';
import {authFailure, authSuccess } from "../actions/auth.action";
import history from "../../services/history.api";
import {authConstant} from "../constants";
import jwtDecode from 'jsonwebtoken';


export function* login({ payload }) {
    try {
        const { login, password } = payload;

        const response = yield call(serviceApi.post, 'auth/login', {
            login,
            password
        });

        const { token }  = response.data;

        serviceApi.defaults.headers.Authorization = `Bearer ${token}`;

        const{ groups } = jwtDecode.decode(token);
        console.log('perfil', groups[0]);

        yield put(authSuccess(token, groups[0]));
        history.push('/persons');
    } catch (err) {
        toast.error('Usuário não autorizado.')
        yield put(authFailure());
    }
}

export function setToken({ payload }) {
    if(!payload) return;

    const { token } = payload.auth;

    if (token) {
        serviceApi.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest(authConstant.LOGIN_REQUEST, login),
]);
