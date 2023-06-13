import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: []
})
export class NovoFuncionarioComponent {
  funcionario: Funcionario = {
    nome: '',
    foto:'',
    cargo:'',
    hobbie:'',
    naturalidade:'',
  }


  mensagemErro = '';
  

  constructor(private funcionarioService: FuncionarioService, private router: Router){}

  onSubmit(form: NgForm){
    this.funcionarioService.create(form.value).subscribe(r => {
      this.router.navigate(['admin/funcionario']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
