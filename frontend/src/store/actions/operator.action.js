import {operatorConstant} from "../constants";

export function create(payload) {
    return {type: operatorConstant.OPERATOR_CREATE_SUCCESS, payload};
}

export function createSuccess() {
    return {type: operatorConstant.OPERATOR_CREATE_SUCCESS};
}

export function createError() {
    return {type: operatorConstant.OPERATOR_CREATE_ERROR};
}

export function update(payload) {
    return {type: operatorConstant.OPERATOR_UPDATE, payload};
}

export function updateSuccess() {
    return {type: operatorConstant.OPERATOR_UPDATE_SUCCESS};
}

export function updateError() {
    return {type: operatorConstant.OPERATOR_UPDATE_ERROR};
}

export function deleteOperator(id) {
    return {type: operatorConstant.OPERATOR_DELETE, payload: id};
}

export function deleteSuccess() {
    return {type: operatorConstant.OPERATOR_DELETE_SUCCESS};
}

export function deleteError() {
    return {type: operatorConstant.OPERATOR_UPDATE_ERROR};
}
