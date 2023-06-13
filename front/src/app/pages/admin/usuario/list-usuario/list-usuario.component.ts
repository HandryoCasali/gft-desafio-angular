import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: []
})
export class ListUsuarioComponent implements OnInit{
  usuarios: Usuario[] = [];

  mensagem = '';

  id: string = '';

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(r => {
      this.usuarios = r;
    })
  }

  atualizaIdModalExcluir(usuario: Usuario){
    this.id = usuario._id!;
  }

  delete(){ 
    this.usuarioService.delete(this.id).subscribe();
    this.usuarios = this.usuarios.filter((f) => this.id !== f._id);
  }

  tornarAdmin(usuario: Usuario){
    this.usuarioService.toggleAdmin(usuario).subscribe(r=> {
      this.mensagem = 'Usuario agora é admin';
      setInterval(() => {
        this.mensagem = '';
      }, 3000);
    });
  }
}
