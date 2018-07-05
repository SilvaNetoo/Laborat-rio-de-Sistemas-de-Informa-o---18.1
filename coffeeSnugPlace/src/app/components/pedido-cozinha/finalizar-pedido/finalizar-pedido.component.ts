import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { Cozinheiro } from '../../../models/cozinheiro.model';
import { PedidoService } from '../../../providers/pedido.service';
import { FINALIZADO, ACEITO } from '../../../const';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  cozinheiro: Cozinheiro = new Cozinheiro();

  constructor(
    public servicoGarcom: PedidoService,
  ) {
    servicoGarcom.getByState(ACEITO).subscribe(res=>{
      console.log(res);
      this.cozinheiro.pedidosConcluidos = res;
    });
  }

  ngOnInit() {
  }

}
