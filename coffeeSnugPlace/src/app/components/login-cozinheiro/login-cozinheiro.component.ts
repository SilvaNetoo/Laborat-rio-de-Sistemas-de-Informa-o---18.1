import { PessoaService } from './../../providers/pessoa.service';
import { Pessoa } from './../../models/pessoa.model';
import { Cozinheiro } from './../../models/cozinheiro.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cozinheiro',
  templateUrl: './login-cozinheiro.component.html',
  styleUrls: ['./login-cozinheiro.component.css']
})
export class LoginCozinheiroComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    public service: PessoaService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {

    if(this.pessoa){
      if (this.pessoa.email && this.pessoa.senha) {
        this.router.navigate(['/pedido-cozinha']);
      }
    }
  }


}
