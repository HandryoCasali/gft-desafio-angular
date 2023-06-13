import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardColaboradorComponent } from './components/card-colaborador/card-colaborador.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { CardEventoComponent } from './components/card-evento/card-evento.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CardCardapioComponent } from './components/card-cardapio/card-cardapio.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { CadastrarComponent } from './pages/usuario/cadastrar/cadastrar.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
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
import { FormAgendamentoComponent } from './components/form-agendamento/form-agendamento.component';
import { ListAgendamentoComponent } from './pages/admin/agendamento/list-agendamento/list-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardColaboradorComponent,
    ColaboradoresComponent,
    TituloComponent,
    CardEventoComponent,
    EventosComponent,
    CardapioComponent,
    CardCardapioComponent,
    LoginComponent,
    CadastrarComponent,
    HeaderAdminComponent,
    ListFuncionarioComponent,
    NovoFuncionarioComponent,
    EditarFuncionarioComponent,
    ListFornecedorComponent,
    NovoFornecedorComponent,
    EditarFornecedorComponent,
    ListBebidaComponent,
    NovoBebidaComponent,
    EditarBebidaComponent,
    ListComidaComponent,
    NovoComidaComponent,
    EditarComidaComponent,
    ListEventoComponent,
    NovoEventoComponent,
    EditarEventoComponent,
    ListUsuarioComponent,
    FormAgendamentoComponent,
    ListAgendamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
