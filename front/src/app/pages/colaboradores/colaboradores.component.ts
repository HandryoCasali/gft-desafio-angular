import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit{
  colaboradores: Funcionario[] = []

  constructor (private funcionarioService: FuncionarioService){}
  ngOnInit(): void {
    this.getAll();
  }

  
  getAll(){
    this.funcionarioService.getAll().subscribe(r => {
      console.log(r)
      this.colaboradores = r
    })
  }
}
