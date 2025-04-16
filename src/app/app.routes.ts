import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './components/pages/institucional/sobre-nos/sobre-nos.component';
import { PalavraDoPastorComponent } from './components/pages/institucional/palavra-do-pastor/palavra-do-pastor.component';
import { NossasCrencasComponent } from './components/pages/institucional/nossas-crencas/nossas-crencas.component';
import { LocalizacaoContatoComponent } from './components/pages/institucional/localizacao-contato/localizacao-contato.component';
import { HorariosComponent } from './components/pages/institucional/horarios/horarios.component';
import { LiderancaComponent } from './components/pages/institucional/lideranca/lideranca.component';
import { HomeComponent } from './components/home/home.component'; // Assumindo que AppComponent servirá como a página inicial

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para a página inicial
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'palavra-do-pastor', component: PalavraDoPastorComponent },
  { path: 'nossas-crencas', component: NossasCrencasComponent },
  { path: 'localizacao', component: LocalizacaoContatoComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'lideranca', component: LiderancaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }