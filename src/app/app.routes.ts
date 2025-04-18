import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/pages/institucional/sobre-nos/sobre-nos.component';
import { PalavraDoPastorComponent } from './components/pages/institucional/palavra-do-pastor/palavra-do-pastor.component';
import { NossasCrencasComponent } from './components/pages/institucional/nossas-crencas/nossas-crencas.component';
import { LocalizacaoContatoComponent } from './components/pages/institucional/localizacao-contato/localizacao-contato.component';
import { HorariosComponent } from './components/pages/institucional/horarios/horarios.component';
import { LiderancaComponent } from './components/pages/institucional/lideranca/lideranca.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'palavra-do-pastor', component: PalavraDoPastorComponent },
  { path: 'nossas-crencas', component: NossasCrencasComponent },
  { path: 'localizacao', component: LocalizacaoContatoComponent },
  { path: 'horarios', component: HorariosComponent },
  { path: 'lideranca', component: LiderancaComponent },
  // Rotas futuras serão adicionadas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }