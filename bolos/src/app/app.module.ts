import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { QuemSomosComponent } from './navegacao/quem-somos/quem-somos.component';
import { OndeEncontrarComponent } from './navegacao/onde-encontrar/onde-encontrar.component';
import { CardapioComponent } from './navegacao/cardapio/cardapio.component';
import { SejaUmFranqueadoComponent } from './navegacao/seja-um-franqueado/seja-um-franqueado.component';
import { TrabalheConoscoComponent } from './navegacao/trabalhe-conosco/trabalhe-conosco.component';
import { PoliticaDePrivacidadeComponent } from './navegacao/politica-de-privacidade/politica-de-privacidade.component';
import { HomeComponent } from './navegacao/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QuemSomosComponent,
    OndeEncontrarComponent,
    CardapioComponent,
    SejaUmFranqueadoComponent,
    TrabalheConoscoComponent,
    PoliticaDePrivacidadeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
