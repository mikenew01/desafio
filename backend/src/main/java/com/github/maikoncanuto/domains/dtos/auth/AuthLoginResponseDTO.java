package com.github.maikoncanuto.domains.dtos.auth;

import com.github.maikoncanuto.domains.dtos.BaseDTO;

public class AuthLoginResponseDTO extends BaseDTO {

    private Integer code;
    private String mensage;
    private String token;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMensage() {
        return mensage;
    }

    public void setMensage(String mensage) {
        this.mensage = mensage;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
