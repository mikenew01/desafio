package com.github.maikoncanuto.domains.entities;

import com.github.maikoncanuto.domains.enums.TypePersonEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "TB_PERSON")
public class Person extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ID_PERSON", unique = true, nullable = false)
    private Long id;

    @NotNull
    @Column(name = "DS_NAME", length = 100, nullable = false)
    private String name;

    @NotNull
    @Column(name = "DS_DOCUMENT", length = 14, nullable = false)
    private String document;

    @Column(name = "DS_NAME_FATHER", length = 100)
    private String nameFather;

    @Column(name = "DS_NAME_MOTHER", length = 100)
    private String nameMother;

    @NotNull
    @Column(name = "TYPE_PERSON", nullable = false)
    @Enumerated(STRING)
    private TypePersonEnum typePerson;

    @Column(name = "DT_DATE_BIRTH")
    private LocalDate dateBirth;

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

    public LocalDate getDateBirth() {
        return dateBirth;
    }

    public void setDateBirth(LocalDate dateBirth) {
        this.dateBirth = dateBirth;
    }

}
