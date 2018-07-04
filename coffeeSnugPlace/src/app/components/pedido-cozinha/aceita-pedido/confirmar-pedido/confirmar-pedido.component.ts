import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../../../providers/pedido.service';
import { ACEITO } from '../../../../const';
import { Pedido } from '../../../../models/pedido.model';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {

  pedidoId:number;
  pedidoAnterior;

  constructor(
    public servicoCozinheiro: PedidoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams: any) => {
        if (queryParams) {
          this.pedidoId = queryParams['key'];
          this.servicoCozinheiro.getById(this.pedidoId).subscribe(res => {
            this.pedidoAnterior = res;
          })
        }
      }
    )
  }

  ngOnInit() {
  }

  /**
   * Aqui deve passar o pedido para o serviço de cozinha
   * e tirar de servico pedido service que deverá se chamar de garcom.service 
   */
  aceitarPedido() {
    this.pedidoAnterior.estado = ACEITO;
    this.pedidoAnterior.id = this.pedidoId;
    console.log(this.pedidoAnterior);
    this.servicoCozinheiro.post(this.pedidoAnterior);
  }

}
