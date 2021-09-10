package br.com.fiap.cardapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cardapp.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
	
	Page<Pedido> findByStatusContaining(String name, Pageable pageable);

}
