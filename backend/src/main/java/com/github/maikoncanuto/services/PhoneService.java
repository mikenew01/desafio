package com.github.maikoncanuto.services;

import com.github.maikoncanuto.domains.dtos.PhoneDTO;
import com.github.maikoncanuto.domains.dtos.mappers.PhoneMapper;
import com.github.maikoncanuto.repositories.PhoneRepository;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

import static java.util.stream.Collectors.toUnmodifiableList;
import static javax.transaction.Transactional.TxType.NOT_SUPPORTED;
import static javax.transaction.Transactional.TxType.REQUIRED;

@RequestScoped
public class PhoneService {


    @Inject
    PhoneRepository phoneRepository;

    @Inject
    PhoneMapper phoneMapper;

    @Transactional(REQUIRED)
    public PhoneDTO save(PhoneDTO phoneDTO) throws Exception {
        final var phoneFromDTO = phoneMapper.toEntity(phoneDTO);
        final var phoneDatabase = phoneRepository.save(phoneFromDTO);

        if (phoneDatabase.isPresent())
            return phoneMapper.toDTO(phoneDatabase.get());
        else
            throw new Exception("Não foi possível salvar Phone.");
    }

    @Transactional(NOT_SUPPORTED)
    public PhoneDTO findById(final Long id) throws Exception {
        final var phoneOptional = phoneRepository.findById(id);

        if (phoneOptional.isPresent())
            return phoneMapper.toDTO(phoneOptional.get());
        else
            throw new Exception("Não foi possível encontrar o Phone.");
    }

    @Transactional(REQUIRED)
    public PhoneDTO update(final PhoneDTO phoneDTO) throws Exception {
        final var phoneFromDTO = phoneMapper.toEntity(phoneDTO);
        final var phoneDatabase = phoneRepository.update(phoneFromDTO);

        if (phoneDatabase.isPresent())
            return phoneMapper.toDTO(phoneDatabase.get());
        else
            throw new Exception("Não foi possível atualizar o Phone.");

    }

    @Transactional(NOT_SUPPORTED)
    public List<PhoneDTO> findAll() throws Exception {
        final var phones = phoneRepository.findAll();

        if (phones.isPresent())
            return phones
                    .get()
                    .stream()
                    .map(phone -> phoneMapper.toDTO(phone)).collect(toUnmodifiableList());
        else
            throw new Exception("Não foi possível listar os Phones.");
    }

    @Transactional(REQUIRED)
    public void delete(final Long id) {
        phoneRepository.delete(id);
    }
}
