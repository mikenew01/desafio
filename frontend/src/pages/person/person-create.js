import React from 'react';
import {useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';
import {Button} from '@material-ui/core'


import {create} from '../../store/actions/person.action'

function PersonCreate() {
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        dispatch(create(data));
    }

    return (
        <>
            <h1>Nova Pessoa</h1>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <input type="text" placeholder="Nome" name="nome" maxLength="100" ref={register({required: true})}/>
                {errors.nome && <small>O Nome é obrigatório</small>}
                <br/>

                <input type="text" placeholder="Documento" name="documento" maxLength="15"
                       ref={register({required: true})}/>
                {errors.documento && <small>O Documento é obrigatório</small>}
                <br/>

                <input type="date" placeholder="Data de Nascimento" name="dataNascimento" maxLength="15"
                       ref={register({required: true})}/>
                {errors.dataNascimento && <small>A data de Nascimento é obrigatória</small>}
                <br/>

                <input type="text" placeholder="Nome do Pai" name="nomePai" maxLength="15" ref={register()}/>
                <br/>

                <input type="text" placeholder="Nome da Mãe" name="nomeMae" maxLength="15" ref={register()}/>
                <br/>

                <label id="lbTipoPessoa">Tipo de Pessoa</label>
                <select name="tipoPessoa" ref={register({required: true})}>
                    <option value="">Selecione</option>
                    <option value="FISICA">Física</option>
                    <option value="JURIDICA">Jurídica</option>
                </select>
                {errors.tipoPessoa && <small>O Tipo Pessoa é obrigatório</small>}
                <br/>

                <Button type="submit">Criar</Button>
            </form>
        </>
    );
}

export default PersonCreate;
