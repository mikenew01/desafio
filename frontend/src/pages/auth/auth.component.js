import React from 'react';
import {useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';
import {auth} from "../../store/actions/auth.action";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginTop: 200,
        marginLeft: 150,
        flexDirection: "column",
        justifyContent: "center",
        display: "flex"
    },
    card: {
        width: 500,
        height: 250,
        display: 'flex',
        flexDirection: "column",
        justifyItems: "center"
    },
    cardContent: {
        display: 'flex',
        flexDirection: "column",
        justifyItems: "center"
    },
    input: {
        margin: 5,
        width: 460
    },
    title: {
        fontSize: 28,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
}));


function Auth() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = ({login, password}) => {
        dispatch(auth(login, password));
    }

    return (
        <>
            <div className={classes.container}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.title} gutterBottom>
                                Autenticação
                            </Typography>

                            <input type="text"
                                   className={classes.input}
                                   placeholder="Exemplo: admin"
                                   name="login"
                                   ref={register({required: true})}/>

                            {errors.email && <small>O campo login é obrigatório</small>}

                            <input type="password"
                                   className={classes.input}
                                   placeholder="Exemplo: 123456"
                                   name="password" ref={register({required: true})}/>
                            {errors.password && <small>O campo password é obrigatório</small>}


                        </CardContent>
                        <CardActions>
                            <Button variant="contained" size="small" color="primary" type="submit">
                                Entrar
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            </div>
        </>
    );
}

export default Auth;
