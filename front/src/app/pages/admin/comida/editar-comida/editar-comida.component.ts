import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from 'src/app/models/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: []
})
export class EditarComidaComponent implements OnInit{
  comida: Comida = {
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
  }

  mensagemErro = '';

  constructor(private comidaService: ComidaService, private router: Router, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.comida._id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.comidaService.getById(this.comida._id).subscribe(r => this.comida = r);
  }

  onSubmit() {
    this.comidaService.update(this.comida).subscribe(r => {
      this.router.navigate(['admin/comida']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
