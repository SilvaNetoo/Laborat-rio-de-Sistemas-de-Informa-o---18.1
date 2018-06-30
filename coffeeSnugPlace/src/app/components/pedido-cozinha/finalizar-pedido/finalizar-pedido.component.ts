import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { Cozinheiro } from '../../../models/cozinheiro.model';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  cozinheiro: Cozinheiro = new Cozinheiro();

  constructor() {
    this.cozinheiro.pedidosAceitos = new Array<Pedido>();
    this.pedido.id = 0;
    this.pedido.tipoDeCafe = "Café preto";
    this.pedido.acompanhamento = "Pão de queijo";
    this.cozinheiro.pedidosAceitos.push(this.pedido);
  }

  ngOnInit() {
  }

}
