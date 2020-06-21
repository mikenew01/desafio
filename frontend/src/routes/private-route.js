import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {store} from '../store'

const PrivateRoute = ({component: Component, ...rest}) => (
    <>
        <Route
            {...rest}
            render={props =>
                store.getState().auth.authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                )
            }
        />
    </>
);

export default PrivateRoute;
