package com.github.maikoncanuto.repositories;

import com.github.maikoncanuto.domains.entities.Phone;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

import static java.util.Optional.ofNullable;

@Singleton
public class PhoneRepository {

    @Inject
    EntityManager entityManager;

    public Optional<Phone> save(final Phone phone) {
        entityManager.persist(phone);
        return ofNullable(phone);
    }

    public Optional<Phone> update(final Phone phone) {
        final var phoneUpdate = entityManager.merge(phone);
        return ofNullable(phoneUpdate);
    }

    public Optional<Phone> findById(final Long id) {
        final var phone = entityManager.find(Phone.class, id);
        return ofNullable(phone);
    }

    public Optional<List<Phone>> findAll() {
        final var persons = entityManager
                .createQuery("SELECT phone FROM Phone phone ORDER BY phone.operator.login", Phone.class)
                .getResultList();

        return ofNullable(persons);
    }

    public void delete(final Long id) {
        entityManager.remove(entityManager.find(Phone.class, id));
    }

}
