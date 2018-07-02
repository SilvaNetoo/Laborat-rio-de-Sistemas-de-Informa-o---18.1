import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarcomService } from '../../../../providers/garcom.service';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.css']
})
export class ConfirmarPedidoComponent implements OnInit {

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

  /**
   * Aqui deve passar o pedido para o serviço de cozinha
   * e tirar de servico pedido service que deverá se chamar de garcom.service 
   */
  aceitarPedido(){
    console.log(this.pedidoId)
    if (this.pedidoId) {
      // this.servicoGarcom.deleteByKey(this.pedidoId);
    }
  }

}
