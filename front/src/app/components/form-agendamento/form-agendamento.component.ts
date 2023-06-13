import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agendamento } from 'src/app/models/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-form-agendamento',
  templateUrl: './form-agendamento.component.html',
  styleUrls: ['./form-agendamento.component.css']
})
export class FormAgendamentoComponent {
  agendamento: Agendamento = {
    idUsuario: '',
    idEvento: '',
    data: '',
    hora: '',
  }

  mensagemErro = '';

  constructor(private agendamentoService: AgendamentoService, private authService: AutenticacaoService,private router: Router, private activeRouter: ActivatedRoute) { }

  onSubmit() {
    this.agendamento.idEvento = this.activeRouter.snapshot.paramMap.get('idEvento')!;
    this.agendamento.idUsuario = this.authService.getIdUsuarioLogin().sub;
    this.agendamentoService.create(this.agendamento).subscribe(r => {
      this.router.navigate(['eventos']);
    }, error => {
      console.log(error);
    }
    );
  }
}
