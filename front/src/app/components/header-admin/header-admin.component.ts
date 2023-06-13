import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {
  constructor(private auth: AutenticacaoService, private router: Router){}

  hasLogin(){
    return this.auth.verificaLogin();
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['home']);
  }
}
