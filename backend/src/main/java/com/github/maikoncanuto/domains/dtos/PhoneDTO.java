package com.github.maikoncanuto.domains.dtos;

import com.github.maikoncanuto.domains.entities.Operator;
import com.github.maikoncanuto.domains.enums.PhoneEnum;

public class PhoneDTO extends BaseDTO {

    private Long id;
    private String ddd;
    private String number;
    private PhoneEnum phone;
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
