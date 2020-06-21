import {produce} from 'immer';
import {operatorConstant} from '../constants';

const INITIAL_STATE = {};

export default function operator(state = INITIAL_STATE, action) {
    return produce(state, recipe => {
        switch (action.type) {
            case operatorConstant.OPERATOR_CREATE_SUCCESS : {
                break;
            }

            default:
        }
    });
}
