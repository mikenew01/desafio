package com.github.maikoncanuto.domains.dtos;

import com.github.maikoncanuto.domains.enums.TypePersonEnum;

import java.util.Date;

public class PersonDTO extends BaseDTO {

    private Long id;
    private String name;
    private String document;
    private String nameFather;
    private String nameMother;
    private TypePersonEnum typePerson;
    private Date dateBirth;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getNameFather() {
        return nameFather;
    }

    public void setNameFather(String nameFather) {
        this.nameFather = nameFather;
    }

    public String getNameMother() {
        return nameMother;
    }

    public void setNameMother(String nameMother) {
        this.nameMother = nameMother;
    }

    public TypePersonEnum getTypePerson() {
        return typePerson;
    }

    public void setTypePerson(TypePersonEnum typePerson) {
        this.typePerson = typePerson;
    }

    public Date getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(Date dateBirth) {
        this.dateBirth = dateBirth;
    }
}
