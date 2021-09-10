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
public class Item {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="O nome deve ser preenchido")
	private String nome;
	
	@NotBlank
	@Size(max = 1, message="Se o item for destaque digite 1, caso não digite 0")
	private int destaque;
	
	@NotBlank(message="Digite uma descricao do item.")
	private String descricao;
	
	private Double valor;
		
	private Double calorias;
}
