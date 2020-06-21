import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';

import serviceApi from '../../services/service.api'
import history from '../../services/history.api';

import {deletePerson} from "../../store/actions/person.action";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    body: {
        width: '100%',
        margin: 'auto',
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between'
    },
    button_create: {
        alignItems: 'flex-start',
    },
}));

function Person() {
    const dispatch = useDispatch();

    const classes = useStyles();
    const [persons, setPersons] = useState([]);

    useEffect(() => {

        async function loadPersons() {
            const response = await serviceApi.get('/persons');
            setPersons(response.data);
        }

        loadPersons();
    }, []);

    const editar = (id) => {
        history.push(`/persons/${id}`);
    }

    const deletar = (id) => {
        dispatch(deletePerson(id));
    }

    const novo = () => {
        history.push(`/persons/create`);
    }

    return (
        <>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h3" component="h2">
                            Pessoas
                        </Typography>
                        <div className={classes.body}>
                            <div className={classes.button_create}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        novo()
                                    }}
                                    className={classes.button_create}
                                >
                                    Novo
                                </Button>
                            </div>
                            <br/>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Nome</TableCell>
                                            <TableCell align="left">Documento</TableCell>
                                            <TableCell align="left">Data de Nascimento</TableCell>
                                            <TableCell align="left">Data de Cadastro</TableCell>
                                            <TableCell align="left">Tipo de Pessoa</TableCell>
                                            <TableCell align="left">Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            persons.map((person) => (
                                                <TableRow key={person.id}>
                                                    <TableCell align="left">{person.name}</TableCell>
                                                    <TableCell align="left">{person.document}</TableCell>
                                                    <TableCell align="left">{person.dateBirth}</TableCell>
                                                    <TableCell align="left">{person.creatAt}</TableCell>
                                                    <TableCell align="left">{person.typePerson}</TableCell>
                                                    <TableCell align="left">
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                editar(person.id)
                                                            }}
                                                            disabled
                                                        >
                                                            Editar
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <Button
                                                            variant="contained"
                                                            color="secondary"
                                                            onClick={() => {
                                                                deletar(person.id)
                                                            }}
                                                        >
                                                            Excluir
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

export default Person;
