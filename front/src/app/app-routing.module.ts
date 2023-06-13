import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { AutenticacaoGuard } from './guards/autenticacao.guard';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/usuario/cadastrar/cadastrar.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { ListFuncionarioComponent } from './pages/admin/funcionario/list-funcionario/list-funcionario.component';
import { NovoFuncionarioComponent } from './pages/admin/funcionario/novo-funcionario/novo-funcionario.component';
import { EditarFuncionarioComponent } from './pages/admin/funcionario/editar-funcionario/editar-funcionario.component';
import { ListFornecedorComponent } from './pages/admin/fornecedor/list-fornecedor/list-fornecedor.component';
import { NovoFornecedorComponent } from './pages/admin/fornecedor/novo-fornecedor/novo-fornecedor.component';
import { EditarFornecedorComponent } from './pages/admin/fornecedor/editar-fornecedor/editar-fornecedor.component';
import { ListBebidaComponent } from './pages/admin/bebida/list-bebida/list-bebida.component';
import { NovoBebidaComponent } from './pages/admin/bebida/novo-bebida/novo-bebida.component';
import { EditarBebidaComponent } from './pages/admin/bebida/editar-bebida/editar-bebida.component';
import { ListComidaComponent } from './pages/admin/comida/list-comida/list-comida.component';
import { NovoComidaComponent } from './pages/admin/comida/novo-comida/novo-comida.component';
import { EditarComidaComponent } from './pages/admin/comida/editar-comida/editar-comida.component';
import { ListEventoComponent } from './pages/admin/evento/list-evento/list-evento.component';
import { NovoEventoComponent } from './pages/admin/evento/novo-evento/novo-evento.component';
import { EditarEventoComponent } from './pages/admin/evento/editar-evento/editar-evento.component';
import { ListUsuarioComponent } from './pages/admin/usuario/list-usuario/list-usuario.component';
import { ListAgendamentoComponent } from './pages/admin/agendamento/list-agendamento/list-agendamento.component';
import { FormAgendamentoComponent } from './components/form-agendamento/form-agendamento.component';
import { AgendamentoGuard } from './guards/agendamento.guard';

const routes: Routes = [
  {path:'', component: HeaderComponent, children: [
    {path:'home', component: HomeComponent},
    {path:'colaboradores', component: ColaboradoresComponent},
    {path:'eventos', component: EventosComponent},
    {path:'eventos/agendamento/novo/:idEvento', component: FormAgendamentoComponent, canActivate:[AgendamentoGuard]},
    {path:'cardapio', component: CardapioComponent},
    {path:'login', component: LoginComponent},
    {path:'cadastrar', component: CadastrarComponent},
  ]},
  
  {path:'admin', component: HeaderAdminComponent, canActivate:[AutenticacaoGuard], children:[
    {path:'funcionario', component: ListFuncionarioComponent},
    {path:'funcionario/novo', component: NovoFuncionarioComponent},
    {path:'funcionario/editar/:id', component: EditarFuncionarioComponent},

    {path:'fornecedor', component: ListFornecedorComponent},
    {path:'fornecedor/novo', component: NovoFornecedorComponent},
    {path:'fornecedor/editar/:id', component: EditarFornecedorComponent},

    {path:'bebida', component: ListBebidaComponent},
    {path:'bebida/novo', component: NovoBebidaComponent},
    {path:'bebida/editar/:id', component: EditarBebidaComponent},

    {path:'comida', component: ListComidaComponent},
    {path:'comida/novo', component: NovoComidaComponent},
    {path:'comida/editar/:id', component: EditarComidaComponent},

    {path:'evento', component: ListEventoComponent},
    {path:'evento/novo', component: NovoEventoComponent},
    {path:'evento/editar/:id', component: EditarEventoComponent},
    {path:'evento/agendamentos', component: ListAgendamentoComponent},

    {path:'usuario', component: ListUsuarioComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
