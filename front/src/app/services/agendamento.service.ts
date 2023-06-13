import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroment } from 'src/enviroment/enviroment';
import { Agendamento } from '../models/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  create(agendamento: Agendamento): Observable<Agendamento>{
    return this.http.post<Agendamento>(`${this.baseUrlApi}/agendamentos`, agendamento);
  }

  getAll(): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(`${this.baseUrlApi}/agendamentos`);
  }
}
