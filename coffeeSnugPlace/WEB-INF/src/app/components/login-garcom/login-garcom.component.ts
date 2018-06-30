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


  constructor(
    // private servico: AppAlunoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.garcom);
    if(this.garcom.email && this.garcom.senha){
      this.router.navigate(['/pedido-cliente/fazer-pedido'])
    }
  }

}
