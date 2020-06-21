import {produce} from 'immer';
import {personConstant} from '../constants';

const INITIAL_STATE = {};

export default function operator(state = INITIAL_STATE, action) {
    return produce(state, recipe => {
        switch (action.type) {
            case personConstant.CREATE_SUCCES : {
                break;
            }

            default:
        }
    });
}
