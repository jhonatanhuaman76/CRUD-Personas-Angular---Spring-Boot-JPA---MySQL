import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../Modelo/Persona';
import { ServiceService } from '../../Service/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  personas: Persona[] = [];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(personas => this.personas = personas);
  }

  actualizarPersona(persona: Persona) {
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(['persona/edit']);
  }

  eliminarPersona(persona: Persona) {
    let ok = confirm('Desea eliminar a ' + persona.nombres + ' ' + persona.apellidos);

    if (!ok) return;
    
    this.service.deletePersona(persona.id).subscribe(persona => {
      this.service.getPersonas().subscribe(personas => this.personas = personas);
    });
  }
}
