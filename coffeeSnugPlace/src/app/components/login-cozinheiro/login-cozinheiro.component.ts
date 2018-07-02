import { Cozinheiro } from './../../models/cozinheiro.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-cozinheiro',
  templateUrl: './login-cozinheiro.component.html',
  styleUrls: ['./login-cozinheiro.component.css']
})
export class LoginCozinheiroComponent implements OnInit {

  cozinheiro: Cozinheiro = new Cozinheiro();

  constructor(
    // private servico: AppAlunoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.cozinheiro){
      if (this.cozinheiro.email && this.cozinheiro.senha) {
        this.router.navigate(['/pedido-cozinha']);
      }
    }
  }


}
