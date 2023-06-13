import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: []
})
export class ListFornecedorComponent implements OnInit {
  fornecedores: Fornecedor[] = [];

  id: string = '';

  constructor(private fornecedorService: FornecedorService, private router: Router){}

  ngOnInit(): void {
    this.fornecedorService.getAll().subscribe(r => {
      this.fornecedores = r;
    })
  }

  atualizaIdModalExcluir(fornecedor: Fornecedor){
    this.id = fornecedor._id!;
  }

  delete(){ 
    this.fornecedorService.delete(this.id).subscribe();
    this.fornecedores = this.fornecedores.filter((f) => this.id !== f._id);
  }
}
