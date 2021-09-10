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

import br.com.fiap.cardapp.repository.PedidoRepository;
import br.com.fiap.cardapp.model.Pedido;

@RestController
@RequestMapping("/api/pedido")
public class ApiPedidoRepository {
	
	@Autowired
	private PedidoRepository repository;
	
	@GetMapping 
	@Cacheable("pedidos")
	public Page<Pedido> index(
			@RequestParam(required = false) String status,
			@PageableDefault Pageable pageable) {
		
		if (status == null ) 
			return repository.findAll(pageable);
		
		return repository
				.findByStatusContaining(status, pageable);
	}
	
	@PostMapping
	@CacheEvict(value="pedidos", allEntries = true)
	public ResponseEntity<Pedido> create(
			@RequestBody @Valid Pedido pedido,
			UriComponentsBuilder uriBuilderPedido
			) {
		repository.save(pedido);
		URI uri = uriBuilderPedido
				.path("api/pedido/{id}")
				.buildAndExpand(pedido.getId())
				.toUri();
		 
		return ResponseEntity.created(uri).body(pedido);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Pedido> get(@PathVariable Long id) {
		return ResponseEntity.of(repository.findById(id));
	}
	
	@DeleteMapping("{id}")
	@CacheEvict(value="pedidos", allEntries = true)
	public ResponseEntity<Pedido> delete(@PathVariable Long id) {
		Optional<Pedido> pedido = repository.findById(id);
		if(pedido.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("{id}")
	@CacheEvict(value="pedidos", allEntries = true)
	public ResponseEntity<Pedido> edit(@PathVariable Long id, @RequestBody Pedido newPedido){
		Optional<Pedido> optional = repository.findById(id);
		
		if(optional.isEmpty()) 
			return ResponseEntity.notFound().build();
		
		Pedido pedido = optional.get();
		pedido.setValor(newPedido.getValor());
		pedido.setStatus(newPedido.getStatus());
		pedido.setHora(newPedido.getHora());
		
		repository.save(pedido);
		return ResponseEntity.ok(pedido);
	}
	
	
	
	

}
