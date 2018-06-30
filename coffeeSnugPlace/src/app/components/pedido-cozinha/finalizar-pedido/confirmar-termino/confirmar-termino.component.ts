import { Component, OnInit } from '@angular/core';
import { GarcomService } from '../../../../providers/garcom.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-termino',
  templateUrl: './confirmar-termino.component.html',
  styleUrls: ['./confirmar-termino.component.css']
})
export class ConfirmarTerminoComponent implements OnInit {

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
   * e tirar de servico pedido service que deverá se chamar de cozinha.service 
   */
  finalizarPedido(){
    console.log(this.pedidoId)
    if (this.pedidoId) {
      // this.servicoGarcom.deleteByKey(this.pedidoId);
    }
  }


}
