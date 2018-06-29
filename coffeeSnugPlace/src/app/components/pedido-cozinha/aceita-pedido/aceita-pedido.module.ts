import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AceitaPedidoComponent } from './aceita-pedido.component';
import { ConfirmarPedidoComponent } from './confirmar-pedido/confirmar-pedido.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AceitaPedidoComponent, ConfirmarPedidoComponent]
})
export class AceitaPedidoModule { }
