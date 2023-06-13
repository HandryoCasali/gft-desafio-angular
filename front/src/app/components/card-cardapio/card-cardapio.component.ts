import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cardapio',
  templateUrl: './card-cardapio.component.html',
  styleUrls: ['./card-cardapio.component.css']
})
export class CardCardapioComponent {
  @Input() urlImagem!: string;
  @Input() nome!: string;
  @Input() descricao!: string;
  @Input() preco!: string;
}
