import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: []
})
export class CadastrarComponent {
  mensagemErro = '';
  constructor(private usuarioService: UsuarioService, private router: Router){}

  onSubmit(form: NgForm){
    
    this.usuarioService.create(form.value).subscribe(() => {
      this.router.navigate(['/login']);
    }, (error)=> {
      if(error.error.erro == 'Email já cadastrado' || error.error.erro == 'CPF inválido'){
        this.mensagemErro = error.error.erro;
      }
      console.log(error);
    });
    
  }
}
