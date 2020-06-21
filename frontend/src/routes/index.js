import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Auth from '../pages/auth/auth.component';

import {Container} from '@material-ui/core';

const Routes = () => (
    <>
        <Switch>
            <>
                <Container>
                    <Route path="/" exact component={Auth}/>
                </Container>
            </>
        </Switch>
    </>
);

export default Routes;
