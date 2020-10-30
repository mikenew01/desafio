import {Operator} from '../../../../shared/models/operator.model';
import {Action, createReducer, on} from '@ngrx/store';
import {
  CreateOperatorSuccess,
  DeleteOperatorSuccess,
  GetAllOperatorSuccess,
  GetOperatorSuccess,
  MessageOperatorError,
  UpdateOperatorSuccess
} from '../actions/operator.actions';

export default class OperatorState {
  loaded: boolean;
  error?: Error | any;
  operators?: Array<Operator>;
}

export const initializeState = (): OperatorState => {
  return {
    operators: [],
    error: null,
    loaded: false
  };
};

export const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(GetAllOperatorSuccess, (state: OperatorState, {payload: {operators}}) => {
    return {...state, operators, loaded: true};
  }),
  on(CreateOperatorSuccess, (state: OperatorState, {payload: {operator}}) => {
    return {...state, operators: [...state.operators, operator]};
  }),
  on(UpdateOperatorSuccess, (state: OperatorState, {payload: {operator}}) => {
    return {...state, operators: [...state.operators, operator]};
  }),
  on(GetOperatorSuccess, (state: OperatorState, {payload: {operator}}) => {
    return {...state, operators: [...state.operators, operator]};
  }),
  on(DeleteOperatorSuccess, (state: OperatorState, {payload: {operator}}) => {
    return {...state, operators: [...state.operators, operator]};
  }),
  on(MessageOperatorError, (state: OperatorState, {payload: {message}}) => {
    return {...state, error: message};
  })
);

export function operatorReducer(state: OperatorState | undefined, action: Action) {
  return reducer(state, action);
}


