package com.github.maikoncanuto.domains.dtos.mappers;

import com.github.maikoncanuto.domains.dtos.PhoneDTO;
import com.github.maikoncanuto.domains.entities.Phone;
import org.mapstruct.Mapper;

@Mapper(componentModel = "cdi")
public interface PhoneMapper {

    Phone toEntity(PhoneDTO person);

    PhoneDTO toDTO(Phone person);
}
