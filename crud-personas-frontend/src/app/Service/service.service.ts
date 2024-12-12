import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }
  
  Url: string = 'http://localhost:8080/crud-personas-api/personas';
  
  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }
}
