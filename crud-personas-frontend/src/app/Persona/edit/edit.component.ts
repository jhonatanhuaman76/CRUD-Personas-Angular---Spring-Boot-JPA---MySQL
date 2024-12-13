import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  p: Persona = new Persona();
  
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.cargarDatosAlForm();
  }

  cargarDatosAlForm() {
    let id = localStorage.getItem("id");
    this.service.getPersona(parseInt(id!)).subscribe(persona => {
      this.p = persona;
    });
  }

  modificarPersona() {
    this.service.updatePersona(this.p).subscribe(persona => {
      alert('Persona Actualizada con exito');
      this.router.navigate(['persona/listar']);
    });
  }
}
