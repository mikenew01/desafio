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
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        backgroundColor: '#f5f5f5'
    },
    title: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: '#2c387e'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>

            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        DESAFIO-MCP
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
