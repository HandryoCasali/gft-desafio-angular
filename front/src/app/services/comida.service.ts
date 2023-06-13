import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Comida } from '../models/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  getAll(): Observable<Comida[]> {
    return this.http.get<Comida[]>(`${this.baseUrlApi}/comidas`)
  }

  getById(id: string): Observable<Comida> {
    return this.http.get<Comida>(`${this.baseUrlApi}/comidas/${id}`);
  }

  create(comida: Comida): Observable<Comida>{
    return this.http.post<Comida>(`${this.baseUrlApi}/comidas`, comida);
  }

  update(comida: Comida): Observable<Comida>{
    return this.http.put<Comida>(`${this.baseUrlApi}/comidas/${comida._id}`, comida);
  }

  delete(id: string): Observable<Comida>{
    return this.http.delete<Comida>(`${this.baseUrlApi}/comidas/${id}`);
  }
}
