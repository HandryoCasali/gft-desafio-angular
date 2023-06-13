import { Component, OnInit } from '@angular/core';
import { Bebida } from 'src/app/models/Bebida';
import { Comida } from 'src/app/models/Comida';
import { BebidaService } from 'src/app/services/bebida.service';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit{
  comidas: Comida[] = []

  bebidas: Bebida[] = []

  constructor(private bebidaService: BebidaService, private comidaService: ComidaService){
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.bebidaService.getAll().subscribe(r => this.bebidas = r);
    this.comidaService.getAll().subscribe(r => this.comidas = r);
  }
}
