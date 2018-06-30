import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';
import { GarcomService } from '../../../../providers/garcom.service';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();

  constructor(public servicoGarcom: GarcomService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pedido);
    if(this.pedido){
      this.servicoGarcom.post(this.pedido);
    }
  }

}
