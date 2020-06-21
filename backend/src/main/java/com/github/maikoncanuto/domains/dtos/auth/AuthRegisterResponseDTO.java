package com.github.maikoncanuto.domains.dtos.auth;

import com.github.maikoncanuto.domains.dtos.BaseDTO;

public class AuthRegisterResponseDTO<T extends BaseDTO> extends BaseDTO {

    private Integer code;
    private String mensage;
    private T data;

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

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
