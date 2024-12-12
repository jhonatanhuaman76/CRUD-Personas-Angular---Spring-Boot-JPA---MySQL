import { Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';

export const routes: Routes = [
  {
    path: 'persona', children: [
      { path: 'listar', component: ListarComponent },
      { path: 'add', component: AddComponent },
      { path: 'edit', component: EditComponent },
      { path: '', redirectTo: 'listar', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'persona', pathMatch: 'full' }
];
