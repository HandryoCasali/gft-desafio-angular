import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-colaborador',
  templateUrl: './card-colaborador.component.html',
  styleUrls: ['./card-colaborador.component.css']
})
export class CardColaboradorComponent {
  @Input() imagem:string = '';
  @Input() nome:string = '';
  @Input() idade:string = '';
  @Input() cargo:string = '';
  @Input() hobbie:string = 'nenhum';
}
