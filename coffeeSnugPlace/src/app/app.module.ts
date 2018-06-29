import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.router';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGarcomComponent } from './components/login-garcom/login-garcom.component';
import { LoginCozinheiroComponent } from './components/login-cozinheiro/login-cozinheiro.component';
import { FormsModule } from '@angular/forms';
import { PedidoClienteModule } from './components/pedido-cliente/pedido-cliente.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginGarcomComponent,
    LoginCozinheiroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    PedidoClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }