package com.github.maikoncanuto.services;

import com.github.maikoncanuto.config.H2DatabaseTestResource;
import com.github.maikoncanuto.domains.dtos.PersonDTO;
import io.quarkus.test.common.QuarkusTestResource;
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.inject.Inject;
import java.util.Date;

import static com.github.maikoncanuto.domains.enums.TypePersonEnum.PESSOA_FISICA;

@QuarkusTest
@QuarkusTestResource(H2DatabaseTestResource.class)
public class PersonServiceTest {

    @Inject
    PersonService personService;

    PersonDTO person;

    @BeforeEach
    public void setUp() {
        person = new PersonDTO();

        person.setDateBirth(new Date());
        person.setDocument("00000000001");
        person.setName("person");
        person.setNameFather("pesronFather");
        person.setNameMother("personMother");
        person.setTypePerson(PESSOA_FISICA);
    }


    @Test
    public void testSavePersonFullInformation() throws Exception {
        final var personDTO = personService.save(person);
        Assertions.assertEquals(person.getName(), personDTO.getName());
        personService.delete(personDTO.getId());
    }

    @Test
    public void testfindAllPersonFullInformation() throws Exception {
        final var personDTO = personService.save(person);
        Assertions.assertEquals(person.getName(), personDTO.getName());
        final var persons = personService.findAll();
        Assertions.assertFalse(persons.isEmpty());
        personService.delete(personDTO.getId());
    }

}

