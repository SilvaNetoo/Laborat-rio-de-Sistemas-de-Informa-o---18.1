import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../../../providers/pedido.service';
import { ACEITO, FINALIZADO } from '../../../../const';

@Component({
  selector: 'app-confirmar-termino',
  templateUrl: './confirmar-termino.component.html',
  styleUrls: ['./confirmar-termino.component.css']
})
export class ConfirmarTerminoComponent implements OnInit {

  pedidoId: number;
  pedidoAnterior;

  constructor(
    public servicoCozinheiro: PedidoService,
    private route: ActivatedRoute,
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

  finalizarPedido() {
    this.pedidoAnterior.estado = FINALIZADO;
    this.pedidoAnterior.id = this.pedidoId;
    console.log(this.pedidoAnterior);
    this.servicoCozinheiro.post(this.pedidoAnterior);
  }


}
