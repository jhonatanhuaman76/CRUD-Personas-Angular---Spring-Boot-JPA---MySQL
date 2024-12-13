package com.crudpersonas.crud_personas_backend.imp;

import com.crudpersonas.crud_personas_backend.model.Persona;
import com.crudpersonas.crud_personas_backend.repository.PersonaRepository;
import com.crudpersonas.crud_personas_backend.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImp implements PersonaService {

    @Autowired
    private PersonaRepository repository;

    @Override
    public List<Persona> listarPersonas() {
        return repository.findAll();
    }

    @Override
    public Persona buscarPersonaPorId(Long id) {
        return repository.findById(id);
    }

    @Override
    public Persona guardarPersona(Persona persona) {
        return repository.save(persona);
    }

    @Override
    public Persona editarPersona(Persona persona) {
        return repository.save(persona);
    }

    @Override
    public void borrarPersona(Long id) {
        repository.deleteById(id);
    }
}
