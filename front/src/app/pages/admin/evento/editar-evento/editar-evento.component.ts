import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: []
})
export class EditarEventoComponent implements OnInit {
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
  

  constructor(private eventoService: EventoService, private router: Router, private activeRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.evento._id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.eventoService.getById(this.evento._id).subscribe(r => this.evento = r);
  }
  onSubmit(){
    this.eventoService.update(this.evento).subscribe(r => {
      this.router.navigate(['admin/evento']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
