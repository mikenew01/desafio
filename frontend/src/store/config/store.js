import {applyMiddleware, compose, createStore} from 'redux';

export default (reducers, middlewares) => {
    const config = compose(applyMiddleware(...middlewares));
    return createStore(reducers, config);
};
