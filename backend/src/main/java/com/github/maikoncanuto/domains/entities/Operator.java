package com.github.maikoncanuto.domains.entities;

import com.github.maikoncanuto.domains.enums.RoleEnum;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import static com.github.maikoncanuto.domains.enums.RoleEnum.OPERADOR;
import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "TB_OPERATOR")
public class Operator extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ID_OPERATOR", nullable = false, unique = true)
    private Long id;

    @NotBlank
    @Size(max = 15, message = "Nao deve conter mais de 15 caracters.")
    @Column(name = "DS_LOGIN_OPERATOR", length = 15, nullable = false, unique = true)
    private String login;

    @NotBlank
    @Column(name = "DS_PASSWORD", length = 200, nullable = false)
    private String password;

    @NotNull
    @Enumerated(STRING)
    @Column(name = "DS_ROLE", length = 20, nullable = false)
    private RoleEnum role = OPERADOR;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "ID_PERSON", referencedColumnName = "ID_PERSON", nullable = false)
    private Person person;

    public RoleEnum getRole() {
        return role;
    }

    public void setRole(RoleEnum role) {
        this.role = role;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
