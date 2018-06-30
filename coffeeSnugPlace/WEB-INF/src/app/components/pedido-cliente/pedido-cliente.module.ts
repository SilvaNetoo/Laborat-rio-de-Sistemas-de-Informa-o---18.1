import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoClienteComponent } from './pedido-cliente.component';
import { FazerPedidoModule } from './fazer-pedido/fazer-pedido.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FazerPedidoModule,
    RouterModule
  ],
  declarations: [
    PedidoClienteComponent
  ]
})
export class PedidoClienteModule { }
