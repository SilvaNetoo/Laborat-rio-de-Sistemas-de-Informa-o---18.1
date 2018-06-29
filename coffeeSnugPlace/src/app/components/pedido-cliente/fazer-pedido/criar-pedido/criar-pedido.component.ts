import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../models/pedido.model';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.css']
})
export class CriarPedidoComponent implements OnInit {

  pedido: Pedido = new Pedido();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.pedido);
  }

}
