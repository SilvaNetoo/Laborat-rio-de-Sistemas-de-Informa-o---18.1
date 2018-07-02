import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizarPedidoComponent } from './finalizar-pedido.component';
import { RouterModule } from '@angular/router';
import { ConfirmarTerminoComponent } from './confirmar-termino/confirmar-termino.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FinalizarPedidoComponent, ConfirmarTerminoComponent]
})
export class FinalizarPedidoModule { }
