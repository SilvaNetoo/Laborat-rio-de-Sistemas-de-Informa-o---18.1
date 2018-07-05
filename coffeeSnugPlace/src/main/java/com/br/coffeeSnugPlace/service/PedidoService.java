package com.br.coffeeSnugPlace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.coffeeSnugPlace.models.Pedido;
import com.br.coffeeSnugPlace.repository.PedidoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository repository;
	
	
	public Pedido salva(Pedido pedido){
		return repository.save(pedido);
	}
	
	public List<Pedido> buscaPorEstado(String estado){
		return repository.findByEstado(estado);
	}
	
	public Pedido atualiza(Pedido pedido){
		return repository.save(pedido);
	}
	
	public void exclui(Long id){
		repository.deleteById(id);
	}
	
	public Pedido buscaPorId(Long id){
		return (Pedido) repository.findById(id).get();
	}
	
	public List<Pedido> buscarTodas(){
		return (List<Pedido>) repository.findAll();
	}
	
	
	
}

