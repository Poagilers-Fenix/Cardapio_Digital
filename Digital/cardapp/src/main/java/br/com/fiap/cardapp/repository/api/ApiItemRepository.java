package br.com.fiap.cardapp.repository.api;

import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.cardapp.repository.ItemRepository;
import br.com.fiap.cardapp.model.Item;

@RestController
@RequestMapping("/api/item")
public class ApiItemRepository {
	
	@Autowired
	private ItemRepository repository;
	
	@GetMapping 
	@Cacheable("itens")
	public Page<Item> index(
			@RequestParam(required = false) String nome,
			@PageableDefault Pageable pageable) {
		
		if (nome == null ) 
			return repository.findAll(pageable);
		
		return repository
				.findByNomeContaining(nome, pageable);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Item> get(@PathVariable Long id) {
		return ResponseEntity.of(repository.findById(id));
	}
	
	@DeleteMapping("{id}")
	@CacheEvict(value="itens", allEntries = true)
	public ResponseEntity<Item> delete(@PathVariable Long id) {
		Optional<Item> item = repository.findById(id);
		if(item.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
