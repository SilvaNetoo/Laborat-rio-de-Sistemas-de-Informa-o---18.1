package com.br.coffeeSnugPlace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.coffeeSnugPlace.models.Pessoa;
import com.br.coffeeSnugPlace.service.PessoaService;

@CrossOrigin
@RestController
@RequestMapping(value="/pessoas")
public class PessoaController {

	@Autowired
	private PessoaService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Pessoa> buscar(@PathVariable Long id){
		
		return new ResponseEntity<Pessoa>(service.buscaPorId(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Pessoa> adicionar(@RequestBody Pessoa pessoa){
		
		return new ResponseEntity<Pessoa>(service.salva(pessoa), HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<Pessoa> editar(@RequestBody Pessoa pessoa){		
		
		return new ResponseEntity<Pessoa>(service.atualiza(pessoa), HttpStatus.OK);
	}
	

	@GetMapping
	public ResponseEntity<List<Pessoa>> getTodos(){		
		
		return new ResponseEntity<List<Pessoa>>(service.buscarTodas(), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		service.exclui(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}

	
	
	
	
	
	
}
