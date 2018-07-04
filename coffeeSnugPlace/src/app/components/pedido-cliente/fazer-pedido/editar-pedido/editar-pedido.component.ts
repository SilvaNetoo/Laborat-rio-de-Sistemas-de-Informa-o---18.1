import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from '../../../../providers/pedido.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent implements OnInit {

  pedidoId: number;
  pedido: Pedido = new Pedido();
  pedidoAnterior;

  constructor(
    private servicoGarcom: PedidoService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(
      (queryParams:any)=>{
        if(queryParams){
          this.pedidoId = queryParams['key'];
          this.servicoGarcom.getById(this.pedidoId).subscribe(res=>{
            this.pedidoAnterior = res;
          })
        }
      }
    ) 
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pedido);
    if(this.pedido){
      this.pedidoAnterior.acompanhamento = this.pedido.acompanhamento;
      this.pedidoAnterior.tipoCafe = this.pedido.tipoCafe;
      this.pedidoAnterior.quantidade = this.pedido.quantidade;
      this.pedidoAnterior.id = this.pedidoId;
      this.servicoGarcom.post(this.pedidoAnterior);
    }
  }
}
