import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensagemErro = '';
  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {
  }

  onSubmit(form: NgForm) {
    this.autenticacaoService.login(form.value).subscribe((r) => {
      console.log(r.result);
      localStorage.setItem('token', r.result!.token);
      const isAdmin = this.autenticacaoService.verificaLoginAdmin();
      if(isAdmin) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['home']);
      }
    }, (erro) => {
      this.mensagemErro = 'Email e/ou senha inválido(s)';
      console.log(erro);
    });
  }
}
