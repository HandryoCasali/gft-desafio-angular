import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: []
})
export class EditarFuncionarioComponent implements OnInit {
  funcionario: Funcionario = {
    nome: '',
    foto: '',
    cargo: '',
    hobbie: '',
    naturalidade: '',
  }

  mensagemErro = '';

  constructor(private funcionarioService: FuncionarioService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.funcionario._id = this.activeRouter.snapshot.paramMap.get('id')!
    this.funcionarioService.getById(this.funcionario._id).subscribe(r => this.funcionario = r);
  }

  onSubmit(form: NgForm) {
    this.funcionarioService.update(this.funcionario).subscribe(r => {
      this.router.navigate(['admin/funcionario']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    });
  }
}
