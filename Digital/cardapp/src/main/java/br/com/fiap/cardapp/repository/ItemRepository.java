package br.com.fiap.cardapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import br.com.fiap.cardapp.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{
	
	Page<Item> findByNomeContaining(String nome, Pageable pageable);

}
