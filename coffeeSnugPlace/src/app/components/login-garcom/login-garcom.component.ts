import { Pessoa } from './../../models/pessoa.model';
import { Garcom } from './../../models/garcom.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-garcom',
  templateUrl: './login-garcom.component.html',
  styleUrls: ['./login-garcom.component.css']
})
export class LoginGarcomComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {

    if(this.pessoa){
      if (this.pessoa.email && this.pessoa.senha) {
        this.router.navigate(['/pedido-cliente/fazer-pedido']);
      }
    }
  }

}
