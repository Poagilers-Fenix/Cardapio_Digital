package br.com.fiap.cardapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
@Entity
public class Usuario {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Informe um telefone")
	private String telefone;
	
	@Size(min = 8, max = 20, message="A senha deve ter no mínimo 8 e no máximo 20 caracteres.")
	private String senha;
	
}
