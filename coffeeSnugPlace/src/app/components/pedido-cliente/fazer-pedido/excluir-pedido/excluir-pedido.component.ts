import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../../providers/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir-pedido',
  templateUrl: './excluir-pedido.component.html',
  styleUrls: ['./excluir-pedido.component.css']
})
export class ExcluirPedidoComponent implements OnInit {

  pedidoId;

  constructor(
    private servicoPedido: PedidoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        if (queryParams) {
          this.pedidoId = queryParams['key'];
        }
      }
    )
  }

  ngOnInit() {
  }

  excluirPedido() {
    if (this.pedidoId) {
      this.servicoPedido.deleteByKey(this.pedidoId);
    }
  }

}
