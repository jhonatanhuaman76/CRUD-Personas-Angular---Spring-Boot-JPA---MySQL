import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  constructor(private router: Router) { }

  actualizarPersona() {
    this.router.navigate(['persona/edit']);
  }
}
