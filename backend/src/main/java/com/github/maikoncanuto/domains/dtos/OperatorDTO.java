package com.github.maikoncanuto.domains.dtos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.github.maikoncanuto.domains.enums.RoleEnum;

public class OperatorDTO extends BaseDTO {

    private Long id;

    private String login;

    @JsonIgnore
    private String password;

    private PersonDTO person;

    private RoleEnum role;

    public RoleEnum getRole() {
        return role;
    }

    public void setRole(RoleEnum role) {
        this.role = role;
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

    public PersonDTO getPerson() {
        return person;
    }

    public void setPerson(PersonDTO person) {
        this.person = person;
    }

}
