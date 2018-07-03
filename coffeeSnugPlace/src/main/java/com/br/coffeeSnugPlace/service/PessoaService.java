package com.br.coffeeSnugPlace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.br.coffeeSnugPlace.models.Pessoa;
import com.br.coffeeSnugPlace.repository.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	private PessoaRepository repository;
	
	public Pessoa salva(Pessoa pessoa){
		return repository.save(pessoa);
	}
	
	public Pessoa atualiza(Pessoa pessoa){
		return repository.save(pessoa);
	}
	
	public void exclui(Long id){
		repository.deleteById(id);
	}
	
	public Pessoa buscaPorId(Long id){
		return (Pessoa) repository.findById(id).get();
	}
	
	public List<Pessoa> buscarTodas(){
		return (List<Pessoa>) repository.findAll();
	}
	
	
	
}
