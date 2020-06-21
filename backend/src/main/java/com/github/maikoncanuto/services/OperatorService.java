package com.github.maikoncanuto.services;

import com.github.maikoncanuto.domains.dtos.OperatorDTO;
import com.github.maikoncanuto.domains.dtos.PersonDTO;
import com.github.maikoncanuto.domains.dtos.mappers.OperatorMapper;
import com.github.maikoncanuto.repositories.OperatorRepository;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

import static java.util.stream.Collectors.toUnmodifiableList;
import static javax.transaction.Transactional.TxType.*;

@RequestScoped
public class OperatorService {

    @Inject
    OperatorRepository operatorRepository;

    @Inject
    PersonService personService;

    @Inject
    OperatorMapper operatorMapper;

    @Transactional(REQUIRED)
    public OperatorDTO save(final OperatorDTO operatorDTO) throws Exception {
        final var personDTO = fetchPerson(operatorDTO.getPerson());
        operatorDTO.setPerson(personDTO);

        final var operator = operatorMapper.toEntity(operatorDTO);
        final var operatorOptional = operatorRepository.save(operator);

        if (operatorOptional.isPresent())
            return operatorMapper.toDTO(operatorOptional.get());
        else
            throw new Exception("Não foi possível salvar Operator.");
    }

    @Transactional(REQUIRES_NEW)
    private PersonDTO fetchPerson(PersonDTO person) throws Exception {
        if (person != null && person.getId() != null)
            return personService.findById(person.getId());

        return personService.save(person);
    }

    @Transactional(REQUIRED)
    public OperatorDTO update(final OperatorDTO operatorDTO) throws Exception {
        final var operator = operatorMapper.toEntity(operatorDTO);
        final var operatorOptional = operatorRepository.update(operator);

        if (operatorOptional.isPresent())
            return operatorMapper.toDTO(operatorOptional.get());
        else
            throw new Exception("Não foi possível atualizar Operator.");
    }

    @Transactional(NOT_SUPPORTED)
    public OperatorDTO findById(final Long id) throws Exception {
        final var operator = operatorRepository.findById(id);

        if (operator.isPresent())
            return operatorMapper.toDTO(operator.get());
        else
            throw new Exception("Não foi possível buscar Operator.");
    }

    @Transactional(NOT_SUPPORTED)
    public OperatorDTO findByLoginAndPassword(final String login, final String password) throws Exception {
        final var operator = operatorRepository.findByLoginAndPassword(login, password);

        if (operator.isPresent())
            return operatorMapper.toDTO(operator.get());
        else
            throw new Exception("Não foi possível buscar Operator pelo Login/password.");
    }

    @Transactional(NOT_SUPPORTED)
    public OperatorDTO findByLogin(final String login) throws Exception {
        final var operator = operatorRepository.findByLogin(login);

        if (operator.isPresent())
            return operatorMapper.toDTO(operator.get());
        else
            throw new Exception("Não foi possível buscar Operator pelo Login.");
    }

    @Transactional(NOT_SUPPORTED)
    public List<OperatorDTO> findAll() throws Exception {
        final var operators = operatorRepository.findAll();

        if (operators.isPresent())
            return operators.get()
                    .stream()
                    .map(operator -> operatorMapper.toDTO(operator))
                    .collect(toUnmodifiableList());
        else
            throw new Exception("Não foi possível listar Operators.");
    }

    @Transactional(REQUIRED)
    public void delete(final Long id) {
        operatorRepository.delete(id);
    }

    @Transactional(REQUIRED)
    public void delete(final List<Long> ids) {
        ids.forEach(this::delete);
    }
}
