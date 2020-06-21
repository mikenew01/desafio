import {persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './config/store';

import persistReducers from './config/reducers';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewareFunction = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewareFunction);
const persistStores = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistStores};

