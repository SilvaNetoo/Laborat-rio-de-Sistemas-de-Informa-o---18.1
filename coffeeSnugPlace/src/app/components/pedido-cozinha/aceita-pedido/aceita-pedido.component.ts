import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { Cozinheiro } from '../../../models/cozinheiro.model';
import { PedidoService } from '../../../providers/pedido.service';
import { CRIADO } from '../../../const';

@Component({
  selector: 'app-aceita-pedido',
  templateUrl: './aceita-pedido.component.html',
  styleUrls: ['./aceita-pedido.component.css']
})
export class AceitaPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  cozinheiro: Cozinheiro = new Cozinheiro();

  constructor(public servicoGarcom: PedidoService) {
    servicoGarcom.getByState(CRIADO).subscribe(res=>{
      this.cozinheiro.pedidosAceitos = res;
      console.log(this.cozinheiro.pedidosAceitos);
    });
  }

  ngOnInit() {
  }

}
