package br.com.fiap.cardapp.repository.api;

import java.net.URI;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.fiap.cardapp.repository.EstabelecimentoRepository;
import br.com.fiap.cardapp.model.Estabelecimento;

@RestController
@RequestMapping("/api/estabelecimento")
public class ApiEstabelecimentoRepository {
	
	@Autowired
	private EstabelecimentoRepository repository;
	
	@GetMapping 
	@Cacheable("estabelecimentos")
	public Page<Estabelecimento> index(
			@RequestParam(required = false) String endereco,
			@PageableDefault Pageable pageable) {
		
		if (endereco == null ) 
			return repository.findAll(pageable);
		
		return repository
				.findByEnderecoContaining(endereco, pageable);
	}
	
	@PostMapping
	@CacheEvict(value="estabelecimentos", allEntries = true)
	public ResponseEntity<Estabelecimento> create(
			@RequestBody @Valid Estabelecimento estabelecimento,
			UriComponentsBuilder uriBuilderEstabelecimento
			) {
		repository.save(estabelecimento);
		URI uri = uriBuilderEstabelecimento
				.path("api/estabelecimento/{id}")
				.buildAndExpand(estabelecimento.getId())
				.toUri();
		 
		return ResponseEntity.created(uri).body(estabelecimento);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Estabelecimento> get(@PathVariable Long id) {
		return ResponseEntity.of(repository.findById(id));
	}
	
	@DeleteMapping("{id}")
	@CacheEvict(value="estabelecimentos", allEntries = true)
	public ResponseEntity<Estabelecimento> delete(@PathVariable Long id) {
		Optional<Estabelecimento> estabelecimento = repository.findById(id);
		if(estabelecimento.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("{id}")
	@CacheEvict(value="estabelecimentos", allEntries = true)
	public ResponseEntity<Estabelecimento> edit(@PathVariable Long id, @RequestBody Estabelecimento newEstabelecimento){
		Optional<Estabelecimento> optional = repository.findById(id);
		
		if(optional.isEmpty()) 
			return ResponseEntity.notFound().build();
		
		Estabelecimento estabelecimento = optional.get();
		estabelecimento.setCnpj(newEstabelecimento.getCnpj());
		estabelecimento.setRazao_social(newEstabelecimento.getRazao_social());
		estabelecimento.setNome_fantasia(newEstabelecimento.getNome_fantasia());
		estabelecimento.setEndereco(newEstabelecimento.getEndereco());
		estabelecimento.setTelefone(newEstabelecimento.getTelefone());
		estabelecimento.setEmail(newEstabelecimento.getEmail());
		
		repository.save(estabelecimento);
		return ResponseEntity.ok(estabelecimento);
	}
	
	
	
	

}
