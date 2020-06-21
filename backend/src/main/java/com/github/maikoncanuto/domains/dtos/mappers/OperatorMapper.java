package com.github.maikoncanuto.domains.dtos.mappers;

import com.github.maikoncanuto.domains.dtos.OperatorDTO;
import com.github.maikoncanuto.domains.entities.Operator;
import org.mapstruct.Mapper;

@Mapper(componentModel = "cdi")
public interface OperatorMapper {

    Operator toEntity(OperatorDTO person);

    OperatorDTO toDTO(Operator person);

}
