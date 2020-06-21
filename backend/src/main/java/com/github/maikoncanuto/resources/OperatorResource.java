package com.github.maikoncanuto.resources;

import com.github.maikoncanuto.domains.dtos.OperatorDTO;
import com.github.maikoncanuto.domains.dtos.ResponseDTO;
import com.github.maikoncanuto.services.OperatorService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import static com.github.maikoncanuto.domains.enums.RoleAllow.ADMINISTRADOR;
import static com.github.maikoncanuto.domains.enums.RoleAllow.OPERADOR;
import static java.lang.String.format;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.Response.status;

@Path("/operators")
@Consumes(APPLICATION_JSON)
@Produces(APPLICATION_JSON)
public class OperatorResource {

    @Inject
    OperatorService operatorService;

    @POST
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response create(OperatorDTO operatorDTO) {
        final var response = new ResponseDTO<>();

        try {
            final var operador = operatorService.save(operatorDTO);
            response.setCode(201);
            response.setMensage("Operador inserido com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setData(null);
            response.setMensage(format("Erro ao inserir Operador, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response.getData())
                .build();
    }

    @GET
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response find(@PathParam("id") final Long id) {
        final var response = new ResponseDTO<>();

        try {
            final var operador = operatorService.findById(id);
            response.setCode(200);
            response.setMensage("Operador encontrado com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao buscar Operador, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response.getData())
                .build();
    }

    @PUT
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response update(@PathParam("id") final Long id, final OperatorDTO operatorDTO) {
        final var response = new ResponseDTO<>();

        try {
            if (operatorDTO.getId() == null)
                operatorDTO.setId(id);

            final var operador = operatorService.update(operatorDTO);
            response.setCode(200);
            response.setMensage("Operador atualizado com sucesso!");
            response.setData(operador);
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao atualizar Operador, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response.getData())
                .build();
    }

    @DELETE
    @Path("/{id}")
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response delete(@PathParam("id") final Long id) {
        final var response = new ResponseDTO<>();

        try {
            operatorService.delete(id);
            response.setCode(200);
            response.setMensage("Operador removido com sucesso!");
        } catch (Exception e) {
            response.setCode(400);
            response.setMensage(format("Erro ao remover Operador, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response.getData())
                .build();
    }

    @GET
    @RolesAllowed({ADMINISTRADOR, OPERADOR})
    public Response findAll() {
        final var response = new ResponseDTO<>();

        try {
            final var operators = operatorService.findAll();
            response.setCode(201);
            response.setMensage("Operadores listado com sucesso!");
            response.setData(operators);
        } catch (Exception e) {
            response.setCode(400);
            response.setData(null);
            response.setMensage(format("Erro ao listar Operadores, erro: %s", e.getMessage()));
        }

        return status(response.getCode())
                .entity(response.getData())
                .build();
    }

}
