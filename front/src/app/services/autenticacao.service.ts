import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviroment } from 'src/enviroment/enviroment';
import { TokenAdmin } from '../models/TokenAdmin';
import { Usuario } from '../models/Usuario';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { TokenLogin } from '../models/TokenLogin';
import { TokenUsuario } from '../models/TokenUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private baseUrlApi = Enviroment.baseUrlApi;

  constructor(private http: HttpClient){ }

  login(usuario: Usuario): Observable<TokenLogin>{
    return this.http.post(`${this.baseUrlApi}/login`, usuario);
  }

  verificaLoginAdmin(): boolean {
    const token : string = localStorage.getItem('token')!;
    if(token === null){
      return false;
    }
    const tokenAdmin: TokenAdmin = jwtDecode<TokenAdmin>(token);

    return tokenAdmin.claim;
  }

  verificaLogin(): boolean {
    const token : string | null = localStorage.getItem('token');
    return token === null ? false : true;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getIdUsuarioLogin(): TokenUsuario{
    const token : string = localStorage.getItem('token')!;
    const tokenUsuario: TokenUsuario = jwtDecode<TokenUsuario>(token);
    return tokenUsuario;
  }
}
