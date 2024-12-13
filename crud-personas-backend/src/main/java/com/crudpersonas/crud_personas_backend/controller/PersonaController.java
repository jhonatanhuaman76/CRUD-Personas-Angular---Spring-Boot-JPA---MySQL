package com.crudpersonas.crud_personas_backend.controller;

import com.crudpersonas.crud_personas_backend.imp.PersonaServiceImp;
import com.crudpersonas.crud_personas_backend.model.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/personas"})
public class PersonaController {
    @Autowired
    private PersonaServiceImp service;

    @GetMapping
    @RequestMapping({"/listar"})
    public List<Persona> listarPersonas() {
        return service.listarPersonas();
    }

    @GetMapping
    @RequestMapping({"/listar/{id}"})
    public Persona buscarPersonaPorId(@PathVariable Long id) {
        return service.buscarPersonaPorId(id);
    }

    @PostMapping
    @RequestMapping({"/guardar"})
    public Persona guardarPersona(@RequestBody Persona persona) {
        return service.guardarPersona(persona);
    }

    @PutMapping
    @RequestMapping({"/editar"})
    public Persona editarPersona(@RequestBody Persona persona) {
        return service.editarPersona(persona);
    }

    @DeleteMapping
    @RequestMapping({"/borrar/{id}"})
    public void borrarPersona(Long id) {
        service.borrarPersona(id);
    }
}
