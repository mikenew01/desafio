import {createError, createSuccess} from "../actions/operator.action";
import history from "../../services/history.api";
import {all, call, put, takeLatest} from 'redux-saga/effects';
import serviceApi from '../../services/service.api';
import {toast} from 'react-toastify';
import {operatorConstant} from "../constants";

export function* create(payload) {
    try {
        const response = yield call(serviceApi.post, 'operators', payload);
        console.log(response);
        yield put(createSuccess());
        history.push('/operators');
        toast.success(response.data.mensage);
    } catch (e) {
        toast.error('Error ao salvar operador: ' + e);
        yield put(createError());
    }
}

export function* deleteOperator(id) {
    try {
        yield call(serviceApi.delete, `operators/${id}`);
        history.go('/operators');
    } catch (e) {
        toast.error('Erro ao excluir operador' + e);
    }
}

export function* update(payload) {
    try {
        const response = yield call(serviceApi.put, `operators/${payload.id}`);
        console.log(response);
        toast.success(response.data.mensage);
        history.push('/operators');
    } catch (e) {
        toast.error('Erro ao excluir operador' + e);
    }
}

export default all([
    takeLatest(operatorConstant.OPERATOR_CREATE, create),
    takeLatest(operatorConstant.OPERATOR_UPDATE, update),
    takeLatest(operatorConstant.OPERATOR_DELETE, deleteOperator)
]);
