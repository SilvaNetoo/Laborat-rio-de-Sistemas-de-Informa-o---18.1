import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';
import { Garcom } from '../../../../models/garcom.model';
import { CRIADO } from '../../../../const';
import { PedidoService } from '../../../../providers/pedido.service';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();

  garcom: Garcom = new Garcom();

  constructor(public servicoGarcom: PedidoService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.pedido);
    if (this.pedido) {
      this.pedido.estado = CRIADO;
      this.servicoGarcom.post(this.pedido);
      this.pedido = new Pedido();
    }
  }

}
