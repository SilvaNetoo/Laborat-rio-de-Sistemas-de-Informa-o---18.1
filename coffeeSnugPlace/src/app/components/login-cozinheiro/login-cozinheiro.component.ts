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

  usuarios = [
    {
      nome:'aluno',
      email:'aluno@email.com',
      senha:'123456'
    }
  ]

  constructor(
    // private servico: AppAlunoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.cozinheiro.email && this.cozinheiro.senha){
        this.router.navigate(['/aceitar-pedido'])
      }
    }
  }


}
