package com.br.coffeeSnugPlace.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.br.coffeeSnugPlace.models.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, Long>{
	
	public List<Pedido> findByEstado(String estado);
	
}
