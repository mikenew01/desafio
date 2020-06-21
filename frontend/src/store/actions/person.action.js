import {personConstant} from "../constants";

export function create(payload) {
    return {type: personConstant.PERSON_CREATE_SUCCESS, payload};
}

export function createSuccess() {
    return {type: personConstant.PERSON_CREATE_SUCCESS};
}

export function createError() {
    return {type: personConstant.PERSON_CREATE_ERROR};
}

export function update(payload) {
    return {type: personConstant.PERSON_UPDATE, payload};
}

export function updateSuccess() {
    return {type: personConstant.PERSON_UPDATE_SUCCESS};
}

export function updateError() {
    return {type: personConstant.PERSON_UPDATE_ERROR};
}

export function deletePerson(id) {
    return {type: personConstant.PERSON_DELETE, payload: id};
}

export function deleteSuccess() {
    return {type: personConstant.PERSON_DELETE_SUCCESS};
}

export function deleteError() {
    return {type: personConstant.PERSON_UPDATE_ERROR};
}
