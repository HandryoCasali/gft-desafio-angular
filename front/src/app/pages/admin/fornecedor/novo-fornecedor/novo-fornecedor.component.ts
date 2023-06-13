import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-novo-fornecedor',
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: []
})
export class NovoFornecedorComponent {
  fornecedor: Fornecedor = {
    nome: '',
    foto:'',
    descricao:'',
  }

  mensagemErro = '';
  
  constructor(private fornecedorService: FornecedorService, private router: Router){}

  onSubmit(form: NgForm){
    this.fornecedorService.create(form.value).subscribe(r => {
      this.router.navigate(['admin/fornecedor']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
