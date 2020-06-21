package com.github.maikoncanuto.services;

import com.github.maikoncanuto.domains.dtos.PersonDTO;
import com.github.maikoncanuto.domains.dtos.mappers.PersonMapper;
import com.github.maikoncanuto.repositories.PersonRepository;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

import static java.util.stream.Collectors.toUnmodifiableList;
import static javax.transaction.Transactional.TxType.NOT_SUPPORTED;
import static javax.transaction.Transactional.TxType.REQUIRED;

@RequestScoped
public class PersonService {

    @Inject
    PersonRepository personRepository;

    @Inject
    PersonMapper personMapper;

    @Transactional(REQUIRED)
    public PersonDTO save(PersonDTO personDTO) throws Exception {
        final var personFromDTO = personMapper.toEntity(personDTO);
        final var personDatabase = personRepository.save(personFromDTO);

        if (personDatabase.isPresent())
            return personMapper.toDTO(personDatabase.get());
        else
            throw new Exception("Não foi possível salvar Person.");
    }

    @Transactional(NOT_SUPPORTED)
    public PersonDTO findById(final Long id) throws Exception {
        final var personOptional = personRepository.findById(id);

        if (personOptional.isPresent())
            return personMapper.toDTO(personOptional.get());
        else
            throw new Exception("Não foi possível encontrar o Person.");
    }

    @Transactional(REQUIRED)
    public PersonDTO update(final PersonDTO personDTO) throws Exception {
        final var personFromDTO = personMapper.toEntity(personDTO);
        final var personDatabase = personRepository.update(personFromDTO);

        if (personDatabase.isPresent())
            return personMapper.toDTO(personDatabase.get());
        else
            throw new Exception("Não foi possível atualizar o Person.");

    }

    @Transactional(NOT_SUPPORTED)
    public List<PersonDTO> findAll() throws Exception {
        final var persons = personRepository.findAll();

        if (persons.isPresent())
            return persons
                    .get()
                    .stream()
                    .map(person -> personMapper.toDTO(person)).collect(toUnmodifiableList());
        else
            throw new Exception("Não foi possível listar os Persons.");
    }

    @Transactional(REQUIRED)
    public void delete(final Long id) {
        personRepository.delete(id);
    }

    @Transactional(REQUIRED)
    public void delete(final List<Long> ids) {
        ids.forEach(this::delete);
    }
}
