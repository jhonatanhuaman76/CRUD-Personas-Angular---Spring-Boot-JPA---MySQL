package com.crudpersonas.crud_personas_backend.repository;

import com.crudpersonas.crud_personas_backend.model.Persona;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PersonaRepository extends Repository<Persona, Integer> {

    List<Persona> findAll();
    Persona findById(Long id);
    Persona save(Persona persona);
    void deleteById(Long id);
}
