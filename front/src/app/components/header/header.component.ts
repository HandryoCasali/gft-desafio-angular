import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth: AutenticacaoService){}

  hasLogin(){
    return this.auth.verificaLogin();
  }

  logout(){
    this.auth.logout();
  }

  isAdmin(){
    return this.auth.verificaLoginAdmin();
  }

}
