package com.crudpersonas.crud_personas_backend.service;

import com.crudpersonas.crud_personas_backend.model.Persona;

import java.util.List;

public interface PersonaService {
    List<Persona> listarPersonas();
    Persona buscarPersonaPorId(Long id);
    Persona guardarPersona(Persona persona);
    Persona editarPersona(Persona persona);
    void borrarPersona(Long id);
}
