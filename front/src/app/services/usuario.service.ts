import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrlApi}/usuarios`)
  }

  getById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrlApi}/usuarios/${id}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.http.post(`${this.baseUrlApi}/usuarios`, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseUrlApi}/usuarios/${usuario._id}`, usuario);
  }

  delete(id: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseUrlApi}/usuarios/${id}`);
  }

  toggleAdmin(usuario: Usuario){
    return this.http.put(`${this.baseUrlApi}/usuarios/isadmin/${usuario._id}`, {isAdmin: true});
  }

}
