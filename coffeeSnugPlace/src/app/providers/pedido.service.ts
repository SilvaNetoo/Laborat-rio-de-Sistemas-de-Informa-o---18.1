import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedido.model';
import 'rxjs/add/operator/map';

const PEDIDO_URN = '/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  contador: number = 0;
  headers: Headers = new Headers();

  constructor(private http: Http) { }

  post(pedido: Pedido) {
    if (pedido) {
      pedido.id = this.contador++;
      this.http.post(`${environment.URL_API}${PEDIDO_URN}`, pedido, { headers: this.headers })
        .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
    }
  }

  getAll() {
    this.http.get(`${environment.URL_API}${PEDIDO_URN}`)
  }
}
