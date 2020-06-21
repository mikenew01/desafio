import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Auth from '../pages/auth/auth.component';

import {Container} from '@material-ui/core';
import PrivateRoute from "./private-route";
import Person from "../pages/person/person-list.component";
import PersonCreate from "../pages/person/person-create";

const Routes = () => (
    <>
        <Switch>
            <>
                <Container>
                    <Route path="/" exact component={Auth}/>
                    <PrivateRoute path="/persons" exact component={Person}/>
                    <PrivateRoute path="/persons/create" exact component={PersonCreate}/>
                </Container>
            </>
        </Switch>
    </>
);

export default Routes;
