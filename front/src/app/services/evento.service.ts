import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  getAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseUrlApi}/eventos`)
  }

  getById(id: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseUrlApi}/eventos/${id}`);
  }

  create(evento: Evento): Observable<Evento>{
    return this.http.post<Evento>(`${this.baseUrlApi}/eventos`, evento);
  }

  update(evento: Evento): Observable<Evento>{
    return this.http.put<Evento>(`${this.baseUrlApi}/eventos/${evento._id}`, evento);
  }

  delete(id: string): Observable<Evento>{
    return this.http.delete<Evento>(`${this.baseUrlApi}/eventos/${id}`);
  }
}
