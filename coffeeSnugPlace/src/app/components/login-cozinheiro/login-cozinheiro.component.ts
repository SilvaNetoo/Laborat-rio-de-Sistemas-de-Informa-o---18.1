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
  pessoas;

  constructor(
    public service: PessoaService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.getAll().subscribe(res => {
      this.pessoas = res;
      console.log(this.pessoas);
      this.pessoas.forEach(element => {
        console.log(element);
        if (element.tipo == "cozinheiro" && element.email == this.pessoa.email) {
          this.router.navigate(['/pedido-cozinha']);
        }
      });
    });
  }


}
