import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Comida } from 'src/app/models/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-novo-comida',
  templateUrl: './novo-comida.component.html',
  styleUrls: []
})
export class NovoComidaComponent {
  comida: Comida = {
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
  }

  mensagemErro = '';


  constructor(private comidaService: ComidaService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.comidaService.create(form.value).subscribe(r => {
      this.router.navigate(['admin/comida']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    });
  }
}
