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
  isOk: boolean = false;

  constructor(
    public service: PessoaService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.pessoa)
    if(this.pessoa.tipo && this.pessoa.email && this.pessoa.senha){
      this.service.post(this.pessoa);
    }
  }

  getProfession(profissão: string):boolean{
    this.isOk = false;
    this.pessoa.tipo = profissão;
    if(this.pessoa.tipo){
      this.isOk = true;
    }
    return this.isOk;
  }
}
