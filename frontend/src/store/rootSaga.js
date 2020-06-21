import { all } from 'redux-saga/effects';

import operator from './effects/operator.effect';
import auth from './effects/auth.effect';
import person from './effects/person.effect';

export default function* rootSaga() {
    return yield all([operator, auth, person]);
}
