import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/pedido.model';
import { Garcom } from '../../../models/garcom.model';
import { PedidoService } from '../../../providers/pedido.service';
import { CRIADO } from '../../../const';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  garcom: Garcom = new Garcom();


  constructor(public servicoGarcom: PedidoService) {
    servicoGarcom.getByState(CRIADO).subscribe(res=>{
      this.garcom.pedidosFeitos = res;
    });
  }

  ngOnInit() {
  }

}
