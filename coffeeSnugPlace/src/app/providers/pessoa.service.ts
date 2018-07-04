import { Pessoa } from './../models/pessoa.model';
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PESSOA_URN = '/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  contador: number = 0;
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  post(pessoa: Pessoa) {
    if (pessoa) {
      this.http.post(`${environment.URL_API}${PESSOA_URN}`, pessoa, { headers: this.headers })
        .subscribe(res => {
          console.log(res);
        }, err => {
          console.log(err);
        })
    };
  }

  getAll() {
    return this.http.get(`${environment.URL_API}${PESSOA_URN}`, { headers: this.headers }).pipe(
      map((response: Response) => response.json())
    );
  }

  getById(id: number) {
    let params = new URLSearchParams();
    params.append("id", id.toString());
    return this.http.get(`${environment.URL_API}${PESSOA_URN}`, { headers: this.headers, search: params });
  }

  put(pessoa: Pessoa) {
    if (pessoa) {
      this.http.put(`${environment.URL_API}${PESSOA_URN}`, pessoa, { headers: this.headers })
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
    this.http.delete(`${environment.URL_API}${PESSOA_URN}`, { headers: this.headers, search: params });
  }

}
