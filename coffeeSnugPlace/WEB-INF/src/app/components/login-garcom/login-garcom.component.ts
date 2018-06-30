import { Garcom } from './../../models/garcom.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-garcom',
  templateUrl: './login-garcom.component.html',
  styleUrls: ['./login-garcom.component.css']
})
export class LoginGarcomComponent implements OnInit {

  garcom: Garcom = new Garcom();

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
      if(this.garcom.email && this.garcom.senha){
        this.router.navigate(['/pedido'])
      }
    }
  }

}
