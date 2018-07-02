import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarcomService } from '../../../../providers/garcom.service';

@Component({
  selector: 'app-excluir-pedido',
  templateUrl: './excluir-pedido.component.html',
  styleUrls: ['./excluir-pedido.component.css']
})
export class ExcluirPedidoComponent implements OnInit {

  pedidoId;

  constructor(
    private servicoGarcom: GarcomService,
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
      this.servicoGarcom.deleteByKey(this.pedidoId);
    }
  }

}
