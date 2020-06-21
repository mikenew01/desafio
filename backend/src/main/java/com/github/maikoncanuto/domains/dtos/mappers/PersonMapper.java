package com.github.maikoncanuto.domains.dtos.mappers;

import com.github.maikoncanuto.domains.dtos.PersonDTO;
import com.github.maikoncanuto.domains.entities.Person;
import org.mapstruct.Mapper;

@Mapper(componentModel = "cdi")
public interface PersonMapper {

    Person toEntity(PersonDTO person);

    PersonDTO toDTO(Person person);

}
