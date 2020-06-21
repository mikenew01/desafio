package com.github.maikoncanuto.domains.entities;

import com.github.maikoncanuto.domains.enums.PhoneEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import static javax.persistence.EnumType.STRING;
import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "TB_PHONE")
public class Phone extends BaseEntity {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ID_PHONE", nullable = false, unique = true)
    private Long id;

    @NotNull(message = "DDD nao pode ser nulo.")
    @Pattern(regexp = "[0-9]*", message = "Nao pode conter letras no name.")
    @Column(name = "DS_DDD", length = 3, nullable = false)
    private String ddd;

    @NotNull(message = "Numero do telefone nao pode ser nulo.")
    @Size(min = 8, max = 10, message = "Deve conter entre 8 a 10 caracters.")
    @Pattern(regexp = "[0-9]*", message = "Nao pode conter letras no name.")
    @Column(name = "DS_NUMBER", length = 10, nullable = false)
    private String number;

    @NotNull(message = "Tipo do telefone nao pode ser nulo.")
    @Enumerated(STRING)
    @Column(name = "TP_PHONE", nullable = false)
    private PhoneEnum phone;

    @NotNull(message = "ID do operador nao pode ser nulo.")
    @ManyToOne
    @JoinColumn(name = "ID_OPERATOR", referencedColumnName = "ID_OPERATOR", nullable = false)
    private Operator operator;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDdd() {
        return ddd;
    }

    public void setDdd(String ddd) {
        this.ddd = ddd;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public PhoneEnum getPhone() {
        return phone;
    }

    public void setPhone(PhoneEnum phone) {
        this.phone = phone;
    }

    public Operator getOperator() {
        return operator;
    }

    public void setOperator(Operator operator) {
        this.operator = operator;
    }
}
