import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  
  Url: string = 'http://localhost:8081/personas';
  
  getPersonas() {
    return this.http.get<Persona[]>(this.Url+'/listar');
  }

  createPersona(persona: Persona) {
    return this.http.post<Persona>(this.Url+'/guardar', persona);
  }

  getPersona(id: number) {
    return this.http.get<Persona>(this.Url+'/listar/' + id);
  }

  updatePersona(persona: Persona) {
    return this.http.post<Persona>(this.Url +'/editar', persona);
  }
}
