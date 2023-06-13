import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos!: Evento[];

  constructor(private eventoService: EventoService){ }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.eventoService.getAll().subscribe(r => {
      console.log(r);
      this.eventos = r;
      console.log(this.eventos)
    });
  }
  
}
