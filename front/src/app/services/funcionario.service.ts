import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.baseUrlApi}/funcionarios`);
  }
  
  getById(id: string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.baseUrlApi}/funcionarios/${id}`);
  }

  create(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.baseUrlApi}/funcionarios`, funcionario);
  }

  update(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.put<Funcionario>(`${this.baseUrlApi}/funcionarios/${funcionario._id}`, funcionario);
  }

  delete(id: string): Observable<Funcionario>{
    return this.http.delete<Funcionario>(`${this.baseUrlApi}/funcionarios/${id}`);
  }
}
