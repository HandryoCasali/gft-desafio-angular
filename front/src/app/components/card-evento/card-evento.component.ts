import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-evento',
  templateUrl: './card-evento.component.html',
  styleUrls: ['./card-evento.component.css']
})
export class CardEventoComponent {
  @Input() urlFoto!: string;
  @Input() nome!: string;
  @Input() descricao!: string;
  @Input() dataInicio!: string;
  @Input() dataTermino!: string;
  @Input() horaInicio!: string;
  @Input() horaTermino!: string;
  @Input() idEvento!: string;
}
