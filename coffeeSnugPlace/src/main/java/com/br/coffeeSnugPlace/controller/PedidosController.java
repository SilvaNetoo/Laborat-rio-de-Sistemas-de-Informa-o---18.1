package com.br.coffeeSnugPlace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.coffeeSnugPlace.models.Pedido;
import com.br.coffeeSnugPlace.service.PedidoService;

@CrossOrigin
@RestController
@RequestMapping(value="/pedidos")
public class PedidosController {

	@Autowired
	private PedidoService service;
	
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Pedido> buscar(@PathVariable Long id){
		
		return new ResponseEntity<Pedido>(service.buscaPorId(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Pedido> adicionar(@RequestBody Pedido pedido){
		
		return new ResponseEntity<Pedido>(service.salva(pedido), HttpStatus.CREATED);
	}
	
	
	public ResponseEntity<Pedido> editar(@RequestBody Pedido pedido){		
		
		return new ResponseEntity<Pedido>(service.atualiza(pedido), HttpStatus.OK);
	}
	

	@GetMapping
	public ResponseEntity<List<Pedido>> getTodos(){		
		
		return new ResponseEntity<List<Pedido>>(service.buscarTodas(), HttpStatus.OK);
	}
	
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<String> delete(@PathVariable Long id){
		service.exclui(id);
		return new ResponseEntity<String>(HttpStatus.OK);
		
	}
	
	
}
