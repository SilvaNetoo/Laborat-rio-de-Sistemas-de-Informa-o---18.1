import { Component, OnInit } from '@angular/core';
import { NgxNotificationService } from 'ngx-notification';
import { CRIADO, FINALIZADO } from '../../../const';
import { Garcom } from '../../../models/garcom.model';
import { Pedido } from '../../../models/pedido.model';
import { PedidoService } from '../../../providers/pedido.service';

@Component({
  selector: 'app-fazer-pedido',
  templateUrl: './fazer-pedido.component.html',
  styleUrls: ['./fazer-pedido.component.css']
})
export class FazerPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();
  garcom: Garcom = new Garcom();


  constructor(
    public servicoGarcom: PedidoService,
    private ngxNotificationService: NgxNotificationService        
  ) {
    servicoGarcom.getByState(CRIADO).subscribe(res=>{
      this.garcom.pedidosFeitos = res;
    });

    servicoGarcom.getByState(FINALIZADO).subscribe(res=>{
      let pedidos:Array<any> = new Array<any>()
      pedidos = res;
      pedidos.forEach( element => {
        this.ngxNotificationService.sendMessage('Seu pedido finalizado'+' tipo do café: '+element.tipoCafe+' acompanhamento: '+ element.acompanhamento +' quantidade: ' + element.quantidade , 'dark', 'bottom-right');
      });
    });
  }

  ngOnInit() {
  }

}
