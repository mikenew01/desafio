import React from 'react';
import {useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';
import {auth} from "../../store/actions/auth.action";
import Button from "@material-ui/core/Button";


function Auth() {
    const dispatch = useDispatch();

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = ({login, password}) => {
        dispatch(auth(login, password));
    }

    return (
        <>
            <h1>Autenticação</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                       placeholder="Digite o login"
                       name="login"
                       ref={register({required: true})}/>

                {errors.email && <small>O campo login é obrigatório</small>}
                <br/>

                <input type="password"
                       placeholder="Digite a senha"
                       name="password" ref={register({required: true})}/>

                {errors.password && <small>O campo password é obrigatório</small>}
                <br/>

                <Button variant="contained" color="primary" type="submit">
                    Autenticar
                </Button>
            </form>
        </>
    );
}

export default Auth;
