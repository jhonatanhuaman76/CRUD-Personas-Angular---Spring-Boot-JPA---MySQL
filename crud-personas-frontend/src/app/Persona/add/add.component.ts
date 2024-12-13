import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  p: Persona = new Persona();

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  guardarPersona() { 
    this.service.createPersona(this.p).
    subscribe(persona => {
      alert('Persona Guardada con exito');
      this.router.navigate(['persona/listar']);
    });
  }
}
