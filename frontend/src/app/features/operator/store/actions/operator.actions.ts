import {createAction, props} from '@ngrx/store';
import {Operator} from '../../../../shared/models/operator.model';

export enum OperatorActionsTypes {
  CREATE_OPERATOR = '@operator/CREATE_OPERATOR',
  CREATE_OPERATOR_SUCCESS = '@operator/CREATE_OPERATOR_SUCCESS',

  GET_ALL_OPERATOR = '@operator/GET_ALL_OPERATOR',
  GET_ALL_OPERATOR_SUCCESS = '@operator/GET_ALL_OPERATOR_SUCCESS',

  GET_OPERATOR = '@operator/GET_OPERATOR',
  GET_OPERATOR_SUCCESS = '@operator/GET_OPERATOR_SUCCESS',

  UPDATE_OPERATOR = '@operator/UPDATE_OPERATOR',
  UPDATE_OPERATOR_SUCCESS = '@operator/UPDATE_OPERATOR_SUCCESS',

  DELETE_OPERATOR = '@operator/DELETE_OPERATOR',
  DELETE_OPERATOR_SUCCESS = '@operator/DELETE_OPERATOR_SUCCESS',

  MESSAGE_OPERATOR_SUCCESS = '@operator/MESSAGE_SUCCESS',
  MESSAGE_OPERATOR_ERROR = '@operator/MESSAGE_ERROR'
}

export const GetAllOperator = createAction(OperatorActionsTypes.GET_ALL_OPERATOR);

export const GetAllOperatorSuccess = createAction(OperatorActionsTypes.GET_ALL_OPERATOR_SUCCESS,
  props<{ payload: {operators: Operator[]} }>());

export const CreateOperator = createAction(OperatorActionsTypes.CREATE_OPERATOR,
  props<{ payload: { operator: Operator } }>());

export const CreateOperatorSuccess = createAction(OperatorActionsTypes.CREATE_OPERATOR_SUCCESS,
  props<{ payload: { operator: Operator } }>());

export const UpdateOperator = createAction(OperatorActionsTypes.UPDATE_OPERATOR,
  props<{ payload: { operator: Operator } }>());

export const UpdateOperatorSuccess = createAction(OperatorActionsTypes.UPDATE_OPERATOR_SUCCESS,
  props<{ payload: { operator: Operator } }>());

export const GetOperator = createAction(OperatorActionsTypes.GET_OPERATOR,
  props<{ payload: { id: number } }>());

export const GetOperatorSuccess = createAction(OperatorActionsTypes.GET_OPERATOR_SUCCESS,
  props<{ payload: { operator: Operator } }>());

export const DeleteOperator = createAction(OperatorActionsTypes.DELETE_OPERATOR,
  props<{ payload: { id: number } }>());

export const DeleteOperatorSuccess = createAction(OperatorActionsTypes.DELETE_OPERATOR_SUCCESS,
  props<{ payload: { operator: Operator } }>());

export const MessageOperatorSuccess = createAction(OperatorActionsTypes.MESSAGE_OPERATOR_SUCCESS,
  props<{ payload: { message: string } }>());

export const MessageOperatorError = createAction(OperatorActionsTypes.MESSAGE_OPERATOR_ERROR,
  props<{ payload: { message: string } }>());
