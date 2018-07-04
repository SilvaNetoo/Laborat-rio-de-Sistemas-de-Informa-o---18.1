import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Pedido } from '../models/pedido.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Garcom } from '../models/garcom.model';
import { Cozinheiro } from '../models/cozinheiro.model';

const PEDIDO_URN = '/pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  contador: number = 0;
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  post(pedido: Pedido) {
    if (pedido) {
      this.http.post(`${environment.URL_API}${PEDIDO_URN}`, pedido, { headers: this.headers })
        .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
    };
  }

  getAll(): Observable<any> {
    return this.http.get(`${environment.URL_API}${PEDIDO_URN}`, { headers: this.headers }).pipe(
      map((response: Response) => response.json())
    );
  }

  getByState(estado: string): Observable<any> {
    let params = new URLSearchParams();
    params.append("id", estado.toString());
    return this.http.get(`${environment.URL_API}${PEDIDO_URN}/search?estado=${estado}`, { headers: this.headers }).pipe(
      map((response: Response) => response.json())
    );
  }

  getById(id: number) {
    let params = new URLSearchParams();
    params.append("id", id.toString());
    return this.http.get(`${environment.URL_API}${PEDIDO_URN}/${id}`, { headers: this.headers, search: params }).pipe(
      map((response: Response) => response.json())
    );
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
    this.http.delete(`${environment.URL_API}${PEDIDO_URN}/${id}`, { headers: this.headers, search: params }).subscribe(res=>{
      console.log(res);
    })
  }

}