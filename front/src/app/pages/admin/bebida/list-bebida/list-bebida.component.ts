import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bebida } from 'src/app/models/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-list-bebida',
  templateUrl: './list-bebida.component.html',
  styleUrls: ['./list-bebida.component.css']
})
export class ListBebidaComponent implements OnInit{
  bebidas: Bebida[] = [];

  id: string = '';

  constructor(private bebidaService: BebidaService, private router: Router){}

  ngOnInit(): void {
    this.bebidaService.getAll().subscribe(r => {
      this.bebidas = r;
    })
  }

  atualizaIdModalExcluir(bebida: Bebida){
    this.id = bebida._id!;
  }

  delete(){ 
    this.bebidaService.delete(this.id).subscribe();
    this.bebidas = this.bebidas.filter((f) => this.id !== f._id);
  }
}
