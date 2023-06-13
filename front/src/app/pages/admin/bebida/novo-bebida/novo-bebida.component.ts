import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bebida } from 'src/app/models/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-novo-bebida',
  templateUrl: './novo-bebida.component.html',
  styleUrls: []
})
export class NovoBebidaComponent {
  bebida: Bebida = {
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
  }

  mensagemErro = '';


  constructor(private bebidaService: BebidaService, private router: Router) { }

  onSubmit(form: NgForm) {
    this.bebidaService.create(form.value).subscribe(r => {
      this.router.navigate(['admin/bebida']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
