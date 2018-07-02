import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';
import { PedidoService } from '../../../../providers/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  pedidoId: number;
  pedido: Pedido = new Pedido();
  pedidoAnterior;
  pedidos: Array<Pedido> = new Array<Pedido>();

  constructor(
    private servicoPedido: PedidoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams:any)=>{
        if(queryParams){
          this.pedidoId = queryParams['key'];
          this.servicoPedido.getById(this.pedidoId).subscribe(res=>{
            this.pedido = res.json();
          })
          console.log(this.pedidoId);
        }
      }
    ) 
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pedido);
    if(this.pedido){
      this.pedidoAnterior = this.pedido;
      this.servicoPedido.put(this.pedido);
    }
  }
}
