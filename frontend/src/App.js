import React from 'react';
import {ToastContainer} from 'react-toastify';
import {PersistGate} from 'redux-persist/integration/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {AppBar, CssBaseline, Toolbar, Typography} from '@material-ui/core';

import Routes from './routes';
import history from './services/history.api'

import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';

import {persistStores, store} from './store';

function App() {
    return (
        <>
            <CssBaseline/>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography component="h2" variant="h6" color="initial" gutterBottom>
                        DESAFIO - CAD
                    </Typography>
                </Toolbar>
            </AppBar>

            <Provider store={store}>
                <PersistGate persistor={persistStores}>
                    <Router history={history}>
                        <Routes/>
                        <ToastContainer autoClose={10000}/>
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
