package br.com.fiap.cardapp.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cardapp.model.Estabelecimento;

public interface EstabelecimentoRepository extends JpaRepository<Estabelecimento, Long>{
		
	Page<Estabelecimento> findByEnderecoContaining(String endereco, Pageable pageable);
}
