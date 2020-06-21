package com.github.maikoncanuto.repositories;

import com.github.maikoncanuto.domains.entities.Person;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

import static java.util.Optional.ofNullable;

@Singleton
public class PersonRepository {

    @Inject
    EntityManager entityManager;

    public Optional<Person> save(final Person operator) {
        entityManager.persist(operator);
        return ofNullable(operator);
    }

    public Optional<Person> update(final Person person) {
        final var personUpdate = entityManager.merge(person);
        return ofNullable(personUpdate);
    }

    public Optional<Person> findById(final Long id) {
        final var person = entityManager.find(Person.class, id);
        return ofNullable(person);
    }

    public Optional<List<Person>> findAll() {
        final var persons = entityManager
                .createQuery("SELECT person FROM Person person ORDER BY person.name", Person.class)
                .getResultList();

        return ofNullable(persons);
    }

    public void delete(final Long id) {
        entityManager.remove(entityManager.find(Person.class, id));
    }

}
