import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { Garcom } from '../../../models/garcom.model';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  garcom: Garcom = new Garcom();

  constructor() {
    this.garcom.pedidosFeitos = new Array<Pedido>();
    this.pedido.tipoDeCafe = "Café preto",
    this.pedido.acompanhamento = "Pão de queijo"
    this.garcom.pedidosFeitos.push(this.pedido);
  }

  ngOnInit() {
  }

}
