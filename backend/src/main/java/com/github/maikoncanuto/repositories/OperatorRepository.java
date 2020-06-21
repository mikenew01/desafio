package com.github.maikoncanuto.repositories;

import com.github.maikoncanuto.domains.entities.Operator;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;
import java.util.Optional;

@Singleton
public class OperatorRepository {

    @Inject
    EntityManager entityManager;

    public Optional<Operator> save(final Operator operator) {
        entityManager.persist(operator);
        return Optional.ofNullable(operator);
    }

    public Optional<Operator> update(final Operator operator) {
        final Operator operatorUpdate = entityManager.merge(operator);
        return Optional.ofNullable(operatorUpdate);
    }

    public Optional<Operator> findById(final Long id) {
        final Operator operator = entityManager.find(Operator.class, id);
        return Optional.ofNullable(operator);
    }

    public Optional<Operator> findByLogin(final String login) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<Operator> criteriaQuery = criteriaBuilder.createQuery(Operator.class);
        final Root<Operator> root = criteriaQuery.from(Operator.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get("login"), login));
        final Operator operator = entityManager.createQuery(criteriaQuery).getSingleResult();
        return Optional.ofNullable(operator);
    }

    public Optional<Operator> findByLoginAndPassword(final String login, final String password) {
        final Operator operator = entityManager
                .createQuery("SELECT operator FROM Operator operator WHERE operator.login = :login AND operator.password = :password", Operator.class)
                .setParameter("login", login)
                .setParameter("password", password)
                .getSingleResult();

        return Optional.ofNullable(operator);
    }

    public Optional<List<Operator>> findAll() {
        final List<Operator> operators = entityManager
                .createQuery("SELECT operator FROM Operator operator ORDER BY operator.login", Operator.class)
                .getResultList();

        return Optional.ofNullable(operators);
    }

    public void delete(final Long id) {
        entityManager.remove(entityManager.find(Operator.class, id));
    }
}
