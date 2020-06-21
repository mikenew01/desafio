import {combineReducers} from 'redux';

import operator from './reducers/operator.reducer';
import person from './reducers/person.reducer';
import auth from './reducers/auth.reducer';

export default combineReducers({
    operator, person, auth
});
