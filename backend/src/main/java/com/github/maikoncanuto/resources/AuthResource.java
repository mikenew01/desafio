package com.github.maikoncanuto.resources;

import com.github.maikoncanuto.domains.dtos.OperatorDTO;
import com.github.maikoncanuto.domains.dtos.auth.AuthLoginDTO;
import com.github.maikoncanuto.domains.dtos.auth.AuthLoginResponseDTO;
import com.github.maikoncanuto.domains.dtos.auth.AuthRegisterResponseDTO;
import com.github.maikoncanuto.services.AuthService;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import static java.lang.String.format;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.Response.status;

@Path("/auth")
@Consumes(APPLICATION_JSON)
@Produces(APPLICATION_JSON)
public class AuthResource {

    @Inject
    AuthService authService;

    @POST
    public Response register(final OperatorDTO operatorDTO) {
        final var authMensage = new AuthRegisterResponseDTO<OperatorDTO>();

        try {
            final var operator = authService.register(operatorDTO);
            authMensage.setMensage("Usuário registrado com sucesso.");
            authMensage.setData(operator);
            authMensage.setCode(201);
        } catch (Exception e) {
            authMensage.setCode(400);
            authMensage.setData(null);
            authMensage.setMensage(format("Erro ao registrar usuário, erro: %s", e.getMessage()));
        }

        return status(authMensage.getCode())
                .entity(authMensage.getData())
                .build();
    }

    @POST
    public Response login(final AuthLoginDTO authLoginDTO) {
        final var authMensage = new AuthLoginResponseDTO();

        try {
            final var token = authService.login(authLoginDTO);
            authMensage.setCode(200);
            authMensage.setToken(token);
            authMensage.setMensage("Login realizado com sucesso!");
        } catch (Exception e) {
            authMensage.setCode(401);
            authMensage.setMensage(format("Usuário não autorizado, erro: %s", e.getMessage()));
            authMensage.setToken(null);
        }

        return status(authMensage.getCode())
                .entity(authMensage)
                .build();
    }
}
