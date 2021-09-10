package br.com.fiap.cardapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.cardapp.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
}
