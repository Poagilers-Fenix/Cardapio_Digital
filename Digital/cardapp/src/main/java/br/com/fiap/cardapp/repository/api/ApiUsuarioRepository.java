package br.com.fiap.cardapp.repository.api;

import java.net.URI;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.fiap.cardapp.repository.UsuarioRepository;
import br.com.fiap.cardapp.model.Usuario;

@RestController
@RequestMapping("/api/usuario")
public class ApiUsuarioRepository {
	
	@Autowired
	private UsuarioRepository repository;
	
	@PostMapping
	public ResponseEntity<Usuario> create(
			@RequestBody @Valid Usuario usuario,
			UriComponentsBuilder uriBuilder
			) {
		repository.save(usuario);
		URI uri = uriBuilder
				.path("api/usuario/{id}")
				.buildAndExpand(usuario.getId())
				.toUri();
		 
		return ResponseEntity.created(uri).body(usuario); 
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Usuario> get(@PathVariable Long id) {
		return ResponseEntity.of(repository.findById(id));
	}
	
	@DeleteMapping("{id}")
	@CacheEvict(value="usuarios", allEntries = true)
	public ResponseEntity<Usuario> delete(@PathVariable Long id) {
		Optional<Usuario> usuario = repository.findById(id);
		if(usuario.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		repository.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("{id}")
	@CacheEvict(value="usuarios", allEntries = true)
	public ResponseEntity<Usuario> edit(@PathVariable Long id, @RequestBody Usuario newUser){
		Optional<Usuario> optional = repository.findById(id);
		
		if(optional.isEmpty()) 
			return ResponseEntity.notFound().build();
		
		Usuario usuario = optional.get();
		usuario.setTelefone(newUser.getTelefone() );
		usuario.setSenha(newUser.getSenha());
		
		repository.save(usuario);
		return ResponseEntity.ok(usuario);
	}
	
	
}
