import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: []
})
export class ListFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  id: string = '';

  constructor(private funcionarioService: FuncionarioService, private router: Router){}

  ngOnInit(): void {
    this.funcionarioService.getAll().subscribe(r => {
      this.funcionarios = r;
    })
  }

  atualizaIdModalExcluir(funcionario: Funcionario){
    this.id = funcionario._id!;
  }

  delete(){ 
    this.funcionarioService.delete(this.id).subscribe();
    this.funcionarios = this.funcionarios.filter((f) => this.id !== f._id);
  }
}
