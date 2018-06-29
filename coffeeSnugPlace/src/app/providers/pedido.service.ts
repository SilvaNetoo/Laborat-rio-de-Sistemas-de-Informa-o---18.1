import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedido.model';

const PEDIDO_URN = '/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  contador: number = 0;
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

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
    };
  }

  getAll() {
    return this.http.get(`${environment.URL_API}${PEDIDO_URN}`, { headers: this.headers });
  }

  getById(id: number) {
    let params = new URLSearchParams();
    params.append("id", id.toString());
    return this.http.get(`${environment.URL_API}${PEDIDO_URN}`, { headers: this.headers, search: params });
  }

  put(pedido: Pedido) {
    if (pedido) {
      this.http.put(`${environment.URL_API}${PEDIDO_URN}`, pedido, { headers: this.headers })
        .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        });
    }
  }

  deleteByKey(id: number) {
    let params = new URLSearchParams();
    params.append("id", id.toString());
    this.http.delete(`${environment.URL_API}${PEDIDO_URN}`, { headers: this.headers, search: params });
  }

}
