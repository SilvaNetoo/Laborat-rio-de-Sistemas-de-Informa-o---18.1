import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FazerPedidoComponent } from './fazer-pedido.component';
import { RouterModule } from '@angular/router';
import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { ExcluirPedidoComponent } from './excluir-pedido/excluir-pedido.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { FormsModule } from '@angular/forms';
import { NgxNotificationComponent } from 'ngx-notification';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    FazerPedidoComponent,
    CriarPedidoComponent,
    ExcluirPedidoComponent,
    EditarPedidoComponent,
    NgxNotificationComponent
  ]
})
export class FazerPedidoModule { }
