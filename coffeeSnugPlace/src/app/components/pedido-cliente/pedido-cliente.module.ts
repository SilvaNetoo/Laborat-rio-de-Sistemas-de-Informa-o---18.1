import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FazerPedidoModule } from './fazer-pedido/fazer-pedido.module';
import { PedidoClienteComponent } from './pedido-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FazerPedidoModule,
    RouterModule
  ],
  declarations: [
    PedidoClienteComponent,
  ]
})
export class PedidoClienteModule { }
