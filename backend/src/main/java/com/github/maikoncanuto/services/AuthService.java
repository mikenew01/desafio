package com.github.maikoncanuto.services;

import com.github.maikoncanuto.domains.dtos.OperatorDTO;
import com.github.maikoncanuto.domains.dtos.auth.AuthLoginDTO;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import static com.github.maikoncanuto.domains.enums.RoleEnum.OPERADOR;
import static javax.transaction.Transactional.TxType.NOT_SUPPORTED;
import static javax.transaction.Transactional.TxType.REQUIRED;

@RequestScoped
public class AuthService {

    @Inject
    OperatorService operatorService;

    @Inject
    TokenService tokenService;

    @Transactional(REQUIRED)
    public OperatorDTO register(final OperatorDTO operatorDTO) throws Exception {
        operatorDTO.setRole(OPERADOR);
        return operatorService.save(operatorDTO);
    }

    @Transactional(NOT_SUPPORTED)
    public String login(final AuthLoginDTO authLoginDTO) throws Exception {
        final var operator = operatorService.findByLoginAndPassword(authLoginDTO.getLogin(), authLoginDTO.getPassword());
        return tokenService.createToken(operator.getLogin(), operator.getRole().name());
    }

}
