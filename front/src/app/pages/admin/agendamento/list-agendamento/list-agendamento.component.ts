import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agendamento } from 'src/app/models/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-list-agendamento',
  templateUrl: './list-agendamento.component.html',
  styleUrls: [],
})
export class ListAgendamentoComponent implements OnInit {
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService, private router: Router) { }

  ngOnInit(): void {
    this.agendamentoService.getAll().subscribe(r => {
      this.agendamentos = r;
    })
  }
}
