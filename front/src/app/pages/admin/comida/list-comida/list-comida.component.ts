import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/models/Comida';
import { ComidaService } from 'src/app/services/comida.service';

@Component({
  selector: 'app-list-comida',
  templateUrl: './list-comida.component.html',
  styleUrls: ['./list-comida.component.css']
})
export class ListComidaComponent implements OnInit {
  comidas: Comida[] = [];

  id: string = '';

  constructor(private comidaService: ComidaService, private router: Router){}

  ngOnInit(): void {
    this.comidaService.getAll().subscribe(r => {
      this.comidas = r;
    })
  }


  atualizaIdModalExcluir(comida: Comida){
    this.id = comida._id!;
  }

  delete(){ 
    this.comidaService.delete(this.id).subscribe();
    this.comidas = this.comidas.filter((f) => this.id !== f._id);
  }
}
