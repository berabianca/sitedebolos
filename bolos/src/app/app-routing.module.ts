import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { CardapioComponent } from './navegacao/cardapio/cardapio.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { OndeEncontrarComponent } from './navegacao/onde-encontrar/onde-encontrar.component';
import { PoliticaDePrivacidadeComponent } from './navegacao/politica-de-privacidade/politica-de-privacidade.component';
import { QuemSomosComponent } from './navegacao/quem-somos/quem-somos.component';
import { SejaUmFranqueadoComponent } from './navegacao/seja-um-franqueado/seja-um-franqueado.component';
import { TrabalheConoscoComponent } from './navegacao/trabalhe-conosco/trabalhe-conosco.component';


const routes: Routes = [
  { path: '', pathMatch:'full', component: HomeComponent},
  { path: 'cardapio', component: CardapioComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'onde-encontrar', component: OndeEncontrarComponent},
  { path: 'politica-de-privacidade', component: PoliticaDePrivacidadeComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  { path: 'seja-um-franqueado', component: SejaUmFranqueadoComponent},
  { path: 'trabalhe-conosco', component: TrabalheConoscoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
