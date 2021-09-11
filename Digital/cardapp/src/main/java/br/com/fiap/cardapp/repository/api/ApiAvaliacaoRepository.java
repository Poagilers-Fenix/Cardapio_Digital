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

import br.com.fiap.cardapp.repository.AvaliacaoRepository;
import br.com.fiap.cardapp.model.Avaliacao;

@RestController
@RequestMapping("/api/avaliacao")
public class ApiAvaliacaoRepository {
	
	@Autowired
	private AvaliacaoRepository repository;
	
	@GetMapping 
	@Cacheable("avaliacoes")
	public Page<Avaliacao> index(
			@RequestParam(required = false) String descricao,
			@PageableDefault Pageable pageable) {
		
		if (descricao == null ) 
			return repository.findAll(pageable);
		
		return repository
				.findByDescricaoContaining(descricao, pageable);
	}
	
	@PostMapping
	@CacheEvict(value="avaliacoes", allEntries = true)
	public ResponseEntity<Avaliacao> create(
			@RequestBody @Valid Avaliacao avaliacao,
			UriComponentsBuilder uriBuilderAvaliacao
			) {
		repository.save(avaliacao);
		URI uri = uriBuilderAvaliacao
				.path("api/avaliacao/{id}")
				.buildAndExpand(avaliacao.getId())
				.toUri();
		 
		return ResponseEntity.created(uri).body(avaliacao);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Avaliacao> get(@PathVariable Long id) {
		return ResponseEntity.of(repository.findById(id));
	}
	
	@DeleteMapping("{id}")
	@CacheEvict(value="avaliacoes", allEntries = true)
	public ResponseEntity<Avaliacao> delete(@PathVariable Long id) {
		Optional<Avaliacao> avaliacao = repository.findById(id);
		if(avaliacao.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("{id}")
	@CacheEvict(value="avaliacoes", allEntries = true)
	public ResponseEntity<Avaliacao> edit(@PathVariable Long id, @RequestBody Avaliacao newAvaliacao){
		Optional<Avaliacao> optional = repository.findById(id);
		
		if(optional.isEmpty()) 
			return ResponseEntity.notFound().build();
		
		Avaliacao avaliacao = optional.get();
		avaliacao.setNr_experiencia(newAvaliacao.getNr_experiencia());
		avaliacao.setDescricao(newAvaliacao.getDescricao());
		
		repository.save(avaliacao);
		return ResponseEntity.ok(avaliacao);
	}
	
	
	
	

}
