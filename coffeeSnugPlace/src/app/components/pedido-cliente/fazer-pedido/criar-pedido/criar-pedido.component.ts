import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';
import { PedidoService } from '../../../../providers/pedido.service';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();

  constructor(public servicoPedido: PedidoService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pedido);
    if(this.pedido){
      this.servicoPedido.post(this.pedido);
    }
  }

}
