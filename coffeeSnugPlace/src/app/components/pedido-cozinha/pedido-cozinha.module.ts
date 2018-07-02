import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoCozinhaComponent } from './pedido-cozinha.component';
import { AceitaPedidoModule } from './aceita-pedido/aceita-pedido.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FinalizarPedidoModule } from './finalizar-pedido/finalizar-pedido.module';

@NgModule({
  imports: [
    CommonModule,
    AceitaPedidoModule,
    FinalizarPedidoModule,
    RouterModule
  ],
  declarations: [PedidoCozinhaComponent, MenuComponent]
})
export class PedidoCozinhaModule { }
