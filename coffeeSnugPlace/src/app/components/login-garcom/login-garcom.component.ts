import { Pessoa } from './../../models/pessoa.model';
import { Garcom } from './../../models/garcom.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../../providers/pessoa.service';

@Component({
  selector: 'app-login-garcom',
  templateUrl: './login-garcom.component.html',
  styleUrls: ['./login-garcom.component.css']
})
export class LoginGarcomComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  pessoas;

  constructor(
    public service: PessoaService,
    private router: Router
  ) {

  }

  ngOnInit(){}

  onSubmit() {
    this.service.getAll().subscribe(res=>{
      this.pessoas = res;
      console.log(this.pessoas);
      this.pessoas.forEach(element => {
        console.log(element);
        if(element.tipo == "garcom" && element.email == this.pessoa.email){
          this.router.navigate(['/pedido-cliente/fazer-pedido']);
        }
      });
    });
  }

}
