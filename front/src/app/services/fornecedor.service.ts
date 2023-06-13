import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Fornecedor } from '../models/Fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.baseUrlApi}/fornecedores`);
  }
  
  getById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseUrlApi}/fornecedores/${id}`);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(`${this.baseUrlApi}/fornecedores`, fornecedor);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.put<Fornecedor>(`${this.baseUrlApi}/fornecedores/${fornecedor._id}`, fornecedor);
  }

  delete(id: string): Observable<Fornecedor>{
    return this.http.delete<Fornecedor>(`${this.baseUrlApi}/fornecedores/${id}`);
  }
}
