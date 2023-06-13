import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Bebida } from '../models/Bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  getAll(): Observable<Bebida[]> {
    return this.http.get<Bebida[]>(`${this.baseUrlApi}/bebidas`)
  }

  getById(id: string): Observable<Bebida> {
    return this.http.get<Bebida>(`${this.baseUrlApi}/bebidas/${id}`);
  }

  create(bebida: Bebida): Observable<Bebida>{
    return this.http.post<Bebida>(`${this.baseUrlApi}/bebidas`, bebida);
  }

  update(bebida: Bebida): Observable<Bebida>{
    return this.http.put<Bebida>(`${this.baseUrlApi}/bebidas/${bebida._id}`, bebida);
  }

  delete(id: string): Observable<Bebida>{
    return this.http.delete<Bebida>(`${this.baseUrlApi}/bebidas/${id}`);
  }
}

