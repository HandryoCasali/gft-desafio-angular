import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bebida } from 'src/app/models/Bebida';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'app-editar-bebida',
  templateUrl: './editar-bebida.component.html',
  styleUrls: []
})
export class EditarBebidaComponent implements OnInit{
  bebida: Bebida = {
    foto: '',
    nome: '',
    descricao: '',
    preco: 0,
  }

  mensagemErro = '';


  constructor(private bebidaService: BebidaService, private router: Router, private activeRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.bebida._id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.bebidaService.getById(this.bebida._id).subscribe(r => this.bebida = r);
  }

  onSubmit() {
    this.bebidaService.update(this.bebida).subscribe(r => {
      this.router.navigate(['admin/bebida']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
