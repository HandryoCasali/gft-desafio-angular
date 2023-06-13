import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: []
})
export class ListEventoComponent implements OnInit {
  eventos: Evento[] = [];

  id: string = '';

  constructor(private eventoService: EventoService, private router: Router){}

  ngOnInit(): void {
    this.eventoService.getAll().subscribe(r => {
      this.eventos = r;
    })
  }

  atualizaIdModalExcluir(evento: Evento){
    this.id = evento._id!;
  }

  delete(){ 
    this.eventoService.delete(this.id).subscribe();
    this.eventos = this.eventos.filter((f) => this.id !== f._id);
  }
}
