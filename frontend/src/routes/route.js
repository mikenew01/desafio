import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

import {store} from '../store'

export default function RouteWrapper({
                                         component: Component,
                                         isPrivate,
                                         ...rest
                                     }) {

    const {authenticated} = () => {
        return store.getState().auth
    }

    if (!authenticated && isPrivate) {
        return <Redirect to="/"/>;
    }

    return (
        <Route
            {...rest}
            render={props => (authenticated && isPrivate) ? (
                <>
                    <Component {...props} />
                </>
            ) : (<Redirect to="/"/>)}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
