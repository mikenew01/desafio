package com.github.maikoncanuto.resources;


import com.github.maikoncanuto.domains.dtos.PersonDTO;
import com.github.maikoncanuto.domains.dtos.ResponseDTO;
import com.github.maikoncanuto.services.PersonService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import static com.github.maikoncanuto.domains.enums.RoleAllow.ADMINISTRADOR;
import static com.github.maikoncanuto.domains.enums.RoleAllow.OPERADOR;
import static java.lang.String.format;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.Response.status;

@Path("/persons")
@Consumes(APPLICATION_JSON)
@Produces(APPLICATION_JSON)
public class PersonResource {

    @Inject
    PersonService personService;

    @POST
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response create(PersonDTO personDTO) {
        final var response = new ResponseDTO<>();

        try {
            final var operador = personService.save(personDTO);
            response.setCode(201);
            response.setMensage("Pessoa inserido com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setData(null);
            response.setMensage(format("Erro ao inserir Pessoa, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response)
                .build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response find(@PathParam("id") final Long id) {
        final var response = new ResponseDTO<>();

        try {
            final var operador = personService.findById(id);
            response.setCode(200);
            response.setMensage("Pessoa encontrado com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao buscar Pessoa, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response)
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response update(@PathParam("id") final Long id, final PersonDTO personDTO) {
        final var response = new ResponseDTO<>();

        try {
            if (personDTO.getId() == null)
                personDTO.setId(id);

            final var operador = personService.update(personDTO);
            response.setCode(200);
            response.setMensage("Pessoa atualizado com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao atualizar Pessoa, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response)
                .build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response delete(@PathParam("id") final Long id) {
        final var response = new ResponseDTO<>();

        try {
            personService.delete(id);
            response.setCode(200);
            response.setMensage("Pessoa removido com sucesso!");
            response.setData(id);
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao remover Pessoa, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response)
                .build();
    }

    @GET
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response findAll() {
        final var response = new ResponseDTO<>();

        try {
            final var persons = personService.findAll();
            response.setCode(201);
            response.setMensage("Pessoaes listado com sucesso!");
            response.setData(persons);
        } catch (Exception e) {
            response.setCode(400);
            response.setData(null);
            response.setMensage(format("Erro ao listar Pessoaes, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response)
                .build();
    }

}
