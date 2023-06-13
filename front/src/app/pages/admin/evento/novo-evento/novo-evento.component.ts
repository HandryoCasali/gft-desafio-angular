import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-novo-evento',
  templateUrl: './novo-evento.component.html',
  styleUrls: []
})
export class NovoEventoComponent {
  evento: Evento = {
    foto: '',
    nome: '',
    descricao: '',
    dataInicio: '',
    dataFim: '',
    horaInicio: '',
    horaFim: '',
  }

  mensagemErro = '';
  

  constructor(private eventoService: EventoService, private router: Router){}

  onSubmit(form: NgForm){
    this.eventoService.create(form.value).subscribe(r => {
      this.router.navigate(['admin/evento']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
