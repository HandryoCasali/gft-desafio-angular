import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: []
})
export class EditarFornecedorComponent implements OnInit {
  fornecedor: Fornecedor = {
    nome: '',
    foto:'',
    descricao:'',
  }

  mensagemErro = '';
  
  constructor(private fornecedorService: FornecedorService, private router: Router, private activeRouter: ActivatedRoute){}
 
  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.fornecedor._id = this.activeRouter.snapshot.paramMap.get('id')!;
    this.fornecedorService.getById(this.fornecedor._id).subscribe(r => this.fornecedor = r);
  }


  onSubmit(){
    this.fornecedorService.update(this.fornecedor).subscribe(r => {
      this.router.navigate(['admin/fornecedor']);
    }, error => {
      console.log(error)
      this.mensagemErro = 'Campos necessários: *';
    }
    );
  }
}
