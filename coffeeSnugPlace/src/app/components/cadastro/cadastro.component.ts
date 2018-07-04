import { PessoaService } from './../../providers/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from './../../models/pessoa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    public service: PessoaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.pessoa){
      if (this.pessoa.email && this.pessoa.senha) {
        this.service.post(this.pessoa);
      }
    }
  }
}
